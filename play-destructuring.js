console.log('Destructuring:');
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(this);
        console.log(`Hi, I am ${this.name}`); // *this refers to the current person object scope
    }
}

const printName = (personData) => {
    console.log('Print Name:', personData.name);
}
const printNameDestruct = ({ name }) => {
    console.log('Print Name Destruct', name);
}
const { name, age } = person;
console.log('To variables: ', name, age);
printName(person);
printNameDestruct(person);

console.log('\nArray destructuring:');
const hobbies = ['Rugby', 'Coding'];
const [hobby1, hobby2] = hobbies;

console.log('From array to variables:', hobby1, hobby2);