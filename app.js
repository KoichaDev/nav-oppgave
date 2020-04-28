const validate = (digit) => {
    const elevenDigits = new RegExp('^[0-9]{11}$')
    const toString = number.toString();
    if (elevenDigits.test(toString)) return number;
};


/*
const validateBirth = (arr) => arr.map(number => {
    const elevenDigits = new RegExp('^[0-9]{11}$')
    const toString = number.toString();
    if (elevenDigits.test(toString)) return number;
});

const getData = (array) => {
}

const dNr = (number, arr = validateBirth(mockData)) => {
    const data = arr.map(digit => {
        let position = number;
        const toString = digit.toString();
        const array = toString.substring(0, 2).split('');
        return array[position]
    })
    return data.forEach(digit => digit)

}

const mNr = (number, arr = validateBirth(mockData)) => {
    return arr.map(digit => {
        let position = number;
        const toString = digit.toString();
        const array = toString.substring(2, 4).split('');
        return array[position]
    })
}

const yNr = (number, arr = validateBirth(mockData)) => {
    return arr.map(digit => {
        let position = number;
        const toString = digit.toString();
        const array = toString.substring(4, 6).split('');
        return array[position]
    })
}

const iNr = (number, arr = validateBirth(mockData)) => {
    return arr.map(digit => {
        let position = number;
        const toString = digit.toString();
        const array = toString.substring(6, 9).split('');
        return array[position]
    })
}

const checkSum = (d1, d2, m1, m2, y1, y2, i1, i2, i3) => {
    d1 = dNr(0);
    d2 = dNr(1);
    m1 = mNr(0);
    m2 = mNr(1);
    y1 = yNr(0);
    y2 = yNr(1);
    i1 = iNr(0);
    i2 = iNr(1);
    i3 = iNr(2);

    let k1 = 11 - ((3 * d1 + 7 * d2 + 6 * m1 + 1 * m2 + 8 * y1 + 9 * y2 + 4 * i1 + 5 * i2 + 2 * i3) % 11);
    let k2 = 11 - ((5 * d1 + 4 * d2 + 3 * m1 + 2 * m2 + 7 * y1 + 6 * y2 + 5 * i1 + 4 * i2 + 3 * i3 + 2 * k1) % 11);
}











let d1, d2, m1, m2, y1, y2, i1, i2, i3;
for (const numbers of mockData) {
    const toString = numbers.toString();
    const split = toString.split('').map(Number);

    d1 = split[0];
    d2 = split[1];
    m1 = split[2];
    m2 = split[3];
    y1 = split[4];
    y2 = split[5];
    i1 = split[6];
    i2 = split[7];
    i3 = split[8];

    const individNr = parseInt([i1, i2, i3].join(''));

    let k1 = 11 - ((3 * d1 + 7 * d2 + 6 * m1 + 1 * m2 + 8 * y1 + 9 * y2 + 4 * i1 + 5 * i2 + 2 * i3) % 11);
    let k2 = 11 - ((5 * d1 + 4 * d2 + 3 * m1 + 2 * m2 + 7 * y1 + 6 * y2 + 5 * i1 + 4 * i2 + 3 * i3 + 2 * k1) % 11);

    k1 === 11 ? k1 = 0 : k1;

    if (k2 === 0) {
        k2 = 0;
    } else if (k2 === 11) {
        k2 = 11 - k2
    }
    //console.log(k1, k2);

    /*
        //  000–499 omfatter personer født i perioden 1900–1999.
        if (individNr < 499) {
            console.log('1900+: 000-499: ', individNr, true);
        } else {
            console.log('1900+: - 000-499: ', individNr, false);
        }

        //  500–749 omfatter personer født i perioden 1854–1899.
        if (499 < individNr || individNr > 749) {
            console.log('+1899: - 500–749: ', individNr, true);
        } else {
            console.log('+1899: - 500–749: ', individNr, false);
        }

        //  500–999 omfatter personer født i perioden 2000–2039.
        if (500 < individNr || individNr > 999) {
            console.log('2000-2039: - 500-999: ', individNr, true);
        } else {
            console.log('2000-2039: - 500-999: ', individNr, false);
        }

        //  900–999 omfatter personer født i perioden 1940–1999.
        if (900 < individNr || individNr > 999) {
            console.log('1940–1999 - 900–999: ', individNr, true);
        } else {
            console.log('1940–1999 - 900–999: ', individNr, false);
        }
     */


//}
