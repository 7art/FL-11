let triangleSides = prompt('Please input 3 numbers (a, b, c) for triangle sides length:');
let [a, b, c] = triangleSides.split(',');
a = Number(a);
b = Number(b);
c = Number(c);
if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log('Eequivalent triangle');
    } else if (a === b || b === c || c === a) {
        console.log('Isosceles triangle');
    } else {
        console.log('Normal triangle');
    }
} else {
    console.log('Triangle doesn’t exist');
}