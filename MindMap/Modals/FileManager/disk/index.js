var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useState } from 'react';
import Item from './Item';
import { supportMap } from './constant';
import ItemContextMenu from './ContextMenu/ItemContextMenu';
import ClickOutside from '../ClickOutside';
import './index.less';

var defaultContextMenuInfo = {
	visible: false,
	left: 0,
	top: 0,
	targetItem: null,
	contextMenuList: [],
	onContextMenuClick: function onContextMenuClick() {}
};
var Disk = function Disk(_ref) {
	var children = _ref.children;

	var _useState = useState(null),
	    _useState2 = _slicedToArray(_useState, 2),
	    currentItemKey = _useState2[0],
	    setCurrentItemIndex = _useState2[1];

	var _useState3 = useState(defaultContextMenuInfo),
	    _useState4 = _slicedToArray(_useState3, 2),
	    contextMenuInfo = _useState4[0],
	    setContextMenuInfo = _useState4[1];

	var closeContextMenu = function closeContextMenu() {
		setCurrentItemIndex(null);
		setContextMenuInfo(defaultContextMenuInfo);
	};

	console.log('currentItemKey', currentItemKey);

	return React.createElement(
		'div',
		{ className: 'tntd-disk-wrap' },
		React.Children.map(children, function (child) {
			return React.cloneElement(child, {
				currentItemKey: currentItemKey,
				setCurrentItemIndex: setCurrentItemIndex,
				setContextMenuInfo: setContextMenuInfo
			});
		}),
		React.createElement(
			ClickOutside,
			{ onClickOutside: closeContextMenu },
			React.createElement(ItemContextMenu, Object.assign({}, contextMenuInfo, {
				onCancel: closeContextMenu
			}))
		)
	);
};

Disk.Item = Item;
Disk.supportMap = supportMap();
export default Disk;