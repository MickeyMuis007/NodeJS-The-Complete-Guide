const hobbies = ['Sport', 'Cooking'];

console.log('For each loop: ');
for (let hobby of hobbies) {
    console.log(`- ${hobby}`);
}

console.log('Map Hobbies:', hobbies.map(hobby => `Hobby: ${hobby}`));
console.log('Original Hobbies:', hobbies);

// - Objects and arrays in javascript is reference types. You get a reference to where they are stored.
// - Therefore for the constant hoppies you can add new items to the object since only the reference
// to the object is stored as a const.

hobbies.push('Programming')
console.log('Additional Hobbies: ', hobbies);


console.log('\nUnderstanding spread operator and rest operator:')
const person = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(this);
        console.log(`Hi, I am ${this.name}`); // *this refers to the current person object scope
    }
}

const copyArraySlice = hobbies.slice(); 
const addArray = [hobbies];  // This create a array with hobbies array as a item
const copyArraySpread = [...hobbies];
const copyPerson = {...person}

console.log('Copy Array using slice:', copyArraySlice);
console.log('Add array as item:', addArray);
console.log('Copy array using spread operator:', copyArraySpread);
console.log('Copied person:', copyPerson);

console.log('\nRest operator:');
const toArray = (arg1, arg2, arg3) => {
    return [arg1, arg2, arg3];
}
const toArrayRest = (...args) => {
    return args;
}

console.log('To array function:', toArray(1, 2, 3));
console.log('To array rest:', toArrayRest(1, 2, 3, 4));
