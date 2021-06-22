export var folderImages = {
	full: require('./images/folder/folder-full.svg'),
	empty: require('./images/folder/folder-empty.svg')
};

export var fileImages = {
	article: require('./images/file/file-article.svg'),
	axure: require('./images/file/file-axure.svg'),
	gallery: require('./images/file/file-gallery.svg'),
	graph: require('./images/file/file-graph.svg'),
	html: require('./images/file/file-html.svg'),
	mind: require('./images/file/file-mind.svg'),
	sketch: require('./images/file/file-sketch.svg'),
	prd: require('./images/file/file-prd.svg'),
	whiteBoard: require('./images/file/file-whiteBoard.svg'),
	record: require('./images/file/file-record.svg'),
	test: require('./images/file/file-testCase.svg'),
	ppt: require('./images/file/file-ppt.svg'),
	pdf: require('./images/file/file-pdf.svg'),
	excel: require('./images/file/file-excel.svg'),
	disk: require('./images/file/file-disk.svg'),
	word: require('./images/file/file-word.svg'),
	xmind: require('./images/file/file-xmind.svg')
};

export var linkImages = {
	href: require('./images/link/href-link.svg'),
	modal: require('./images/link/modal-link.svg')
};

export var actionIcon = {
	setting: require('./images/icon/setting.svg'),
	view: require('./images/icon/view.svg')
};

export var supportMap = function supportMap() {
	return {
		folder: Object.keys(folderImages),
		file: Object.keys(fileImages),
		link: Object.keys(linkImages)
	};
};