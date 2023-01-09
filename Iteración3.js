// .........................3.1............................
const pointsList = [32, 54, 21, 64, 75, 43]
const copyPointsList = [...pointsList]
console.log(copyPointsList);
// .........................3.2............................
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const copyToy = {...toy}
console.log(copyToy)
// .........................3.3............................

const pointsLis2 = [54,87,99,65,32];
const pointsTwoLis = [...pointsList, pointsLis2];
console.log("..............3.3.............");
console.log(pointsTwoLis)
// .........................3.4............................

const toyUpdate = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toyAll = {...toy, ...toyUpdate}
console.log("..............3.4.............");
console.log(toyAll);
// .........................3.5............................
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];
const colorsCopy = [...colors];
colorsCopy.splice(2, 1);
console.log("..............3.5.............");
console.log(colorsCopy);
