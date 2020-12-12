class Student { // classes should start with a capital letter (camelcase); also creates a constant so it can't be redefined
    constructor(firstName, lastName, year){ //special method used to instantiate new instances
        this.firstName = firstName;
        this.lastName = lastName;
        this.grade = year;
        //this refers to the individual instance of the class
    }
}

let firstStudent = new Student("Colt", "Steele",1);
let secondStudent = new Student("Blue", "Steele",2);

// new creates new objects from classes

