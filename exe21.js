//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
var cars = [{
        name: "honda",
        color: "white",
        modle: 2023
    },
    {
        name: "supra",
        color: "yellow",
        modle: 2020
    },
    {
        name: "BMW",
        color: "black",
        modle: 2022
    },
    {
        name: "ferrari",
        color: "green",
        modle: 2018
    }
];
console.log("car names modle and color:");
for (var _i = 0, cars_1 = cars; _i < cars_1.length; _i++) {
    car = cars_1[_i];
    console.log("car ".concat(car.name, " modle ").concat(car.modle, " and color ").concat(car.color));
}
