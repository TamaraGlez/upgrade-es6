// .........................2.1............................

const game = {
  title: "The last us 2",
  gender: ["action", "zombie", "survival"],
  year: 2020,
};
const {title, gender, year} = game;
console.log("........Iteración1.......")
console.log(title, gender, year);

// .........................2.2............................
const fruits = ['Banana', 'Strawberry', 'Orange'];
const [fruit1, fruit2, fruit3] = fruits
console.log("........Iteración2.......")
console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

// .........................2.3............................
const animalFunction = () => {
    return {name: 'Bengal Tiger', race: 'Tiger'}
};
const {name, race} = animalFunction()
console.log("........Iteración3.......")
console.log(name);
console.log(race);