const requiredLetters = [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ' ' ];

function checkFontHeight(letter, letterMaxHeight) {
	const letterHeight = letter.length;
	return letterHeight > letterMaxHeight ? letterHeight : letterMaxHeight;
}

function checkFontWidth(letter, letterMaxWidth) {
	let maxWidth = letterMaxWidth;
	letter.forEach((letterRow) => {
		const letterRowSize = letterRow.length;
		maxWidth = maxWidth < letterRowSize ? letterRowSize : maxWidth;
	});
	return maxWidth;
}

function fontAnalyse(font) {
	const requiredLettersCount = requiredLetters.length;
	let fontStatistic = {
		height: 0,
		width: 0
	};

	let i = 0;
	while (i < requiredLettersCount) {
		const letter = requiredLetters[i];

		if (font.hasOwnProperty(letter)) {
			fontStatistic.height = checkFontHeight(font[letter], fontStatistic.height);
			fontStatistic.width = checkFontWidth(font[letter], fontStatistic.width);
		} else {
			throw `Font does not contain letter ${letter}.`;
		}
		i++;
	}

	return fontStatistic;
}

export default fontAnalyse;