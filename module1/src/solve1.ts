// problem 1
const getLengthAngSquare = (pram: string | number) => {
  if (typeof pram === "string") {
    return pram.length;
  } else if (typeof pram === "number") {
    return pram * pram;
  }
};

const result1 = getLengthAngSquare(5);

// problem 2

interface Person {
  name: string;
  age: number;
  address?: {
    city?: string;
    street: string;
  };
  phone?: string;
}

function GetAddress(pram: Person) {
  return pram.address?.city;
}

const person: Person = {
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
  name: string;
  age: number;
  species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
}
class Dog {
  name: string;
  age: number;
  species: string;

  constructor(name: string, age: number, species: string) {
    this.name = name;
    this.age = age;
    this.species = species;
  }
}
function isCat(cat: Cat) {
  if (cat instanceof Cat) {
    return "yes i am cat";
  } else {
    return " i am not cat";
  }
}

const instance1 = new Cat("pushi", 2, "cat");
const instance2 = new Dog("tomi", 2, "dog");

// problem 4

const getTotalNumber = (mixedData: (number | string)[]): number => {
  let numbers = 0;

  mixedData.map((data) => {
    if (typeof data === "number") {
      numbers = numbers + data;
    }
    return 0;
  });
  return numbers;
};

const mixedData = ["one", "four"];
const totalNumber = getTotalNumber(mixedData);

// problem 5

interface Car {
  make: string;
  model: string;
  release: number;
}
interface Driver {
  name: string;

  license: number;
}

const getCarDriver = (car: Car, driver: Driver): Record<string, unknown> => {
  const newCarDriver = { ...car, ...driver };
  return newCarDriver;
};

const car: Car = {
  make: "toyta",
  model: "f505",
  release: 2025,
};
const driver: Driver = {
  name: "raki",
  license: 120213,
};

const getCarDriverObj = getCarDriver(car, driver);

// problem 6

const checkArrayOfNumber = (pram: unknown) => {
  if (Array.isArray(pram)) {
    if (pram.every((element) => typeof element === "number")) {
      let total = 0;
      pram.map((number) => {
        total = total + number;
      });
      console.log(total);
    }
  } else {
    console.error(pram);
  }
};

// problem 7
const findFirstOccurrence = <T>(pram: T[], pram2: T) => {
  const index = pram.indexOf(pram2);
  if (index) {
    return index;
  }
  return -1;
};

const numbers: number[] = [1, 2, 3, 4, 5, 2, 10, 50, 71];

const strings: string[] = ["apple", "banana", "cherry", "date", "guava"];

const targetNumber = 71;

const targetString = "guava";

const indexInNumbers = findFirstOccurrence(numbers, targetNumber);
console.log(indexInNumbers); //output:  1

// const indexInStrings = findFirstOccurrence(strings, targetString);
// console.log(indexInStrings); //output: 2

// problem 8
interface Product {
  name: string;
  price: number;
  quantity: number;
}
