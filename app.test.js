import {
    numbers,
    dayNumber,
    monthNumber,
    yearNumber,
    individualNumber,
    kontrollDigit1,
    kontrollDigit2,
    validate,
    isSex,
    individualNumberValidation,
    checkSum
} from './app.js';

test('expect datatype number', () => {
    expect(typeof parseInt(numbers(25108338752))).toBe('number');
});

test('expect datatype is not number defined', () => {
    expect(typeof numbers(25108338752)).not.toBe('string')
})

test('expect datatype is string defined', () => {
    expect(typeof numbers(25108338752)).not.toBe('string')
})

test('expect number is not decimal', () => {
    expect(numbers(25108338752)).not.toBe(0.1);
});

describe('checking "checksum"', () => {
    it('expect checksum  k1 is valid', () => {
        expect(kontrollDigit1(25108338752)).toBe(5)
    })

    it('expect checksum  k1 is invalid', () => {
        expect(kontrollDigit1(25108139752)).not.toBe(5)
    })

    it('expect checksum k2 is valid', () => {
        expect(kontrollDigit2(25108338752)).toBe(2)
    })

    it('expect checksum k2 is invalid', () => {
        expect(kontrollDigit2(25108339752)).not.toBe(2)
    })
})


test('expect if birth number number to be 11 digits', () => {
    expect(validate(25108338752).digits.toString()).toHaveLength(11)
})

test('expect to reject if birth number to be less than 11 digits', () => {
    expect(validate(2510833875).toString()).not.toHaveLength(11)
})

test('expect day/month/year digit to be 2 numbers', () => {
    expect(typeof parseInt(dayNumber(25108338752))).toBe('number');
    expect(typeof parseInt(monthNumber(25108338752))).toBe('number');
    expect(typeof parseInt(yearNumber(25108338752))).toBe('number');
    expect(typeof parseInt(individualNumber(25108338752))).toBe('number');
})

describe('expect individual number to match the year number person is born', () => {
    it('expect individual number 388 to match the born digits', () => {
        expect(individualNumberValidation(25108338852).individualNr).toBe(388)
    })

    it('expect individual number 637 to match the born digits', () => {
        expect(individualNumberValidation(14051363788).individualNr).toBe(637)
    })

    it('expect individual number 106 to match the born digits', () => {
        expect(individualNumberValidation(11059410646).individualNr).toBe(106)
    })

    it('expect individual number 388 not to match the born digits', () => {
        expect(individualNumberValidation(25108332852).individualNr).not.toBe(388)
    })

    it('expect individual number 637 not to match the born digits', () => {
        expect(individualNumberValidation(14051364788).individualNr).not.toBe(637)
    })

    it('expect individual number 106 not to match the born digits', () => {
        expect(individualNumberValidation(11059450646).individualNr).not.toBe(106)
    })

    it('expect individual number to match the year number person is born 1900-1999', () => {
        expect(individualNumberValidation(25108338852).msg).toStrictEqual("000–499 omfatter personer født i perioden 1900–1999.")
    })

    it('expect individual number to match the year number person is born 1854-1899', () => {
        expect(individualNumberValidation(14051363788).msg).toStrictEqual("500–749 omfatter personer født i perioden 1854–1899.")
    })

    it('expect individual number to match the year number person is born 1900-1999', () => {
        expect(individualNumberValidation(11059410646).msg).toStrictEqual("000–499 omfatter personer født i perioden 1900–1999.")
    })
})

describe('Checking which sex', () => {
    it('expect odd number to be male', () => {
        expect(isSex(25108338752)).toStrictEqual({ "msg": "male" })
    })
    it('expect even number to be female', () => {
        expect(isSex(25108338852)).toStrictEqual({ "msg": "female" })
    })
    it('expect odd number not to be male', () => {
        expect(isSex(25108338752)).not.toStrictEqual({ "msg": "female" })
    })

    it('expect even number not to be female', () => {
        expect(isSex(25108338852)).not.toStrictEqual({ "msg": "male" })
    })
})

test('expect to reject if more than 11 digits', () => {
    expect(numbers(211215108338752).toString()).not.toHaveLength(11);
})

test('expect to reject if less than 11 digits', () => {
    expect(numbers(2112151083387521).toString()).not.toHaveLength(11);
})

test('expect to resolve if checksum match to be true', () => {
    expect(checkSum(28126741741)).toBeTruthy();
})

test('expect to reject if checksum of do not match ', () => {
    expect(checkSum(28126741441)).toBeFalsy();
})



