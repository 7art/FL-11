function addOne(x) {
    return x + 1;
}

function pipe() {
    let number = Number(arguments[0]);
    for (let index = 1; index < arguments.length; index++) {
        number = arguments[index](number);
    }
    return number;
}

console.log(pipe(2, addOne, addOne));