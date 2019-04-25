const hobbies = ['Sport', 'Cooking'];

console.log('For each loop: ');
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log('\nMap Hobbies:', hobbies.map(hobby => `Hobby: ${hobby}`));
console.log('Original Hobbies:', hobbies);

// - Objects and arrays in javascript is reference types. You get a reference to where they are stored.
// - Therefore for the constant hoppies you can add new items to the object since only the reference
// to the object is stored as a const.

hobbies.push('Programming')
console.log('Additional Hobbies: ', hobbies);