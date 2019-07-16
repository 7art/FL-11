// 0
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

getNumbers('string'); // returns [] 
getNumbers('n1um3ber95'); // returns [1,3,9,5] 

// 1
let findTypes = function () {
    let result = {}
    for (let i = 0; i < arguments.length; i++) {
        let type = typeof arguments[i];
        result[type] = !result.hasOwnProperty(type) ? 1 : result[type] + 1;
    }
    return result;
}
// console.log(findTypes('number')); // returns {“string”:1} 
// console.log(findTypes(null, 5, "hello")); // returns {“object”:1, “number”:1, “string”:1}
// console.log(findTypes(null, 5, "hello", 6, "hello")); // returns {“object”:1, “number”:1, “string”:1}


// 2
let executeforEach = function (arr, func) {
    for (let i = 0; i < arr.length; i++) {
        func(arr[i]);
    }
}
// executeforEach([1, 2, 3], function (el) {
//     console.log(el)
// }) // logs 1 2 3

// 3
let mapArray = function (arr, func) {
    let result = [];
    executeforEach(arr, function (el) {
        result.push(func(el));
    });
    return result;
}

// console.log(mapArray([2, 5, 8], function (el) {
//     return el + 3
// })); // returns [5, 8, 11]

// 4
let filterArray = function (arr, func) {
    let result = [];
    executeforEach(arr, function (el) {
        if (func(el)) {
            result.push(el);
        }
    });
    return result;
}

// console.log(filterArray([2, 5, 8], function (el) {
//     return el > 3
// })); // returns [5, 8]

// 5
let showFormattedDate = function (date) {
    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    let fullYear = date.getFullYear();
    let month = months[date.getMonth()];
    let dey = date.getDate();
    return `Date: ${month} ${dey} ${fullYear}`;

}
// console.log(showFormattedDate(new Date('2019-01-27T01:10:00')));
// returns ‘Date: Jan 27 2019’
// every month should be showed as 3 letters (e.g. Feb, Apr or Dec)

// 6
let canConvertToDate = function (date) {
    date = new Date(date);
    return date.toString() !== 'Invalid Date';
}

// console.log(canConvertToDate('2016-13-18T00:00:00')); // false
// console.log(canConvertToDate('2016-03-18T00:00:00')); // true


// 7
let daysBetween = function (firstDate, secondDate) {
    let dayMiliseconds = 86400000;
    let between = Math.abs(secondDate.getTime() - firstDate.getTime());
    return Math.ceil(between / dayMiliseconds);
}
// console.log(daysBetween(new Date('2016-03-18T00:00:00'), new Date('2016-04-19T00:00:00'))); // 32


// 8
let data = [{
        '_id': '5b5e3168c6bf40f2c1235cd6',
        'index': 0,
        'birthday': '2016-03-18T00:00:00',
        'eyeColor': 'green',
        'name': 'Stein',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e3168e328c0d72e4f27d8',
        'index': 1,
        'birthday': '1991-02-11T00:00:00',
        'eyeColor': 'blue',
        'name': 'Cortez',
        'favoriteFruit': 'strawberry'
    },
    {
        '_id': '5b5e3168cc79132b631c666a',
        'index': 2,
        'birthday': '1984-04-17T00:00:00',
        'eyeColor': 'blue',
        'name': 'Suzette',
        'favoriteFruit': 'apple'
    },
    {
        '_id': '5b5e31682093adcc6cd0dde5',
        'index': 3,
        'birthday': '1994-04-17T00:00:00',
        'eyeColor': 'green',
        'name': 'George',
        'favoriteFruit': 'banana'
    }
];

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

//See input data example in CODE section
// console.log(getAmountOfAdultPeople(data)); // returns 3;

// 9
let keys = function (obj) {
    let res = [];
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            res.push(item);
        }
    }
    return res;
}
// console.log(keys({
//     keyOne: 1,
//     keyTwo: 2,
//     keyThree: 3
// })); // returns [“keyOne”, “keyTwo”, “keyThree”]



// 10
let values = function (obj) {
    let res = [];
    for (const item in obj) {
        if (obj.hasOwnProperty(item)) {
            res.push(obj[item]);
        }
    }
    return res;
}

// console.log(values({
//     keyOne: 1,
//     keyTwo: 2,
//     keyThree: 3
// })); // returns [1, 2, 3]