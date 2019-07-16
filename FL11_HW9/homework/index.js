let getNumbers = function (value) {
    let result = [];
    for (let i = 0; i <= value.length; i++) {
        let num = Number(value[i]);
        if (num) {
            result.push(num);
        }
    }
    return result;
}

let findTypes = function () {
    let result = {}
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        result[type] = !result.hasOwnProperty(type) ? 1 : result[type] + 1;
    }
    return result;
}

let executeforEach = function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}

let mapArray = function (arr, func) {
    let result = [];
    executeforEach(arr, function (el) {
        result.push(func(el));
    });
    return result;
}

let filterArray = function (arr, func) {
    let result = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            result.push(el);
        }
    });
    return result;
}

let showFormattedDate = function (date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let fullYear = date.getFullYear();
    let month = months[date.getMonth()];
    let dey = date.getDate();
    return `Date: ${month} ${dey} ${fullYear}`;
}

let canConvertToDate = function (date) {
    date = new Date(date);
    return date.toString() !== 'Invalid Date';
}

let daysBetween = function (firstDate, secondDate) {
    let dayMiliseconds = 86400000;
    let between = Math.abs(secondDate.getTime() - firstDate.getTime());
    return Math.ceil(between / dayMiliseconds);
}

let getAmountOfAdultPeople = function (data) {
    let result = [],
        dayInYear = 356,
        ageAdul = 18;
    for (let item of data) {
        let dateNow = new Date();
        let birthday = new Date(item.birthday);
        let days = daysBetween(birthday, dateNow);
        result.push(Math.round(days / dayInYear));
    }
    result = filterArray(result, function (el) {
        return el >= ageAdul;
    })
    return result.length;
}

let keys = function (obj) {
    let res = [];
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            res.push(item);
        }
    }
    return res;
}

let values = function (obj) {
    let res = [];
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            res.push(obj[item]);
        }
    }
    return res;
}