const users = [
  { id: 1, name: "Abel" },
  { id: 2, name: "Julia" },
  { id: 3, name: "Pedro" },
  { id: 4, name: "Amanda" },
];
const result = users.map((names) => ({ value: names.name }));
console.log("........4.1.........");
console.log(result);
// ...............................4.2..........................
const resultIncludes = users.map((use) => {
  console.log("........4.2.........");
  if (use.name[0].includes("A")) {
    use.name = "Anacleto";
  }
  return use.name;
});
console.log(resultIncludes);
// ..............................4.3.............................
// me dá undefined¡¡¡¡¡

const cities = [
  { isVisited: true, name: "Tokyo" },
  { isVisited: false, name: "Madagascar" },
  { isVisited: true, name: "Amsterdam" },
  { isVisited: false, name: "Seul" },
];
const cityName = cities.map((city) => {
  if (city.isVisited == true) {
    city.name += ": (Visitado)";
  }
});
console.log(cityName);
