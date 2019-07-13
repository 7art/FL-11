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
    console.log(result);
}
formatTime(120); //=> 0 day(s) 2 hour(s) 0 minute(s).
formatTime(59); //=> 0 day(s) 0 hour(s) 59 minute(s).
formatTime(3601); //=> 1 day(s) 0 hour(s) 1 minute(s).