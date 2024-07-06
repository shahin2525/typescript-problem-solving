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
