function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

import React from 'react';
import { folderImages, fileImages, actionIcon, linkImages } from '../constant';
import cn from 'classnames';

export default (function (props) {
	var _props$empty = props.empty,
	    empty = _props$empty === undefined ? false : _props$empty,
	    _props$type = props.type,
	    type = _props$type === undefined ? 'folder' : _props$type,
	    subType = props.subType,
	    logoSrc = props.logoSrc,
	    _props$title = props.title,
	    title = _props$title === undefined ? '标题' : _props$title,
	    icon = props.icon,
	    onPreview = props.onPreview,
	    _props$contextMenuLis = props.contextMenuList,
	    contextMenuList = _props$contextMenuLis === undefined ? [] : _props$contextMenuLis,
	    onContextMenuClick = props.onContextMenuClick,
	    currentItemKey = props.currentItemKey,
	    setCurrentItemIndex = props.setCurrentItemIndex,
	    setContextMenuInfo = props.setContextMenuInfo,
	    itemKey = props.itemKey,
	    rest = _objectWithoutProperties(props, ['empty', 'type', 'subType', 'logoSrc', 'title', 'icon', 'onPreview', 'contextMenuList', 'onContextMenuClick', 'currentItemKey', 'setCurrentItemIndex', 'setContextMenuInfo', 'itemKey']);

	var newSubType = void 0;
	if (type === 'file') {
		newSubType = subType || 'article';
	} else if (type === 'link') {
		newSubType = subType || 'href';
	}

	var showContextMenu = function showContextMenu(e, item) {
		setCurrentItemIndex(item.itemKey);
		if (contextMenuList && contextMenuList.length > 0) {
			e.preventDefault();
			e.stopPropagation();
			setContextMenuInfo(Object.assign({}, item, {
				visible: true,
				left: e.clientX,
				top: e.clientY,
				contextMenuList: contextMenuList || [],
				onContextMenuClick: onContextMenuClick
			}));
		} else {
			return;
		}
	};

	return React.createElement(
		'div',
		Object.assign({
			className: cn('tntd-disk-item', { on: itemKey && currentItemKey === itemKey })
		}, rest, {
			onContextMenu: function onContextMenu(e) {
				return showContextMenu(e, props, {});
			}
		}),
		React.createElement(
			'div',
			{ className: 'actions' },
			type !== 'folder' && onPreview && React.createElement(
				'i',
				{
					className: 'action-item',
					onClick: function onClick(e) {
						e.stopPropagation();
						e.preventDefault();
						onPreview(props);
					}
				},
				React.createElement('img', { src: actionIcon.view })
			),
			contextMenuList && contextMenuList.length > 0 && React.createElement(
				'i',
				{
					className: 'action-item',
					onClick: function onClick(e) {
						if (contextMenuList.length) {
							showContextMenu(e, props, {});
						}
					}
				},
				React.createElement('img', { src: actionIcon.setting })
			)
		),
		type === 'folder' && React.createElement(
			'div',
			{ className: 'img-box' },
			icon && icon,
			React.createElement('img', { src: folderImages[empty ? 'empty' : 'full'].default })
		),
		type === 'file' && React.createElement(
			'div',
			{ className: 'img-box' },
			React.createElement('img', { src: fileImages[newSubType].default })
		),
		type === 'link' && React.createElement(
			'div',
			{ className: 'img-box' },
			React.createElement('img', { src: linkImages[newSubType === 'href' ? 'href' : 'modal'].default }),
			logoSrc && React.createElement('img', { className: 'site-logo', src: logoSrc })
		),
		React.createElement(
			'div',
			{ className: 'title-wrap' },
			React.createElement(
				'p',
				null,
				title
			)
		)
	);
});