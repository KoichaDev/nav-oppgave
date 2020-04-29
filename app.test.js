const numbers = require('./app.js');
const dNr = require('./app.js');
const mNr = require('./app.js');
const yNr = require('./app.js');
const validate = require('./app.js');



test('expect datatype number', () => {
    expect(typeof parseInt(numbers(25108338752))).toBe('number');
});

test('expect validate 11 digit numbers', () => {
    expect(validate(18081888015)).
})

/*
test('expect to reject if less than 11 digits', () => {
    expect(numbers(12367).toString()).toHaveLength(11);
})


test('expect to reject if more than 11 digits', () => {
    expect(numbers(211215108338752).toString()).not.toHaveLength(11);
})

test('expect day/month/year digit to be 2 numbers', () => {
    expect(typeof dNr(25108338752)).toBe('number');
    expect(typeof mNr(25108338752)).toBe('number');
    expect(typeof yNr(25108338752)).toBe('number');
}) */






/* test('expect datatype number', () => {
    expect(typeof '1726371928').toBe('string')
}) */