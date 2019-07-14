function getMin() {
    let arr = [...arguments];
    let min = arr[0];
    console.log(min);
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
    }
    return min;
}
console.log(getMin(3, 0, -1));
console.log(getMin(2, 8, 4, 6, 11, 1));