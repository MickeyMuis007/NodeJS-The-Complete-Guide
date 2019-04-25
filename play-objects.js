const person1 = {
    name: 'Max',
    age: 29,
    greet: () => {
        console.log(this);
        console.log(`Hi, I am ${this.name}`);   // *this refers to the same scope the person1 is part of, in the arrow function
    }
}

const person2 = {
    name: 'Max',
    age: 29,
    greet: function() {
        console.log(this);
        console.log(`Hi, I am ${this.name}`);   // *this refers to the current person2 object scope
    }
}

const person3 = {
    name: 'Max',
    age: 29,
    greet() {
        console.log(this);
        console.log(`Hi, I am ${this.name}`); // *this refers to the current person object scope
    }
}

person1.greet();
person2.greet();
person3.greet();