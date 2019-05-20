const name = "Max";
let age = 23;
const hasHobbies = true;

const summarizeUser = (userName, userAge, userHasHobbies) => {
    return `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobbies}`;
}

const add = (a, b) => a + b;
const addOne = a => a + 1;
const addRandom = () => 1 + 2;

console.log(summarizeUser(name, age, hasHobbies));
console.log('Add:', add(1,2));
console.log('Add One:', addOne(1));
console.log('Add Random', addRandom());