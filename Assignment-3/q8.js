// Write a Person class with the following properties: firstName, lastName, and age. Include a
// method getFullName() that returns the full name of the person. Use constructor to initialize
// the data member and another function getDetails() to display all the details.

class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    }

    getDetails() {
        console.log(`Name: ${this.getFullName()}`);
        console.log(`Age: ${this.age}`);
    }
}

let person = new Person("Abc", "Def", 30);
person.getDetails();