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

	getPosition(item, index) {
		this.x += (index === 0 ? item._dom.content.offsetLeft : 0) + item._dom.node.offsetLeft;
		this.y += (index === 0 ? item._dom.content.offsetTop : 0) + item._dom.node.offsetTop;
		if (item._parent && item._parent._dom) {
			this.index++;
			this.getPosition(item._parent, 1)
		}
	}

	show(item) {
		this.status = "show";
		const content = this.note.querySelector(".note-content p");
		content.contentEditable = true;
		content.innerHTML = decodeURIComponent(item.note || "");
		this.x = 0; this.y = 0; this.index = 0;
		this.getPosition(item, 0);
		this.note.style.top = (this.index < 1 ? 80 : 40) + this.y + "px";
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

	}

}
MM.Note = Note
export default Note;