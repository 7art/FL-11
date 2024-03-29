function reverseNumber(number) {
    let reversePart = Math.abs(number);
    let reverseNumber = 0;
    while (reversePart > 0) {
        let digit = reversePart % 10;
        reverseNumber = reverseNumber * 10 + digit;
        reversePart = parseInt(reversePart / 10);
    }
    return reverseNumber * Math.sign(number);
}
console.log(reverseNumber(123));
console.log(reverseNumber(-456));
console.log(reverseNumber(1000));