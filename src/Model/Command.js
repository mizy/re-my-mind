MM.Command = Object.create(MM.Repo, {
	keys: { value: [] },
	editMode: { value: false },
	prevent: { value: true }, /* prevent default keyboard action? */
	label: { value: "" }
});

MM.Command.isValid = function () {
	if (MM.App.note.status === "show") {
		return false;
	}
	if (!this.editMode && !MM.App.editing) {
		return true;
	}
	if (this.editMode === null) {
		return true;
	}
	if (this.editMode && MM.App.editing) {
		return true;
	}
	return false
}
MM.Command.execute = function () { }

MM.Command.Undo = Object.create(MM.Command, {
	label: { value: "Undo" },
	keys: {
		value: [
			{ keyCode: "Z".charCodeAt(0), metaKey: true, shiftKey: false },
			{ keyCode: "Z".charCodeAt(0), ctrlKey: true, shiftKey: false }]
	}
});
MM.Command.Undo.isValid = function () {
	return MM.Command.isValid.call(this) && !!MM.App.historyIndex;
}
MM.Command.Undo.execute = function () {
	MM.App.history[MM.App.historyIndex - 1].undo();
	MM.App.historyIndex--;
	MM.publish("undo", MM.App.historyIndex)
}

MM.Command.Redo = Object.create(MM.Command, {
	label: { value: "Redo" },
	keys: {
		value: [
			{ keyCode: "Z".charCodeAt(0), metaKey: true, shiftKey: true },
			{ keyCode: "Z".charCodeAt(0), ctrlKey: true, shiftKey: true }]
	},
});
MM.Command.Redo.isValid = function () {
	return (MM.Command.isValid.call(this) && MM.App.historyIndex != MM.App.history.length);
}
MM.Command.Redo.execute = function () {
	MM.App.history[MM.App.historyIndex].perform();
	MM.App.historyIndex++;
	MM.publish("redo", MM.App.historyIndex)
}

MM.Command.InsertSibling = Object.create(MM.Command, {
	label: { value: "Insert a sibling" },
	keys: { value: [{ keyCode: 13 }] }
});
MM.Command.InsertSibling.execute = function () {
	var item = MM.App.current;
	if (item.isRoot()) {
		var action = new MM.Action.InsertNewItem(item, item.getChildren().length);
	} else {
		var parent = item.getParent();
		var index = parent.getChildren().indexOf(item);
		var action = new MM.Action.InsertNewItem(parent, index + 1);
	}
	MM.App.action(action);

	if(MM.App.options.autoEdit){
		MM.Command.Edit.execute();

	}

	MM.publish("command-sibling");
}

MM.Command.InsertChild = Object.create(MM.Command, {
	label: { value: "Insert a child" },
	keys: {
		value: [
			{ keyCode: 9, ctrlKey: false },
			{ keyCode: 45 }
		]
	}
});
MM.Command.InsertChild.execute = function () {
	var item = MM.App.current;
	var action = new MM.Action.InsertNewItem(item, item.getChildren().length);
	MM.App.action(action);
	if(MM.App.options.autoEdit){
	MM.Command.Edit.execute();
	}

	MM.publish("command-child");
}

MM.Command.Delete = Object.create(MM.Command, {
	label: { value: "Delete an item" },
	keys: { value: [{ keyCode: 46 }, { keyCode: 8 }] }
});
MM.Command.Delete.isValid = function () {
	return MM.Command.isValid.call(this) && !MM.App.current.isRoot();
}
MM.Command.Delete.execute = function () {
	var action = new MM.Action.RemoveItem(MM.App.current);
	MM.App.action(action);
}

MM.Command.Swap = Object.create(MM.Command, {
	label: { value: "Swap sibling" },
	keys: {
		value: [
			{ keyCode: 38, ctrlKey: true },
			{ keyCode: 40, ctrlKey: true },
		]
	}
});
MM.Command.Swap.execute = function (e) {
	var current = MM.App.current;
	if (current.isRoot() || current.getParent().getChildren().length < 2) { return; }

	var diff = (e.keyCode == 38 ? -1 : 1);
	var action = new MM.Action.Swap(MM.App.current, diff);
	MM.App.action(action);
}

MM.Command.Side = Object.create(MM.Command, {
	label: { value: "Change side" },
	keys: {
		value: [
			{ keyCode: 37, ctrlKey: true },
			{ keyCode: 39, ctrlKey: true },
		]
	}
});
MM.Command.Side.execute = function (e) {
	var current = MM.App.current;
	if (current.isRoot() || !current.getParent().isRoot()) { return; }

	var side = (e.keyCode == 37 ? "left" : "right");
	var action = new MM.Action.SetSide(MM.App.current, side);
	MM.App.action(action);
}

MM.Command.Save = Object.create(MM.Command, {
	label: { value: "Save map" },
	keys: {
		value: [
			{ keyCode: "S".charCodeAt(0), ctrlKey: true, shiftKey: false },
			{ keyCode: "S".charCodeAt(0), metaKey: true, shiftKey: false }]
	}
});
MM.Command.Save.execute = function (e) {
	e.preventDefault();
	MM.publish("save", "command")
}

MM.Command.SaveAs = Object.create(MM.Command, {
	label: { value: "Save as&hellip;" },
	keys: { value: [{ keyCode: "S".charCodeAt(0), ctrlKey: true, shiftKey: true }] }
});
MM.Command.SaveAs.execute = function () {
	MM.App.io.show("save");
}

MM.Command.Load = Object.create(MM.Command, {
	label: { value: "Load map" },
	keys: { value: [{ keyCode: "O".charCodeAt(0), ctrlKey: true }] }
});
MM.Command.Load.execute = function () {
	MM.App.io.show("load");
}

MM.Command.Center = Object.create(MM.Command, {
	label: { value: "Center map" },
	keys: {
		value: [
			{ keyCode: "C".charCodeAt(0), ctrlKey: false, metaKey: false, shiftKey: false },
		]
	}
});
MM.Command.Center.execute = function () {
	MM.App.map.center();
}

// MM.Command.New = Object.create(MM.Command, {
// 	label: { value: "New map" },
// 	keys: { value: [{ keyCode: "N".charCodeAt(0), ctrlKey: true }] }
// });
// MM.Command.New.execute = function () {
// 	if (!confirm("Throw away your current map and start a new one?")) { return; }
// 	var map = new MM.Map();
// 	MM.App.setMap(map);
// 	MM.publish("map-new", this);
// }

MM.Command.ZoomIn = Object.create(MM.Command, {
	label: { value: "Zoom in" },
	keys: { value: [{ charCode: "+".charCodeAt(0) }] }
});
MM.Command.ZoomIn.execute = function () {
	MM.App.zoom(1);
}

MM.Command.ZoomOut = Object.create(MM.Command, {
	label: { value: "Zoom out" },
	keys: { value: [{ charCode: "-".charCodeAt(0) }] }
});
MM.Command.ZoomOut.execute = function () {
	MM.App.zoom(-1);
}


MM.Command.Pan = Object.create(MM.Command, {
	label: { value: "Pan the map" },
	keys: {
		value: [
			{ keyCode: "W".charCodeAt(0), ctrlKey: false, altKey: false, metaKey: false },
			{ keyCode: "A".charCodeAt(0), ctrlKey: false, altKey: false, metaKey: false },
			{ keyCode: "S".charCodeAt(0), ctrlKey: false, altKey: false, metaKey: false },
			{ keyCode: "D".charCodeAt(0), ctrlKey: false, altKey: false, metaKey: false }
		]
	},
	chars: { value: [] }
});
MM.Command.Pan.execute = function (e) {
	var ch = String.fromCharCode(e.keyCode);
	var index = this.chars.indexOf(ch);
	if (index > -1) { return; }

	if (!this.chars.length) {
		window.addEventListener("keyup", this);
		this.interval = setInterval(this._step.bind(this), 50);
	}

	this.chars.push(ch);
	this._step();
}

MM.Command.Pan._step = function () {
	var dirs = {
		"W": [0, 1],
		"A": [-1, 0],
		"S": [0, -1],
		"D": [1, 0]
	}
	var offset = [0, 0];

	this.chars.forEach(function (ch) {
		offset[0] += dirs[ch][0];
		offset[1] += dirs[ch][1];
	});

	MM.App.map.moveBy(15 * offset[0], 15 * offset[1]);
}

MM.Command.Pan.handleEvent = function (e) {
	var ch = String.fromCharCode(e.keyCode);
	var index = this.chars.indexOf(ch);
	if (index > -1) {
		this.chars.splice(index, 1);
		if (!this.chars.length) {
			window.removeEventListener("keyup", this);
			clearInterval(this.interval);
		}
	}
}

MM.Command.Copy = Object.create(MM.Command, {
	label: { value: "Copy" },
	prevent: { value: false },
	keys: {
		value: [
			{ keyCode: "C".charCodeAt(0), ctrlKey: true },
			{ keyCode: "C".charCodeAt(0), metaKey: true }
		]
	}
});
MM.Command.Copy.execute = function () {
	MM.Clipboard.copy(MM.App.current);
}

MM.Command.Cut = Object.create(MM.Command, {
	label: { value: "Cut" },
	prevent: { value: false },
	keys: {
		value: [
			{ keyCode: "X".charCodeAt(0), ctrlKey: true },
			{ keyCode: "X".charCodeAt(0), metaKey: true }
		]
	}
});
MM.Command.Cut.execute = function () {
	MM.Clipboard.cut(MM.App.current);
}

MM.Command.Paste = Object.create(MM.Command, {
	label: { value: "Paste" },
	prevent: { value: false },
	keys: {
		value: [
			{ keyCode: "V".charCodeAt(0), ctrlKey: true },
			{ keyCode: "V".charCodeAt(0), metaKey: true }
		]
	}
});
MM.Command.Paste.execute = function () {
	MM.Clipboard.paste(MM.App.current);
}

MM.Command.Fold = Object.create(MM.Command, {
	label: { value: "Fold/Unfold" },
	keys: { value: [{ charCode: "f".charCodeAt(0), ctrlKey: false }] }
});
MM.Command.Fold.execute = function () {
	var item = MM.App.current;
	if (item.isCollapsed()) { item.expand(); } else { item.collapse(); }
	MM.App.map.ensureItemVisibility(item);
}
MM.Command.Edit = Object.create(MM.Command, {
	label: { value: "Edit item" },
	keys: {
		value: [
			{ keyCode: 32 },
			{ keyCode: 113 }
		]
	}
});
MM.Command.Edit.execute = function () {
	MM.App.current.startEditing();
	MM.App.editing = true;
	const range = document.createRange();
	range.selectNodeContents(MM.App.current._dom.text);
	const selection = window.getSelection();
	selection.removeAllRanges();
	selection.addRange(range)
}

MM.Command.Finish = Object.create(MM.Command, {
	keys: { value: [{ keyCode: 13, altKey: false, ctrlKey: false, shiftKey: false }] },
	editMode: { value: true }
});
MM.Command.Finish.execute = function () {
	MM.App.editing = false;
	var text = MM.App.current.stopEditing();
	if (text) {
		var action = new MM.Action.SetText(MM.App.current, text, MM.App.current._oldText);
	} else {
		var action = new MM.Action.RemoveItem(MM.App.current);
	}
	MM.App.action(action);
	MM.publish("item-change", MM.App.current);
}

MM.Command.Newline = Object.create(MM.Command, {
	label: { value: "Line break" },
	keys: {
		value: [
			{ keyCode: 13, shiftKey: true },
			{ keyCode: 13, ctrlKey: true }
		]
	},
	editMode: { value: true }
});
MM.Command.Newline.execute = function () {
	var range = getSelection().getRangeAt(0);
	var br = document.createElement("br");
	range.insertNode(br);
	range.setStartAfter(br);
	MM.App.current.updateSubtree();
}

MM.Command.Cancel = Object.create(MM.Command, {
	editMode: { value: true },
	keys: { value: [{ keyCode: 27 }] }
});
MM.Command.Cancel.execute = function () {
	MM.App.editing = false;
	MM.App.current.stopEditing();//还原文字
	var oldText = MM.App.current._oldText;
	if (!oldText) { /* newly added node */
		var action = new MM.Action.RemoveItem(MM.App.current);
		MM.App.action(action);
	}
}

MM.Command.Style = Object.create(MM.Command, {
	editMode: { value: null },
	command: { value: "" }
});

MM.Command.Style.execute = function () {
	if (MM.App.editing) {
		document.execCommand(this.command, null, null);
	} else {
		MM.Command.Edit.execute();
		var selection = getSelection();
		var range = selection.getRangeAt(0);
		range.selectNodeContents(MM.App.current.getDOM().text);
		selection.removeAllRanges();
		selection.addRange(range);
		this.execute();
		MM.Command.Finish.execute();
	}
}

MM.Command.Bold = Object.create(MM.Command.Style, {
	command: { value: "bold" },
	label: { value: "Bold" },
	keys: { value: [{ keyCode: "B".charCodeAt(0), ctrlKey: true }] }
});

MM.Command.Underline = Object.create(MM.Command.Style, {
	command: { value: "underline" },
	label: { value: "Underline" },
	keys: { value: [{ keyCode: "U".charCodeAt(0), ctrlKey: true }] }
});

MM.Command.Italic = Object.create(MM.Command.Style, {
	command: { value: "italic" },
	label: { value: "Italic" },
	keys: { value: [{ keyCode: "I".charCodeAt(0), ctrlKey: true }] }
});

MM.Command.Strikethrough = Object.create(MM.Command.Style, {
	command: { value: "strikeThrough" },
	label: { value: "Strike-through" },
	keys: { value: [{ keyCode: "S".charCodeAt(0), ctrlKey: true, shiftKey: true }] }
});

MM.Command.Value = Object.create(MM.Command, {
	label: { value: "Set value" },
	keys: { value: [{ charCode: "v".charCodeAt(0), ctrlKey: false, metaKey: false }] }
});
MM.Command.Value.execute = function () {
	var item = MM.App.current;
	var oldValue = item.getValue();
	var newValue = prompt("Set item value", oldValue);
	if (newValue == null) { return; }

	if (!newValue.length) { newValue = null; }

	var numValue = parseFloat(newValue);
	var action = new MM.Action.SetValue(item, isNaN(numValue) ? newValue : numValue);
	MM.App.action(action);
}

MM.Command.Yes = Object.create(MM.Command, {
	label: { value: "Yes" },
	keys: { value: [{ charCode: "y".charCodeAt(0), ctrlKey: false }] }
});
MM.Command.Yes.execute = function () {
	var item = MM.App.current;
	var status = (item.getStatus() == "yes" ? null : "yes");
	var action = new MM.Action.SetStatus(item, status);
	MM.App.action(action);
}

MM.Command.No = Object.create(MM.Command, {
	label: { value: "No" },
	keys: { value: [{ charCode: "n".charCodeAt(0), ctrlKey: false }] }
});
MM.Command.No.execute = function () {
	var item = MM.App.current;
	var status = (item.getStatus() == "no" ? null : "no");
	var action = new MM.Action.SetStatus(item, status);
	MM.App.action(action);
}

// MM.Command.Computed = Object.create(MM.Command, {
// 	label: { value: "Computed" },
// 	keys: { value: [{ charCode: "c".charCodeAt(0), ctrlKey: false, metaKey: false }] }
// });
// MM.Command.Computed.execute = function () {
// 	var item = MM.App.current;
// 	var status = (item.getStatus() == "computed" ? null : "computed");
// 	var action = new MM.Action.SetStatus(item, status);
// 	MM.App.action(action);
// }
MM.Command.Select = Object.create(MM.Command, {
	label: { value: "Move selection" },
	keys: {
		value: [
			{ keyCode: 38, ctrlKey: false },
			{ keyCode: 37, ctrlKey: false },
			{ keyCode: 40, ctrlKey: false },
			{ keyCode: 39, ctrlKey: false }
		]
	}
});
MM.Command.Select.execute = function (e) {
	var dirs = {
		37: "left",
		38: "top",
		39: "right",
		40: "bottom"
	}
	var dir = dirs[e.keyCode];

	var layout = MM.App.current.getLayout();
	var item = /*MM.App.map*/layout.pick(MM.App.current, dir);
	MM.App.select(item);
}

MM.Command.SelectRoot = Object.create(MM.Command, {
	label: { value: "Select root" },
	keys: { value: [{ keyCode: 36 }] }
});
MM.Command.SelectRoot.execute = function () {
	var item = MM.App.current;
	while (!item.isRoot()) { item = item.getParent(); }
	MM.App.select(item);
}

MM.Command.SelectParent = Object.create(MM.Command, {
	label: { value: "Select parent" },
	keys: { value: [{ keyCode: 8 }] }
});
MM.Command.SelectParent.execute = function () {
	if (MM.App.current.isRoot()) { return; }
	MM.App.select(MM.App.current.getParent());
}


MM.Command.DeleteIcon = Object.create(MM.Command, {
	label: { value: "Delete Icon" },
	keys: { value: [{ keyCode: "I".charCodeAt(0) }] }
});
MM.Command.DeleteIcon.execute = function (target) {
	const key = target.getAttribute("data-key")
	if (key) {
		var item = MM.App.current;
		item.deleteIcon(key)
	}

}


export default MM.Command;