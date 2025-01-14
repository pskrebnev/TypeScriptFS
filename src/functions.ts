// Function parameter type annotations:
const doSomething = (person: string, age: number, isFunny: boolean) => {};

// Return type annotation:
function greeting(person: string = "stranger"): string {
  return `Hi there, ${person}!`;
}

function square(num: number): number {
  return num * num;
}

square(3);
greeting("Tonya Harding");
doSomething("ChickenFace", 78, true);

// Arrow function:
const add = (x: number, y: number): number => {
  return x + y;
};

// Contextual Type Clues
const colors = ["red", "orange", "yellow"];
colors.map((color) => {
  return color.toUpperCase();
});

// Void
function printTwice(msg: string): void {
  console.log(msg);
  console.log(msg);
}

// Never
function makeError(msg: string): never {
  throw new Error(msg);
}

function gameLoop(): never {
  while (true) {
    console.log("GAME LOOP RUNNING!");
  }
}

function square1(num: number): number {
  return num * num;
}

const doSmth = (person: string, age: number, isFunny: boolean) => {};
console.log(doSmth("Goldman", 25, true));

const addStr = (person: string = "tester"): string => {
  return `Hello ${person}`;
};

const aNumber = (num: number) => {
  if (Math.random() < 0.5) {
    return num.toString();
  }
  return num * num;
};

aNumber(3);

const twoFer = (name: string = "you"): string => {
  return `One for ${name}, one for me`;
};

console.log(twoFer());
console.log(twoFer("Elton"));

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// Write a isLeapyear() function that accepts a year and returns true/false depending on if the year is a leap year
// isLeapYear(2012) => true
// isLeapYear(2013) => false

// To determine whether a year is a leapyear, use this "formula":
// A YEAR IS A LEAPYEAR IF
// - year is a multiple of 4 AND not a multiple of 100
// OR...
// - year is a multiple of 400
// hint - use modulo

const isLeapYear = (year: number): boolean => {
  return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
};

function printName(person: { name: string; surname: string }): void {
  console.log(`Your name is ${person.name} ${person.surname}`);
}

printName({ name: "John", surname: "Doe" });
let coordinate: { x: number; y: number } = { x: 2, y: 55 };
