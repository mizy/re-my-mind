class Note {
	constructor(app) {
		this.app = app;
		this.initDom();
	}

	initDom() {
		const note = document.createElement("div");
		note.className = "mm-note hide";
		note.innerHTML = `<div class="note-util">备注</div><div  class="note-content"><p /></div>`;
		this.app._port.appendChild(note);
		this.note = note;
	}

	show(item) {
		this.status = "show";
		const content = this.note.querySelector(".note-content p");
		content.contentEditable = true;
		content.innerHTML = decodeURIComponent(item.note || "");
		const pos = item._dom.content.getBoundingClientRect();
		this.x = pos.x;
		this.y = pos.y - 60;
		this.note.style.top = ((item._parent && item._parent._dom) ? 40 : 80) + this.y + "px";
		this.note.style.left = this.x + "px";
		this.note.className = "mm-note";
		this.item = item;

		setTimeout(() => {
			const selection = getSelection();
			const range = selection.getRangeAt(0);
			selection.removeAllRanges();
			range.selectNodeContents(content);
			// selection.addRange(range);

			content.focus();

		}, 100)
	}

	hide() {
		this.status = "hide";
		this.note.className = "mm-note hide";
		const content = this.note.querySelector(".note-content p");
		this.item.note = encodeURIComponent(content.innerHTML);
		this.item.endNote();
		content.innerHTML = "";
		MM.publish("item-change", { type: "note", item: this.item })
	}

	destroy() {
		this.app._port.removeChild(this.note);
		this.app = null;
		this.item = null
	}

}
MM.Note = Note
export default Note;