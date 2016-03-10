import expect from 'expect';
import defaultFont from '../fonts/ANSI_Shadow';
import simpleFont from '../fonts/simple';
import fontAnalyse from '../lib/asciiNumbersFontUtils';


describe('ASCINumbersFontUtils', () => {
	describe('Passing valid font', () => {
		const fontStatistic = fontAnalyse(defaultFont);
		it('should return object with font height and width', () => {
			expect(fontStatistic.height).toBe(6);
			expect(fontStatistic.width).toBe(9);
		});
	});

	describe('Passing simple font', () => {
		const fontStatistic = fontAnalyse(simpleFont);
		it('should return height 1 and width 1', () => {
			expect(fontStatistic.height).toBe(1);
			expect(fontStatistic.width).toBe(1);
		});
	});

	describe('Passing invalid font', () => {
		const invalidFont = { 0: ['0'], 1: ['1'] };
		let errorMessage;

		try {
			fontAnalyse(invalidFont);
		} catch (exception) {
			errorMessage = exception.message;
		}

		it('should throw error', () => {
			expect(errorMessage).toBe('Font does not contain letter 2.');
		});
	});
});
