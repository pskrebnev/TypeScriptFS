type Circle = {
  radius: number;
};

type Color = {
  color: string;
};

type CircleWithColor = Circle & Color;

const circle: CircleWithColor = {
  radius: 10,
  color: "red",
};

type Cat = {
  name: string;
};

type Dog = {
  breed: string;
};

type CatDog = Cat &
  Dog & {
    age: number;
  };

const catDog: CatDog = {
  name: "CatDog",
  breed: "CatDog",
  age: 10,
};
