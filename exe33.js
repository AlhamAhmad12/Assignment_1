var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var position;
for (var _i = 0, numbers_1 = numbers; _i < numbers_1.length; _i++) {
    var number = numbers_1[_i];
    if (number === 1) {
        position = "st";
    }
    else if (number === 2) {
        position = "nd";
    }
    else if (number === 3) {
        position = "rd";
    }
    else {
        position = "th";
    }
    console.log("".concat(number).concat(position));
}
