import expect from 'expect';

import defaultFont from '../fonts/ANSI_Shadow';
import simpleFont from '../fonts/simple';
import ASCIINumbers from '../lib/asciiNumbers';

describe('Default ASCI Numbers', () => {
	describe('Basic getNumber with simple font',  () => {
		const numbers = new ASCIINumbers(simpleFont);

		it('should return 123', function () {
			expect(numbers.getNumber(123)).toBe('123');
		});
	});

	describe('Basic getNumber with default font',  () => {
		const numbers = new ASCIINumbers(defaultFont);
		const expectedResult =  '     ██╗  ██████╗  ██████╗ \n' +
								'    ███║  ╚════██╗ ╚════██╗\n' +
								'    ╚██║   █████╔╝  █████╔╝\n' +
								'     ██║  ██╔═══╝   ╚═══██╗\n' +
								'     ██║  ███████╗ ██████╔╝\n' +
								'     ╚═╝  ╚══════╝ ╚═════╝ ';

		it('should return asci text 123', function () {
			expect(numbers.getNumber(123)).toBe(expectedResult);
		});
	});

	describe('GetNumber with defined minDigit',  () => {
		const numbers = new ASCIINumbers(defaultFont, { minDigits: 6 });
		const expectedResult =  ''+
			'                                ██╗  ██████╗  ██████╗ \n' +
			'                               ███║  ╚════██╗ ╚════██╗\n' +
			'                               ╚██║   █████╔╝  █████╔╝\n' +
			'                                ██║  ██╔═══╝   ╚═══██╗\n' +
			'                                ██║  ███████╗ ██████╔╝\n' +
			'                                ╚═╝  ╚══════╝ ╚═════╝ ';

		it('should return asci text 123 with prefix', function () {
			expect(numbers.getNumber(123)).toBe(expectedResult);
		});
	});
});
