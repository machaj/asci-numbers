# ascii-numbers

[![Greenkeeper badge](https://badges.greenkeeper.io/machaj/ascii-numbers.svg)](https://greenkeeper.io/)
[![Build Status](https://travis-ci.org/machaj/ascii-numbers.svg?branch=master)](https://travis-ci.org/machaj/ascii-numbers)
[![Coverage Status](https://coveralls.io/repos/github/machaj/ascii-numbers/badge.svg?branch=master)](https://coveralls.io/github/machaj/ascii-numbers?branch=master)

a simple lib for converting numbers to ASCII art text.

## Usage

```javascript
import font from 'asci-numbers/fonts/ANSI_Shadow';
import ASCIINumbers from 'asci-numbers';

const asciiNumbersWithFont = new ASCIINumbers(font);

console.log(asciiNumbersWithFont.getNumber(123))

/* Output
     ██╗  ██████╗  ██████╗
    ███║  ╚════██╗ ╚════██╗
    ╚██║   █████╔╝  █████╔╝
     ██║  ██╔═══╝   ╚═══██╗
     ██║  ███████╗ ██████╔╝
     ╚═╝  ╚══════╝ ╚═════╝
*/
```

## Options
You can pass second parameter with options to ASCIINumbers constructor.

```javascript
const config = {
	lineLength: 80,
	minDigits: null,
	space: ''
};

const asciiNumbersWithFont = new ASCIINumbers(font, config);
```

**lineLength** defines the maximum usable space for ascii text output.
Default is 80 characters.

**minDigits** defines number alignment. If the printed number has fewer
than 'minDigits' digits, then is prefixed by spaces.

```javascript
...

const asciiNumbersWithFont = new ASCIINumbers(font, { minDigits: 6 });
console.log(asciiNumbersWithFont.getNumber(123))

/* Output
                                ██╗  ██████╗  ██████╗
                               ███║  ╚════██╗ ╚════██╗
                               ╚██║   █████╔╝  █████╔╝
                                ██║  ██╔═══╝   ╚═══██╗
                                ██║  ███████╗ ██████╔╝
                                ╚═╝  ╚══════╝ ╚═════╝
*/
```

**space** defines separator between digits.

```javascript
...

const asciiNumbersWithFont = new ASCIINumbers(font, { space: '***' });
console.log(asciiNumbersWithFont.getNumber(123))

/* Output
     ██╗ *** ██████╗ *** ██████╗
    ███║ *** ╚════██╗*** ╚════██╗
    ╚██║ ***  █████╔╝***  █████╔╝
     ██║ *** ██╔═══╝ ***  ╚═══██╗
     ██║ *** ███████╗*** ██████╔╝
     ╚═╝ *** ╚══════╝*** ╚═════╝
*/
```

## Fonts

This lib use ANSI Shadow font from [figlet](https://github.com/patorjk/figlet.js), but you can simply create your own font.
Check [ANSI_Shadow.js](https://github.com/machaj/ascii-numbers/blob/master/fonts/ANSI_Shadow.js) for font structure.
