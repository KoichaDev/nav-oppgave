const numbers = (digit) => (digit);

const dNr = (digit) => {
    const toString = numbers(digit).toString();
    return toString.substring(0, 2)
}
const mNr = (digit) => {
    const toString = numbers(digit).toString();
    return toString.substring(2, 4)
}
const yNr = (digit) => {
    const toString = numbers(digit).toString();
    return toString.substring(4, 6)
}

const iNr = (digit) => {
    const toString = numbers(digit).toString();
    return toString.substring(6, 9)
}

const validate = (digit) => {
    const elevenDigits = new RegExp('^[0-9]{11}$');
    if (!elevenDigits.test(parseInt(digit))) {
        return {
            msg: 'invalid',
            reason: 'Must be eleven digits'
        }
    }
    return parseInt(digit);
};

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
    const input = [validate(digit)];
    const checkSum = [];

    // Manipulating input birth digit 
    const toString = input.toString();
    const split = toString.split('');
    const toNumberArr = Array.from(split, Number)

    const d1 = parseInt(dNr(digit)[0])
    const d2 = parseInt(dNr(digit)[1])
    const m1 = parseInt(mNr(digit)[0])
    const m2 = parseInt(mNr(digit)[1])
    const y1 = parseInt(yNr(digit)[0])
    const y2 = parseInt(yNr(digit)[1])
    const i1 = parseInt(iNr(digit)[0])
    const i2 = parseInt(iNr(digit)[1])
    const i3 = parseInt(iNr(digit)[2])

    let k1 = 11 - ((3 * d1 + 7 * d2 + 6 * m1 + 1 * m2 + 8 * y1 + 9 * y2 + 4 * i1 + 5 * i2 + 2 * i3) % 11);
    let k2 = 11 - ((5 * d1 + 4 * d2 + 3 * m1 + 2 * m2 + 7 * y1 + 6 * y2 + 5 * i1 + 4 * i2 + 3 * i3 + 2 * k1) % 11);

    if (k1 === 11) k1 = 0
    if (k2 === 11) k2 = 0

    checkSum.unshift(d1, d2, m1, m2, y1, y2, i1, i2, i3, k1, k2);

    return (arrayEquals(checkSum, toNumberArr)) || { msg: 'invalid', status: 'The validation of the birth number  is not correct' }
}

console.log(checkSum(18081888015))

module.exports = numbers;
module.exports = dNr;
module.exports = mNr;
module.exports = yNr;