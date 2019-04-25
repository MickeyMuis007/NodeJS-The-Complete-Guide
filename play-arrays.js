const hobbies = ['Sport', 'Cooking'];

console.log('For each loop: ');
for (let hobby of hobbies) {
    console.log(hobby);
}

console.log('\nMap:', hobbies.map(hobby => `Hobby: ${hobby}`));
console.log('Original Hobbies:', hobbies);