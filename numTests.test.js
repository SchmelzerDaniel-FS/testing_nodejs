const addNum = require('./tests/testAdd')
const subNum = require('./tests/testSub')
const multNum = require('./tests/testMult')
const divNum = require('./tests/testDiv')
const sqrtNum = require('./tests/testSqrt')
const maxNum = require('./tests/testMax')

// 
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