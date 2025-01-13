// **********************************************
// ******************* PART 1 *******************
// **********************************************
// Create a variable called highScore that can be a number OR a boolean
let highScore: number | boolean;
highScore = 1;
console.log(highScore);

// **********************************************
// ******************* PART 2 *******************
// **********************************************
// create an array called stuff
// it can be an array of numbers OR an array of strings
// it cannot be an array of numbers and strings (mixed together)
let stuffTask5: number[] | string[] = [] as number[];
stuffTask5.push(1);
stuffTask5.push(7);

// If you want to switch to strings, reassign:
stuffTask5 = [] as string[];
stuffTask5.push("a");
console.log(stuffTask5);

// **********************************************
// ******************* PART 3 *******************
// **********************************************
// Create a literal type called SkillLevel
// There are 4 allowed values: "Beginner", "Intermediate", "Advanced", and "Expert"
type SkillLevel = "Beginner" | "Intermediate" | "Advanced" | "Expert";

// **********************************************
// ******************* PART 4 *******************
// **********************************************
// Create a type called SkiSchoolStudent
// name must be a string
// age must be a number
// sport must be "ski" or "snowboard"
// level must be a value from the SkillLevel type (from above)
type SkiSchoolStudent = {
  name: string;
  age: number;
  sport: "ski" | "snowboard";
  level: SkillLevel;
};

let student: SkiSchoolStudent[];
student = [
  {
    name: "John",
    age: 20,
    sport: "ski",
    level: "Beginner",
  },
  {
    name: "Jane",
    age: 22,
    sport: "snowboard",
    level: "Intermediate",
  },
];

student.push({
  name: "Habr",
  age: 25,
  sport: "ski",
  level: "Beginner",
});

console.log(student);

// **********************************************
// ******************* PART 5 *******************
// **********************************************
// Define a type to represent an RGB color
// r should be a number
// g should be a number
// b should be a number
type RGB = {
  red: number;
  green: number;
  blue: number;
};

// Define a type to represent an HSL color
// h should be a number
// s should be a number
// l should be a number
type HSL = {
  hue: number;
  saturation: number;
  lightness: number;
};

// Create an array called colors that can hold a mixture of RGB and HSL color types
const colorsTask5: (RGB | HSL)[] = [
  { red: 255, green: 0, blue: 0 },
  { hue: 120, saturation: 100, lightness: 50 },
  { red: 0, green: 255, blue: 0 },
  { hue: 240, saturation: 100, lightness: 50 },
  { red: 0, green: 0, blue: 255 },
  { hue: 0, saturation: 100, lightness: 50 },
  { red: 255, green: 255, blue: 0 },
  { hue: 60, saturation: 100, lightness: 50 },
  { red: 255, green: 0, blue: 255 },
  { hue: 300, saturation: 100, lightness: 50 },
  { red: 0, green: 255, blue: 255 },
  { hue: 180, saturation: 100, lightness: 50 },
  { red: 255, green: 255, blue: 255 },
  { hue: 0, saturation: 0, lightness: 100 },
  { red: 0, green: 0, blue: 0 },
  { hue: 0, saturation: 0, lightness: 0 },
] as (RGB | HSL)[];

// **********************************************
// ******************* PART 6 *******************
// **********************************************
// Write a function called greet that accepts a single string OR an array of strings
// It should print "Hello, <name>" for that single person OR greet each person in the array with the same format
function greet(name: string | string[]): void {
  if (typeof name === "string") {
    console.log(`Hello, ${name}`);
  } else {
    for (let n of name) {
      console.log(`Hello, ${n}`);
    }
  }
}
greet(["John", "Johan", "Bartolomei"]);
