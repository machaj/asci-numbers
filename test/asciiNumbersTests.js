import expect from 'expect';

import defaultFont from '../fonts/ANSI_Shadow';
import simpleFont from '../fonts/simple';
import ASCIINumbers from '../src/asciiNumbers';

describe('Default ASCI Numbers', () => {
	describe('Basic getNumber with simple font', () => {
		const numbers = new ASCIINumbers(simpleFont);

		it('should return 123', () => {
			expect(numbers.getNumber(123)).toBe('123');
		});
	});

	describe('Basic getNumber with default font', () => {
		const numbers = new ASCIINumbers(defaultFont);
		const expectedResult = '     ██╗  ██████╗  ██████╗ \n' +
								'    ███║  ╚════██╗ ╚════██╗\n' +
								'    ╚██║   █████╔╝  █████╔╝\n' +
								'     ██║  ██╔═══╝   ╚═══██╗\n' +
								'     ██║  ███████╗ ██████╔╝\n' +
								'     ╚═╝  ╚══════╝ ╚═════╝ ';

		it('should return asci text 123', () => {
			expect(numbers.getNumber(123)).toBe(expectedResult);
		});
	});

	describe('GetNumber with defined minDigit', () => {
		const numbers = new ASCIINumbers(defaultFont, { minDigits: 6 });
		const expectedResult = '' +
			'                                ██╗  ██████╗  ██████╗ \n' +
			'                               ███║  ╚════██╗ ╚════██╗\n' +
			'                               ╚██║   █████╔╝  █████╔╝\n' +
			'                                ██║  ██╔═══╝   ╚═══██╗\n' +
			'                                ██║  ███████╗ ██████╔╝\n' +
			'                                ╚═╝  ╚══════╝ ╚═════╝ ';

		it('should return asci text 123 with prefix', () => {
			expect(numbers.getNumber(123)).toBe(expectedResult);
		});
	});

	describe('Passing invalid argument to getNumber', () => {
		const numbers = new ASCIINumbers(simpleFont);
		let errorMessage;

		try {
			numbers.getNumber('2');
		} catch (exception) {
			errorMessage = exception.message;
		}

		it('should throw error', () => {
			expect(errorMessage).toBe('Passed argument is not a number');
		});
	});

	describe('Passing negative argument to getNumber', () => {
		const numbers = new ASCIINumbers(defaultFont);
		const expectedResult = '' +
			'              ██╗  ██████╗  ██████╗ \n' +
			'             ███║  ╚════██╗ ╚════██╗\n' +
			'  █████╗     ╚██║   █████╔╝  █████╔╝\n' +
			'  ╚════╝      ██║  ██╔═══╝   ╚═══██╗\n' +
			'              ██║  ███████╗ ██████╔╝\n' +
			'              ╚═╝  ╚══════╝ ╚═════╝ ';
		it('should print negative number', () => {
			expect(numbers.getNumber(-123)).toBe(expectedResult);
		});
	});

	describe('Passing too long number as argument to getNumber', () => {
		const numbers = new ASCIINumbers(defaultFont);
		let errorMessage;

		try {
			numbers.getNumber(1234567890);
		} catch (exception) {
			errorMessage = exception.message;
		}

		it('should throw error', () => {
			expect(errorMessage).toBe('Number has more digits than is' +
				' able to fit to the command line length');
		});
	});

	describe('Configured space between digits', () => {
		const numbers = new ASCIINumbers(defaultFont, { space: '***' });
		const expectedResult = '' +
			'     ██╗ *** ██████╗ *** ██████╗ \n' +
			'    ███║ *** ╚════██╗*** ╚════██╗\n' +
			'    ╚██║ ***  █████╔╝***  █████╔╝\n' +
			'     ██║ *** ██╔═══╝ ***  ╚═══██╗\n' +
			'     ██║ *** ███████╗*** ██████╔╝\n' +
			'     ╚═╝ *** ╚══════╝*** ╚═════╝ ';

		it('should return asci text where digits are separate by ***', () => {
			expect(numbers.getNumber(123)).toBe(expectedResult);
		});
	});
});
