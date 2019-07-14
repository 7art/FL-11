function isInteger(value) {
    return typeof value === 'number' && value % 1 === 0;
}
console.log(isInteger(5));
console.log(isInteger(5.2));