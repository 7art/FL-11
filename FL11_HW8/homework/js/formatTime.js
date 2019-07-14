function formatTime(time) {
    let hour = 0,
        day = 0,
        minute = 0;
    if (time / 1440 > 0) {
        day = parseInt(time / 1440);
        time = time % 1440;
    }
    if (time / 60 > 0) {
        hour = parseInt(time / 60);
        time = time % 60;
    }
    if (time < 60) {
        minute = time;
    }
    let result = `${day} day(s) ${hour} hour(s) ${minute} minute(s).`;
    return result;
}
console.log(formatTime(120));
console.log(formatTime(59));
console.log(formatTime(3601));