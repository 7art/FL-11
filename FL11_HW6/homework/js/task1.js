let coordPoints = prompt('Please enter the coordinates of points (a1, a2, b1, b2, c1, c2):');
let [a1, a2, b1, b2, c1, c2] = coordPoints.split(',');
a1 = Number(a1);
a2 = Number(a2);
b1 = Number(b1);
b2 = Number(b2);
c1 = Number(c1);
c2 = Number(c2);
let magicNumber = 2;
let result = (a1 + b1) / magicNumber === c1 && (a2 + b2) / magicNumber === c2;
console.log(result);