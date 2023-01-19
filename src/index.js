module.exports = function reverse (num) {
    let result = parseFloat(num.toString().split('').reverse().join(''));
    return result;
}
