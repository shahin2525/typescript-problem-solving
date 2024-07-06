"use strict";
// problem 1
const getLengthAngSquare = (pram) => {
    if (typeof pram === "string") {
        return pram.length;
    }
    else if (typeof pram === "number") {
        return pram * pram;
    }
};
const result1 = getLengthAngSquare(5);
function GetAddress(pram) {
    var _a;
    return (_a = pram.address) === null || _a === void 0 ? void 0 : _a.city;
}
const person = {
    name: "rakib",
    age: 20,
    address: {
        city: "kanpur",
        street: "24/12A",
    },
    phone: "aa1254",
};
const getCity = GetAddress(person);
// problem 3
class Cat {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}
class Dog {
    constructor(name, age, species) {
        this.name = name;
        this.age = age;
        this.species = species;
    }
}
function isCat(cat) {
    if (cat instanceof Cat) {
        return "yes i am cat";
    }
    else {
        return " i am not cat";
    }
}
const instance1 = new Cat("pushi", 2, "cat");
const instance2 = new Dog("tomi", 2, "dog");
// problem 4
const getTotalNumber = (mixedData) => {
    let numbers = 0;
    mixedData.map((data) => {
        // console.log(data);
        if (typeof data === "number") {
            // console.log(data, "data");
            return numbers + data;
        }
        return 0;
    });
    console.log(numbers, "3");
};
const mixedData = [1, "one", 2, "two", 3, "three", 4, "four"];
const totalNumber = getTotalNumber(mixedData);
// console.log(totalNumber, "total");
