const date = new Date();

const numbers = (digit) => (digit);

const dayNumber = (digit) => {
    const toString = numbers(digit).toString();
    return toString.substring(0, 2)
}

const monthNumber = (digit) => {
    const toString = numbers(digit).toString();
    return toString.substring(2, 4)
}
const yearNumber = (digit) => {
    const toString = numbers(digit).toString();
    return toString.substring(4, 6)
}

const individualNumber = (digit) => {
    const toString = numbers(digit).toString();
    return toString.substring(6, 9)
}

const kontrollDigit1 = (digit) => {
    const number = parseInt(numbers(digit)).toString();
    const splitToNumbers = (Array.from(number.split(''), Number))
    const digits = (splitToNumbers.slice(0, 9));

    let k1 = 11 - ((3 * digits[0] + 7 * digits[1] + 6 * digits[2] + 1 * digits[3] + 8 * digits[4] + 9 * digits[5] + 4 * digits[6] + 5 * digits[7] + 2 * digits[8]) % 11)
    if (k1 === 11) k1 = 0;
    return k1;
}

const kontrollDigit2 = (digit) => {
    const number = parseInt(numbers(digit)).toString();
    const splitToNumbers = (Array.from(number.split(''), Number))
    const digits = (splitToNumbers.slice(0, 9));

    let k1 = 11 - ((3 * digits[0] + 7 * digits[1] + 6 * digits[2] + 1 * digits[3] + 8 * digits[4] + 9 * digits[5] + 4 * digits[6] + 5 * digits[7] + 2 * digits[8]) % 11)
    let k2 = 11 - ((5 * digits[0] + 4 * digits[1] + 3 * digits[2] + 2 * digits[3] + 7 * digits[4] + 6 * digits[5] + 5 * digits[6] + 4 * digits[7] + 3 * digits[8] + 2 * k1) % 11);

    if (k2 === 11) k2 = 0;
    return k2;
}

const validateBirthNumber = (digit) => {
    const elevenDigits = new RegExp('^[0-9]{11}$');
    if (!elevenDigits.test(parseInt(digit))) {
        return {
            msg: 'invalid',
            reason: 'Must be eleven digits'
        }
    }
    return {
        digits: parseInt(digit),
        born: individualNumberValidation(digit).born,
        isSex: isSex(digit)
    }
};

const individualNumberValidation = (digits) => {
    const toString = digits.toString();
    const number = parseInt(toString.substring(6, 9))
    switch (true) {
        case (number < 499):
            return {
                born: `19${yearNumber(digits)}`,
                individualNr: number,
                msg: '000–499 omfatter personer født i perioden 1900–1999.'
            };
        case (499 < number || number > 749):
            return {
                born: `18${yearNumber(digits)}`,
                individualNr: number,
                msg: '500–749 omfatter personer født i perioden 1854–1899.'
            }
        case (500 < number || number > 999):
            return {
                born: `20${yearNumber(digits)}`,
                individualNr: number,
                msg: '500–999 omfatter personer født i perioden 2000–2039.'
            }
        case (900 < number || number > 999):
            return {
                born: `19${yearNumber(digits)}`,
                individualNr: number,
                msg: '900–999 omfatter personer født i perioden 1940–1999.'
            }
        default: return { msg: 'Mangler individ siffer' }
    }
}

const isSex = (digit) => {
    const toString = individualNumberValidation(digit).individualNr.toString();
    const toDigit = parseInt(toString.substring(2, 3))
    return toDigit % 2 == 0 && { msg: 'female' } || Math.abs(toDigit % 2) == 1 && { msg: 'male' }
}

const arrayEquals = (left, right) => {
    const { isArray } = Array;
    if (!isArray(left) || !isArray(right)) {
        return false;
    }

    const { length } = left;
    if (length !== right.length) {
        return false;
    }

    for (let i = 0; i < length; ++i) {
        if (left[i] !== right[i]) {
            return false;
        }
    }
    return true;
}

const checkSum = (digit) => {
    // 1. Array for input of birth digit
    // 2. Array for checkSum calculation
    const input = [validateBirthNumber(digit).digits];
    const checkSum = [];

    // Manipulating input birth digit 
    const toString = input.toString();
    const split = toString.split('');
    const toNumberArr = Array.from(split, Number)

    const d1 = parseInt(dayNumber(digit)[0])
    const d2 = parseInt(dayNumber(digit)[1])
    const m1 = parseInt(monthNumber(digit)[0])
    const m2 = parseInt(monthNumber(digit)[1])
    const y1 = parseInt(yearNumber(digit)[0])
    const y2 = parseInt(yearNumber(digit)[1])
    const i1 = parseInt(individualNumber(digit)[0])
    const i2 = parseInt(individualNumber(digit)[1])
    const i3 = parseInt(individualNumber(digit)[2])
    const k1 = kontrollDigit1(digit);
    const k2 = kontrollDigit2(digit);

    checkSum.unshift(d1, d2, m1, m2, y1, y2, i1, i2, i3, k1, k2);

    return (arrayEquals(checkSum, toNumberArr))
}

export {
    numbers,
    dayNumber,
    monthNumber,
    yearNumber,
    individualNumber,
    kontrollDigit1,
    kontrollDigit2,
    validateBirthNumber,
    isSex,
    individualNumberValidation,
    checkSum
}

