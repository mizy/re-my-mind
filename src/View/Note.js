class Note {
	constructor(app) {
		this.app = app;
		this.initDom();
	}

	initDom() {
		const note = document.createElement("div");
		note.className = "mm-note hide";
		note.innerHTML = `<div class="note-util"></div><div  class="note-content"><p /></div>`;
		this.app._port.appendChild(note);
		this.note = note;
	}

	getPosition(item) {
		this.x += item._dom.content.offsetLeft + item._dom.node.offsetLeft;
		this.y += item._dom.content.offsetTop + item._dom.node.offsetTop;
		if (item._parent && item._parent._dom) {
			this.getPosition(item._parent)
		}
	}

	show(item) {
		this.status = "show";
		const content = this.note.querySelector(".note-content p");
		content.contentEditable = true;
		content.innerHTML = decodeURIComponent(item.note || "");
		this.x = 0; this.y = 0;
		this.getPosition(item);
		this.note.style.top = this.y + 80 + "px";
		this.note.style.left = this.x + "px";
		this.note.className = "mm-note";
		this.item = item;
		const selection = getSelection();
		const range = selection.getRangeAt(0);
		range.selectNodeContents(content);
		selection.removeAllRanges();
		selection.addRange(range);
		this.note.addEventListener("blur", this.onBlur)

	}

	onBlur = () => {
		this.hide();
		this.note.removeEventListener("blur", this.onBlur)
	}

	hide() {
		this.status = "hide";
		this.note.className = "mm-note hide";
		const content = this.note.querySelector(".note-content p");
		content.contentEditable = false;
		content.innerHTML = "";
		this.item.note = encodeURIComponent(content.innerHTML)
	}

}
MM.Note = Note
export default Note;