import fontAnalyse from './asciiNumbersFontUtils';

const defaultConfig = {
	lineLength: 80,
	minDigits: null,
	space: ''
};

function printNumber(font, numberAsString, numberOfDigits) {
	const asciiNumber = [];

	for (let letterRow = 0; letterRow < font.statistic.height; letterRow++) {
		const asciiTextRow = [];
		for (let digit = 0; digit < numberOfDigits; digit++) {
			asciiTextRow.push(font.letters[numberAsString[digit]][letterRow]);
		}
		asciiNumber.push(asciiTextRow.join(font.space));
	}

	return asciiNumber;
}

function printNumberLine(font, number) {
	if (typeof number === 'number') {
		let numberAsString = number.toString();
		let numberOfDigits = numberAsString.length;

		if (numberOfDigits < font.maxLettersPerLine) {
			if (font.minDigits && numberOfDigits < font.minDigits) {
				numberAsString = `${' '.repeat(font.minDigits - numberOfDigits)}${numberAsString}`;
				numberOfDigits = numberAsString.length;
			}
			return printNumber(font, numberAsString, numberOfDigits);
		}
		// TODO: Resolve numbers with more digits than is space at available line
		throw new Error('Number has more digits than is able to fit to the command line length');
	} else {
		throw new Error('Passed argument is not a number');
	}
}

class ASCINumbers {
	constructor(font, userConfig) {
		const config = Object.assign({}, defaultConfig, userConfig);
		const fontStatistic = fontAnalyse(font);
		const maxLettersPerLine = Math.round(
			config.lineLength / (fontStatistic.width + config.space.length)
		);

		this.font = {
			letters: font,
			maxLettersPerLine,
			minDigits: config.minDigits,
			statistic: fontStatistic,
			space: config.space
		};
	}

	getNumber(number) {
		return printNumberLine(this.font, number).join('\n');
	}
}

export default ASCINumbers;
