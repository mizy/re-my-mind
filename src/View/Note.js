class Note {
	constructor(app) {
		this.remind = app;
		this.initDom();
	}

	initDom() {
		const note = document.createElement("div");
		note.className = "mm-note hide";
		note.innerHTML = `<div class="note-util">备注</div><div  class="note-content"><p /></div>`;
		this.remind.page.dom.appendChild(note);
		this.note = note;
		this.content = this.note.querySelector(".note-content p")
        this.remind.dom.addEventListener("click", this.onOutClick);
	}

	onOutClick=(e)=>{
		if(e.path.indexOf(this.note) < 0){
			this.hide();
		}
	}

	show(item) {
		this.status = "show"; 
		this.note.style.top = item.y + item.contentRect.height + "px";
		this.note.style.left = item.x + "px";
		this.note.className = "mm-note";
		this.content.setAttribute("contenteditable",true);
		this.content.innerHTML = decodeURIComponent(item.data.note || '')
		this.item = item;
		
		setTimeout(() => {
			const selection = getSelection();
			const range = selection.getRangeAt(0);
			selection.removeAllRanges();
			range.selectNodeContents(this.content);
			selection.addRange(range);

			this.content.focus();

		}, 100)
	}

	hide() {
		if(this.status === 'hide')return
		this.status = "hide";
		this.note.className = "mm-note hide";
		const content = this.content;
		const note = encodeURIComponent(content.innerHTML);
		if(!this.item)return;
		this.item.endNote(note);
		content.innerHTML = "";
		this.remind.fire("item-change", this.item)
	}

	destroy() {
		this.remind.page.dom.removeChild(this.note);
		this.remind = undefined;
		this.item = undefined
	}

}
export default Note;