import Item from '../../View/Item';

const getAllActions = (remind) => {
	const Action = () => {};

	Action.prototype.perform = function () {};
	Action.prototype.undo = function () {};

	Action.Multi = function (actions) {
		this._actions = actions;
	};
	Action.Multi.prototype = Object.create(Action.prototype);
	Action.Multi.prototype.perform = function () {
		this._actions.forEach(function (action) {
			action.perform();
		});
	};
	Action.Multi.prototype.undo = function () {
		this._actions
			.slice()
			.reverse()
			.forEach(function (action) {
				action.undo();
			});
	};

	Action.InsertNewItem = function (parent, index) {
		this._parent = parent;
		this._index = index;
		this.autoSelect = true;
		this._item = new Item(remind.page);
	};
	Action.InsertNewItem.prototype = Object.create(Action.prototype);
	Action.InsertNewItem.prototype.perform = function () {
		this._parent.expand();
		this._item = this._parent.insertChild(this._item, this._index);
		remind.page.select(this._item)
	};
	Action.InsertNewItem.prototype.undo = function () {
		this._parent.removeChild(this._item);
		remind.page.select(this._parent)
	};

	Action.AppendItem = function (parent, item) {
		this._parent = parent;
		this._item = item;
	};
	Action.AppendItem.prototype = Object.create(Action.prototype);
	Action.AppendItem.prototype.perform = function () {
		this._parent.insertChild(this._item);
		remind.page.select(this._item);
	};
	Action.AppendItem.prototype.undo = function () {
		this._parent.removeChild(this._item);
		remind.page.selectt(this._parent);
	};

	Action.RemoveItem = function (item) {
		this._item = item;
		this._parent = item.parent;
		this._index = this._parent.children.indexOf(this._item);
		this.data = item.getData();
	};
	Action.RemoveItem.prototype = Object.create(Action.prototype);
	Action.RemoveItem.prototype.perform = function () {
		this._parent.removeChild(this._item);
		this._item.destroy();
		remind.page.select(this._parent);
	};
	Action.RemoveItem.prototype.undo = function () {
		const childItem = new Item(remind.page,{
			data:this.data,
			depth:this._parent.depth + 1,
			visible:!this._parent.data.shrink && this._parent.visible
		});
		this._parent.insertChild(childItem, this._index);
		remind.page.select(this._item);
	};

	Action.MoveItem = function (item, newParent, newIndex, newSide) {
		this._item = item;
		this._newParent = newParent;
		this._newIndex = arguments.length < 3 ? null : newIndex;
		this._newSide = newSide || '';
		this._oldParent = item.getParent();
		this._oldIndex = this._oldParent.getChildren().indexOf(item);
		this._oldSide = item.getSide();
		const colors = remind.theme.colors || remind.options.colors;
		if (newParent.isRoot()) {
			let color = colors[newIndex % colors.length];

			this._item.setColor(color);
		}
	};
	Action.MoveItem.prototype = Object.create(Action.prototype);
	Action.MoveItem.prototype.perform = function () {
		this._item.setSide(this._newSide);
		if (this._newIndex === null) {
			this._newParent.insertChild(this._item);
		} else {
			this._newParent.insertChild(this._item, this._newIndex);
		}
		remind.page.select(this._item);
	};
	Action.MoveItem.prototype.undo = function () {
		this._item.setSide(this._oldSide);
		this._oldParent.insertChild(this._item, this._oldIndex);
		remind.page.select(this._newParent);
	};

	Action.Swap = function (item, diff) {
		this._item = item;
		this._parent = item.getParent();

		var children = this._parent.getChildren();
		var sibling = this._parent.getLayout().pickSibling(this._item, diff);

		this._sourceIndex = children.indexOf(this._item);
		this._targetIndex = children.indexOf(sibling);
	};
	Action.Swap.prototype = Object.create(Action.prototype);
	Action.Swap.prototype.perform = function () {
		this._parent.insertChild(this._item, this._targetIndex);
	};
	Action.Swap.prototype.undo = function () {
		this._parent.insertChild(this._item, this._sourceIndex);
	};

	Action.SetLayout = function (item, layout) {
		this._item = item;
		this._layout = layout;
		this._oldLayout = item.data.layout;
	};
	Action.SetLayout.prototype = Object.create(Action.prototype);
	Action.SetLayout.prototype.perform = function () {
		this._item.setLayout(this._layout);
		remind.page.remember(this._item);
        this._item.updateSubtree();
	};
	Action.SetLayout.prototype.undo = function () {
		this._item.setLayout(this._oldLayout);
		remind.page.remember(this._item);
		this._item.updateSubtree();
	};

	Action.SetShape = function (item, shape) {
		this._item = item;
		this._shape = shape;
		this._oldShape = item.getOwnShape();
	};
	Action.SetShape.prototype = Object.create(Action.prototype);
	Action.SetShape.prototype.perform = function () {
		this._item.setShape(this._shape);
	};
	Action.SetShape.prototype.undo = function () {
		this._item.setShape(this._oldShape);
	};

	Action.SetColor = function (item, color) {
		this._item = item;
		this._color = color;
		this._oldColor = item.getOwnColor();
	};
	Action.SetColor.prototype = Object.create(Action.prototype);
	Action.SetColor.prototype.perform = function () {
		this._item.setColor(this._color);
	};
	Action.SetColor.prototype.undo = function () {
		this._item.setColor(this._oldColor);
	};

	Action.SetText = function (item, text, oldText) {
		this.item = item;
		this.text = text;
		this.oldText = oldText === undefined ? item.data.text : oldText;
	};
	Action.SetText.prototype = Object.create(Action.prototype);
	Action.SetText.prototype.perform = function () {
		this.item.setText(this.text);
		remind.page.select(this.item)
	};
	Action.SetText.prototype.undo = function () {
		this.item.setText(this.oldText);
		remind.page.select(this.item)
	};

	Action.SetIcon = function (item, icon, type) {
		this.item = item;
		if (icon) {
			this.icon = {...item.data.icon, [type]: icon };
		} else {
			this.icon = {...item.data.icon}
			delete this.icon[type];
		}
		this.oldIcon = item.data.icon;
	};
	Action.SetIcon.prototype = Object.create(Action.prototype);
	Action.SetIcon.prototype.perform = function () {
		this.item.data.icon = this.icon;
		this.item.updateData();
	};
	Action.SetIcon.prototype.undo = function () {
		this.item.data.icon = this.oldIcon
		this.item.updateData()
	};

	Action.SetSide = function (item, side) {
		this._item = item;
		this._side = side;
		this._oldSide = item.getSide();
	};
	Action.SetSide.prototype = Object.create(Action.prototype);
	Action.SetSide.prototype.perform = function () {
		this._item.setSide(this._side);
		this._item.getMap().update();
	};
	Action.SetSide.prototype.undo = function () {
		this._item.setSide(this._oldSide);
		this._item.getMap().update();
	};

	Action.SetNote = function (item, note) {
		this.oldNote = item.note;
		this.item = item;
		this.note = note;
	};
	Action.SetNote.prototype = Object.create(Action.prototype);
	Action.SetNote.prototype.perform = function () {
		this.item.note = this.note; //更新Note
		if (!this.note) {
			this.item._dom.content.removeChild(this.item._dom.note);
			this.item.update();
		} else {
			this.item._dom.content.appendChild(this.item._dom.note);
		}
		this.item.clearOffset();
		this.item.update();
	};
	Action.SetNote.prototype.undo = function () {
		this.item.note = this.oldNote;
		if (!this.oldNote) {
			// 之前的note为空
			this.item._dom.content.removeChild(this.item._dom.note);
		} else {
			// 之前note不为空
			this.item._dom.content.appendChild(this.item._dom.note);
		}
		this.item.clearOffset();
		this.item.update();
	};
	return Action;
};

export default getAllActions;
