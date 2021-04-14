

const Command = {
	keys:[],
	editMode:false,
	prevent: true , /* prevent default keyboard action? */
	label:  "" 
};

Command.isValid = function () {
    const remind = this.remind;
	// if (remind.note.status === "show") {
	// 	return false;
	// }
	// if (!this.editMode && !remind.editing) {
	// 	return true;
	// }
	// if (this.editMode === null) {
	// 	return true;
	// }
	// if (this.editMode && remind.editing) {
	// 	return true;
	// }
	return true
}
Command.execute = function () { }

// Command.Undo = Object.create(Command, {
// 	label: { value: "Undo" },
// 	keys: {
// 		value: [
// 			{ keyCode: "Z".charCodeAt(0), metaKey: true, shiftKey: false },
// 			{ keyCode: "Z".charCodeAt(0), ctrlKey: true, shiftKey: false }]
// 	}
// });
// Command.Undo.isValid = function () {
// 	return Command.isValid.call(this) && !!MM.App.historyIndex;
// }
// Command.Undo.execute = function () {
// 	MM.App.history[MM.App.historyIndex - 1].undo();
// 	MM.App.historyIndex--;
// 	MM.publish("undo", MM.App.historyIndex)
// }

// Command.Redo = Object.create(Command, {
// 	label: { value: "Redo" },
// 	keys: {
// 		value: [
// 			{ keyCode: "Z".charCodeAt(0), metaKey: true, shiftKey: true },
// 			{ keyCode: "Z".charCodeAt(0), ctrlKey: true, shiftKey: true }]
// 	},
// });
// Command.Redo.isValid = function () {
// 	return (Command.isValid.call(this) && MM.App.historyIndex != MM.App.history.length);
// }
// Command.Redo.execute = function () {
// 	MM.App.history[MM.App.historyIndex].perform();
// 	MM.App.historyIndex++;
// 	MM.publish("redo", MM.App.historyIndex)
// }

Command.InsertSibling = Object.create(Command, {
	label: { value: "Insert a sibling" },
	keys: { value: [{ keyCode: 13 }] }
});
Command.InsertSibling.execute = function () {
	var item = this.remind.page.current;
	if (item.isRoot()) {
		var action = this.remind.action.execute('InsertNewItem',item, item.getChildren().length);
	} else {
		var parent = item.getParent();
		var index = parent.getChildren().indexOf(item);
		var action = this.remind.action.InsertNewItem(parent, index + 1);
	}

	if(this.remind.options.autoEdit&&!action._item._data.disableEdit){
		// Command.Edit.execute();

	}

}

Command.InsertChild = Object.create(Command, {
	label: { value: "Insert a child" },
	keys: {
		value: [
			{ keyCode: 9, ctrlKey: false },
			{ keyCode: 45 }
		]
	}
});
Command.InsertChild.execute = function () {
	const item = this.remind.page.current;
	const action = this.remind.action.execute('InsertChild',item, item.getChildren().length);
	 
	if(MM.App.options.autoEdit&&!action._item._data.disableEdit){
		Command.Edit.execute();
	}
	MM.publish("command-child");
}

// Command.Delete = Object.create(Command, {
// 	label: { value: "Delete an item" },
// 	keys: { value: [{ keyCode: 46 }, { keyCode: 8 }] }
// });
// Command.Delete.isValid = function () {
// 	return Command.isValid.call(this) && !MM.App.current.isRoot();
// }
// Command.Delete.execute = function () {
// 	var action = this.remind.action.RemoveItem(MM.App.current);
// 	MM.App.action(action);
// }

// Command.Swap = Object.create(Command, {
// 	label: { value: "Swap sibling" },
// 	keys: {
// 		value: [
// 			{ keyCode: 38, ctrlKey: true },
// 			{ keyCode: 40, ctrlKey: true },
// 		]
// 	}
// });
// Command.Swap.execute = function (e) {
// 	var current = MM.App.current;
// 	if (current.isRoot() || current.getParent().getChildren().length < 2) { return; }

// 	var diff = (e.keyCode == 38 ? -1 : 1);
// 	var action = this.remind.action.Swap(MM.App.current, diff);
// 	MM.App.action(action);
// }

// Command.Side = Object.create(Command, {
// 	label: { value: "Change side" },
// 	keys: {
// 		value: [
// 			{ keyCode: 37, ctrlKey: true },
// 			{ keyCode: 39, ctrlKey: true },
// 		]
// 	}
// });
// Command.Side.execute = function (e) {
// 	var current = MM.App.current;
// 	if (current.isRoot() || !current.getParent().isRoot()) { return; }

// 	var side = (e.keyCode == 37 ? "left" : "right");
// 	var action = this.remind.action.SetSide(MM.App.current, side);
// 	MM.App.action(action);
// }

// Command.Save = Object.create(Command, {
// 	label: { value: "Save map" },
// 	keys: {
// 		value: [
// 			{ keyCode: "S".charCodeAt(0), ctrlKey: true, shiftKey: false },
// 			{ keyCode: "S".charCodeAt(0), metaKey: true, shiftKey: false }]
// 	}
// });
// Command.Save.execute = function (e) {
// 	e.preventDefault();
// 	MM.publish("save", "command")
// }

// Command.SaveAs = Object.create(Command, {
// 	label: { value: "Save as&hellip;" },
// 	keys: { value: [{ keyCode: "S".charCodeAt(0), ctrlKey: true, shiftKey: true }] }
// });
// Command.SaveAs.execute = function () {
// 	MM.App.io.show("save");
// }

// Command.Load = Object.create(Command, {
// 	label: { value: "Load map" },
// 	keys: { value: [{ keyCode: "O".charCodeAt(0), ctrlKey: true }] }
// });
// Command.Load.execute = function () {
// 	MM.App.io.show("load");
// }

// Command.Center = Object.create(Command, {
// 	label: { value: "Center map" },
// 	keys: {
// 		value: [
// 			{ keyCode: "C".charCodeAt(0), ctrlKey: false, metaKey: false, shiftKey: false },
// 		]
// 	}
// });
// Command.Center.execute = function () {
// 	MM.App.map.center();
// }

// // Command.New = Object.create(Command, {
// // 	label: { value: "New map" },
// // 	keys: { value: [{ keyCode: "N".charCodeAt(0), ctrlKey: true }] }
// // });
// // Command.New.execute = function () {
// // 	if (!confirm("Throw away your current map and start a new one?")) { return; }
// // 	var map = new MM.Map();
// // 	MM.App.setMap(map);
// // 	MM.publish("map-new", this);
// // }

// Command.ZoomIn = Object.create(Command, {
// 	label: { value: "Zoom in" },
// 	keys: { value: [{ charCode: "+".charCodeAt(0) }] }
// });
// Command.ZoomIn.execute = function () {
// 	MM.App.zoom(1);
// }

// Command.ZoomOut = Object.create(Command, {
// 	label: { value: "Zoom out" },
// 	keys: { value: [{ charCode: "-".charCodeAt(0) }] }
// });
// Command.ZoomOut.execute = function () {
// 	MM.App.zoom(-1);
// }


// Command.Pan = Object.create(Command, {
// 	label: { value: "Pan the map" },
// 	keys: {
// 		value: [
// 			{ keyCode: "W".charCodeAt(0), ctrlKey: false, altKey: false, metaKey: false },
// 			{ keyCode: "A".charCodeAt(0), ctrlKey: false, altKey: false, metaKey: false },
// 			{ keyCode: "S".charCodeAt(0), ctrlKey: false, altKey: false, metaKey: false },
// 			{ keyCode: "D".charCodeAt(0), ctrlKey: false, altKey: false, metaKey: false }
// 		]
// 	},
// 	chars: { value: [] }
// });
// Command.Pan.execute = function (e) {
// 	var ch = String.fromCharCode(e.keyCode);
// 	var index = this.chars.indexOf(ch);
// 	if (index > -1) { return; }

// 	if (!this.chars.length) {
// 		window.addEventListener("keyup", this);
// 		this.interval = setInterval(this._step.bind(this), 50);
// 	}

// 	this.chars.push(ch);
// 	this._step();
// }

// Command.Pan._step = function () {
// 	var dirs = {
// 		"W": [0, 1],
// 		"A": [-1, 0],
// 		"S": [0, -1],
// 		"D": [1, 0]
// 	}
// 	var offset = [0, 0];

// 	this.chars.forEach(function (ch) {
// 		offset[0] += dirs[ch][0];
// 		offset[1] += dirs[ch][1];
// 	});

// 	MM.App.map.moveBy(15 * offset[0], 15 * offset[1]);
// }

// Command.Pan.handleEvent = function (e) {
// 	var ch = String.fromCharCode(e.keyCode);
// 	var index = this.chars.indexOf(ch);
// 	if (index > -1) {
// 		this.chars.splice(index, 1);
// 		if (!this.chars.length) {
// 			window.removeEventListener("keyup", this);
// 			clearInterval(this.interval);
// 		}
// 	}
// }

// Command.Copy = Object.create(Command, {
// 	label: { value: "Copy" },
// 	prevent: { value: false },
// 	keys: {
// 		value: [
// 			{ keyCode: "C".charCodeAt(0), ctrlKey: true },
// 			{ keyCode: "C".charCodeAt(0), metaKey: true }
// 		]
// 	}
// });
// Command.Copy.execute = function () {
// 	MM.Clipboard.copy(MM.App.current);
// }

// Command.Cut = Object.create(Command, {
// 	label: { value: "Cut" },
// 	prevent: { value: false },
// 	keys: {
// 		value: [
// 			{ keyCode: "X".charCodeAt(0), ctrlKey: true },
// 			{ keyCode: "X".charCodeAt(0), metaKey: true }
// 		]
// 	}
// });
// Command.Cut.execute = function () {
// 	MM.Clipboard.cut(MM.App.current);
// }

// Command.Paste = Object.create(Command, {
// 	label: { value: "Paste" },
// 	prevent: { value: false },
// 	keys: {
// 		value: [
// 			{ keyCode: "V".charCodeAt(0), ctrlKey: true },
// 			{ keyCode: "V".charCodeAt(0), metaKey: true }
// 		]
// 	}
// });
// Command.Paste.execute = function () {
// 	MM.Clipboard.paste(MM.App.current);
// }

// Command.Fold = Object.create(Command, {
// 	label: { value: "Fold/Unfold" },
// 	keys: { value: [{ charCode: "f".charCodeAt(0), ctrlKey: false }] }
// });
// Command.Fold.execute = function () {
// 	var item = MM.App.current;
// 	if (item.isCollapsed()) { item.expand(); } else { item.collapse(); }
// 	MM.App.map.ensureItemVisibility(item);
// }
// Command.Edit = Object.create(Command, {
// 	label: { value: "Edit item" },
// 	keys: {
// 		value: [
// 			{ keyCode: 32 },
// 			{ keyCode: 113 }
// 		]
// 	}
// });
// Command.Edit.execute = function () {
// 	if (MM.App.current._data.disableEdit) return;
// 	MM.App.current.startEditing();
// 	MM.App.editing = true;
// 	const text = MM.App.current.getText();
// 	if(!text)return;
// 	const range = document.createRange();
// 	range.selectNodeContents(MM.App.current._dom.text);
// 	const selection = window.getSelection();
// 	selection.removeAllRanges();
// 	selection.addRange(range)
// }

// Command.Finish = Object.create(Command, {
// 	keys: { value: [{ keyCode: 13, altKey: false, ctrlKey: false, shiftKey: false }] },
// 	editMode: { value: true }
// });
// Command.Finish.execute = function () {
// 	MM.App.editing = false;
// 	var text = MM.App.current.stopEditing();
// 	// if (text) {
// 		var action = this.remind.action.SetText(MM.App.current, text, MM.App.current._oldText);
// 	// } else {
// 		// var action = this.remind.action.RemoveItem(MM.App.current);
// 	// }
// 	MM.App.action(action);
// 	MM.publish("item-change", MM.App.current);
// }

// Command.Newline = Object.create(Command, {
// 	label: { value: "Line break" },
// 	keys: {
// 		value: [
// 			{ keyCode: 13, shiftKey: true },
// 			{ keyCode: 13, ctrlKey: true }
// 		]
// 	},
// 	editMode: { value: true }
// });
// Command.Newline.execute = function () {
// 	var range = getSelection().getRangeAt(0);
// 	var br = document.createElement("br");
// 	range.insertNode(br);
// 	range.setStartAfter(br);
// 	MM.App.current.updateSubtree();
// }

// Command.Cancel = Object.create(Command, {
// 	editMode: { value: true },
// 	keys: { value: [{ keyCode: 27 }] }
// });
// Command.Cancel.execute = function () {
// 	MM.App.editing = false;
// 	MM.App.current.stopEditing();//还原文字
// 	var oldText = MM.App.current._oldText;
// 	if (!oldText) { /* newly added node */
// 		var action = this.remind.action.RemoveItem(MM.App.current);
// 		MM.App.action(action);
// 	}
// }

// Command.Style = Object.create(Command, {
// 	editMode: { value: null },
// 	command: { value: "" }
// });

// Command.Style.execute = function () {
// 	if (MM.App.editing) {
// 		document.execCommand(this.command, null, null);
// 	} else {
// 		Command.Edit.execute();
// 		var selection = getSelection();
// 		var range = selection.getRangeAt(0);
// 		range.selectNodeContents(MM.App.current.getDOM().text);
// 		selection.removeAllRanges();
// 		selection.addRange(range);
// 		this.execute();
// 		Command.Finish.execute();
// 	}
// }

// Command.Bold = Object.create(Command.Style, {
// 	command: { value: "bold" },
// 	label: { value: "Bold" },
// 	keys: { value: [{ keyCode: "B".charCodeAt(0), ctrlKey: true }] }
// });

// Command.Underline = Object.create(Command.Style, {
// 	command: { value: "underline" },
// 	label: { value: "Underline" },
// 	keys: { value: [{ keyCode: "U".charCodeAt(0), ctrlKey: true }] }
// });

// Command.Italic = Object.create(Command.Style, {
// 	command: { value: "italic" },
// 	label: { value: "Italic" },
// 	keys: { value: [{ keyCode: "I".charCodeAt(0), ctrlKey: true }] }
// });

// Command.Strikethrough = Object.create(Command.Style, {
// 	command: { value: "strikeThrough" },
// 	label: { value: "Strike-through" },
// 	keys: { value: [{ keyCode: "S".charCodeAt(0), ctrlKey: true, shiftKey: true }] }
// });

// Command.Value = Object.create(Command, {
// 	label: { value: "Set value" },
// 	keys: { value: [{ charCode: "v".charCodeAt(0), ctrlKey: false, metaKey: false }] }
// });
// Command.Value.execute = function () {
// 	var item = MM.App.current;
// 	var oldValue = item.getValue();
// 	var newValue = prompt("Set item value", oldValue);
// 	if (newValue == null) { return; }

// 	if (!newValue.length) { newValue = null; }

// 	var numValue = parseFloat(newValue);
// 	var action = this.remind.action.SetValue(item, isNaN(numValue) ? newValue : numValue);
// 	MM.App.action(action);
// }

// Command.Yes = Object.create(Command, {
// 	label: { value: "Yes" },
// 	keys: { value: [{ charCode: "y".charCodeAt(0), ctrlKey: false }] }
// });
// Command.Yes.execute = function () {
// 	var item = MM.App.current;
// 	var status = (item.getStatus() == "yes" ? null : "yes");
// 	var action = this.remind.action.SetStatus(item, status);
// 	MM.App.action(action);
// }

// Command.No = Object.create(Command, {
// 	label: { value: "No" },
// 	keys: { value: [{ charCode: "n".charCodeAt(0), ctrlKey: false }] }
// });
// Command.No.execute = function () {
// 	var item = MM.App.current;
// 	var status = (item.getStatus() == "no" ? null : "no");
// 	var action = this.remind.action.SetStatus(item, status);
// 	MM.App.action(action);
// }

// // Command.Computed = Object.create(Command, {
// // 	label: { value: "Computed" },
// // 	keys: { value: [{ charCode: "c".charCodeAt(0), ctrlKey: false, metaKey: false }] }
// // });
// // Command.Computed.execute = function () {
// // 	var item = MM.App.current;
// // 	var status = (item.getStatus() == "computed" ? null : "computed");
// // 	var action = this.remind.action.SetStatus(item, status);
// // 	MM.App.action(action);
// // }
// Command.Select = Object.create(Command, {
// 	label: { value: "Move selection" },
// 	keys: {
// 		value: [
// 			{ keyCode: 38, ctrlKey: false },
// 			{ keyCode: 37, ctrlKey: false },
// 			{ keyCode: 40, ctrlKey: false },
// 			{ keyCode: 39, ctrlKey: false }
// 		]
// 	}
// });
// Command.Select.execute = function (e) {
// 	var dirs = {
// 		37: "left",
// 		38: "top",
// 		39: "right",
// 		40: "bottom"
// 	}
// 	var dir = dirs[e.keyCode];

// 	var layout = MM.App.current.getLayout();
// 	var item = /*MM.App.map*/layout.pick(MM.App.current, dir);
// 	MM.App.select(item);
// }

// Command.SelectRoot = Object.create(Command, {
// 	label: { value: "Select root" },
// 	keys: { value: [{ keyCode: 36 }] }
// });
// Command.SelectRoot.execute = function () {
// 	var item = MM.App.current;
// 	while (!item.isRoot()) { item = item.getParent(); }
// 	MM.App.select(item);
// }

// Command.SelectParent = Object.create(Command, {
// 	label: { value: "Select parent" },
// 	keys: { value: [{ keyCode: 8 }] }
// });
// Command.SelectParent.execute = function () {
// 	if (MM.App.current.isRoot()) { return; }
// 	MM.App.select(MM.App.current.getParent());
// }


// Command.DeleteIcon = Object.create(Command, {
// 	label: { value: "Delete Icon" },
// 	keys: { value: [{ keyCode: "I".charCodeAt(0) }] }
// });
// Command.DeleteIcon.execute = function (target) {
// 	const key = target.getAttribute("data-key")
// 	if (key) {
// 		var item = MM.App.current;
// 		item.deleteIcon(key)
// 	}

// }


export default Command;