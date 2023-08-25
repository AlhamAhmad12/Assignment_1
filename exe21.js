"use strict";
//They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let cars = [{
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
let car;
console.log("car names modle and color:");
for (car of cars) {
    console.log(`car ${car.name} modle ${car.modle} and color ${car.color}`);
}
;
