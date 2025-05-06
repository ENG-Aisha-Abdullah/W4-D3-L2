const characters = [{
    name: "Luke Skywalker",
    height: 177,
    gender: "male",
    mass: 77,
    eye_color: "brown",
},
{
    name: "Leia Organa",
    height: 160,
    gender: "female",
    mass: 56,
    eye_color: "blue",
},
{
    name: "Han Solo",
    height: 180,
    gender: "male",
    mass: 80,
    eye_color: "brown",
},
{
    name: "Chewie",
    height: 222,
    gender: "male",
    mass: 190,
    eye_color: "black",
},
{
    name: "Kevin",
    height: 106,
    gender: "male",
    mass: 32.2,
    eye_color: "red",
},
];


// 1. Get the first name of a character whose mass is more than 75.
let moreMass = characters.find(function (currentValue) {
    return currentValue.mass > 75;
});
console.log(moreMass.name);


// 2. Get the first eye color of a character shorter than 180.
let talliestEyeColor = characters.find(function (currentValue) {
    return currentValue.height < 180;
});
console.log(talliestEyeColor.eye_color);


// 3. Get characters whose height is greater than 150 but less than 210.

let heightRange = characters.filter(function (currentValue) {
    return currentValue.height > 150 && currentValue.height < 210;
});
heightRange.forEach(function(currentValue) {
    console.log(currentValue.name);
});

// 4. Get all female characters.
let femaleCharacters = characters.filter(function (currentValue) {
    return currentValue.gender == "female" ;
});
femaleCharacters.forEach(function(character) {
    console.log(femaleCharacters);
});



// 5. Get an array of all eye colors only.
let alleyeColors = characters.map(function(currentValue) {
    return currentValue.eye_color;
});
console.log(alleyeColors);


// 6. Get an array of all masses only.
let allMasses = characters.map(function(currentValue) {
    return currentValue.mass;
});
console.log(allMasses);


// 7. Sort by name alphabetically (A to Z).
let sortedName = characters.sort(function(a, b) {
    return a.name.localeCompare(b.name);
});
console.log(sortedName);

// 8. Sort by height (low to high).
let sortedHeight = characters.sort(function(a, b) {
    return a.height - b.height;
});
console.log(sortedHeight);


// 9. Does every character have a height greater than 100?
let anyTallerHieght = characters.every(function(currentValue) {
    return currentValue.height > 100
});
console.log(anyTallerHieght);