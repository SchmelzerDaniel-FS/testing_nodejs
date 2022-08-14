// Add
const addNum = (n, x) => {
    const sum = n + x
    return sum
}

// Divide
const divNum = (n, x) => {
    const div = n / x
    return div
}
// changed 'sum' to div

// Max... Biggest number
const maxNum = (n, x, y) => {
    let a = Math.max(n, x, y)
    return a
}

// Multiply
const multNum = (n, x) => {
    const mult = n * x
    return mult
}
// Changed 'sum' to mult

// Square Root
const sqrtNum = (x) => {
    const n = Math.sqrt(x)
    return n
}

// Sub
const subNum = (n, x) => {
    const sub = n - x
    return sub
}
// chanded 'sum' variable to sub

module.exports = {
    addNum,
    divNum,
    maxNum,
    multNum,
    sqrtNum,
    subNum
}
