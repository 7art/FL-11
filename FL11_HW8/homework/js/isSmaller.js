function isBigger(firstArg, secondArg) {
    return firstArg > secondArg;
}

function isSmaller(firstArg, secondArg) {
    return !isBigger(firstArg, secondArg);
}

console.log(isSmaller(5, -1));