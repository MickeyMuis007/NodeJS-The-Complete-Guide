const name = "Max";
let age = 23;
const hasHobbies = true;

console.log(`Age before change: ${age}`);

age = 25;

console.log(`Age after change: ${age}`);

function summarizeUser(userName, userAge, userHasHobbies){
    return `Name is ${userName}, age is ${userAge} and the user has hobbies: ${userHasHobbies}`;
}

console.log(summarizeUser(name, age, hasHobbies));