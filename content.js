var elements = document.getElementsByTagName('*');

for (var i = 0; i < elements.length; i++) {
	var element = elements[i];

	for (var j = 0; j < element.childNodes.length; j++) {
		var node = element.childNodes[j];

		if (node.nodeType === 3) {
			var text = node.nodeValue;
			var replacedText = text;
			replacedText = replacedText.replace(/face masks/g, 'pants');
			replacedText = replacedText.replace(/Face masks/g, 'Pants');
			replacedText = replacedText.replace(/facemasks/g, 'pants');
			replacedText = replacedText.replace(/Facemasks/g, 'Pants');
			replacedText = replacedText.replace(/face mask/g, 'pants');
			replacedText = replacedText.replace(/Face mask/g, 'Pants');
			replacedText = replacedText.replace(/facemask/g, 'pants');
			replacedText = replacedText.replace(/Facemask/g, 'Pants');
			replacedText = replacedText.replace(/masks/g, 'pants');
			replacedText = replacedText.replace(/Masks/g, 'Pants');
			replacedText = replacedText.replace(/a mask/g, 'pants');
			replacedText = replacedText.replace(/A mask/g, 'Pants');
			replacedText = replacedText.replace(/mask/g, 'pants');
			replacedText = replacedText.replace(/Mask/g, 'Pants');

			if (replacedText !== text) {
				element.replaceChild(document.createTextNode(replacedText), node);
			}
		}
	}
}
