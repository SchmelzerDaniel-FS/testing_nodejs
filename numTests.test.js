const {
    addNum,
    subNum,
    multNum,
    divNum,
    sqrtNum,
    maxNum
} = require('./tests/numTest')
// changed const to make sense and work proper. Instead of individually calling seperate pages I consolidated the numaric tests on one page.

describe('Numaric Tests', () => { 
    test('Addition', () => {
        expect(addNum(3, 3)).toEqual(6)
    })
    test('Subtraction', () => {
        expect(subNum(2, 2)).toEqual(0)
    })
    test('Multiplication', () => {
        expect(multNum(3, 3)).toEqual(9)
    })
    test('Division', () => {
        expect(divNum(6, 2)).toEqual(3)
    })
    test('Square Root', () => {
        expect(sqrtNum(16)).toEqual(4)
    })
    test('Max', () => {
        expect(maxNum(4, 2, 6)).toEqual(6)
    })
})