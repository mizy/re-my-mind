var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

import React, { useEffect, useRef, useState } from 'react';
import { Divider } from 'antd';
import cn from 'classnames';
import './index.less';

export default (function (props) {
	var visible = props.visible,
	    left = props.left,
	    top = props.top,
	    contextMenuList = props.contextMenuList,
	    onContextMenuClick = props.onContextMenuClick,
	    onCancel = props.onCancel;

	var itemContextRef = useRef();

	var _useState = useState({}),
	    _useState2 = _slicedToArray(_useState, 2),
	    position = _useState2[0],
	    setPosition = _useState2[1];

	var calcPosition = function calcPosition(_ref, _ref2) {
		var left = _ref.left,
		    top = _ref.top;
		var width = _ref2.width,
		    height = _ref2.height;

		if (left + width > window.innerWidth) {
			left = window.innerWidth - width;
		}

		if (top + height > window.innerHeight) {
			top = window.innerHeight - height;
		}

		return {
			left: left || '-9999px',
			top: top || '-9999px'
		};
	};

	useEffect(function () {
		var current = itemContextRef.current;
		if (current) {
			setPosition(calcPosition(props, current.getBoundingClientRect()));
		}
	}, [left, top, visible]);

	return React.createElement(
		'div',
		{
			className: 'disk-item-context-menu',
			ref: itemContextRef,
			style: position
		},
		React.createElement(
			'ul',
			null,
			(contextMenuList || []).map(function (item, index) {
				if (item.type === 'separator') {
					return React.createElement(Divider, { key: index + 'separator' });
				} else {
					return React.createElement(
						'li',
						{
							key: item.value,
							className: cn({ disabled: item.disabled }),
							onClick: function onClick() {
								if (!item.disabled) {
									onContextMenuClick(item.value, props);
									onCancel();
								}
							},
							style: { color: item.color || 'inherit' }
						},
						item.icon || React.createElement('i', null),
						React.createElement(
							'span',
							null,
							item.label
						)
					);
				}
			})
		)
	);
});