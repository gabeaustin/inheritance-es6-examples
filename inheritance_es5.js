// The person constructor, our base pseudo-class
// This is what everything inherits from
function Person(name, age) {
    this.name = name;
    this.age = age;
}

// this is the greet method
Person.prototype.greet = function() {
    console.log(`Greetings, I am ${this.name}.`);
}

// this is the sleep method
Person.prototype.sleep = function() {
    console.log(`${this.name} is going to sleep now.`);
}

// The Teacher constructor, a child pseudo-class
// this needs to inherit from the Person class
function Teacher(name, age, dept) {
    // step 1 is to call the parent constructor function
    // if you choose to pass arguments UP to parent, do so now
    Person.call(this, name, age);

    // after calling the parent constructor, set your OWN properties
    this.dept = dept;
}

// Make the Teacher prototype be a copy of the Person prototype
// this means you have all the same methods as a person
Teacher.prototype = Object.create(Person.prototype);
// As a teacher I need to have the EXACT same prototype as a person

// Now you have to reset the constructo back to Teacher
// this is because it would be set to Person because of the previous line
Teacher.prototype.constructor = Teacher;
// After we have copy the prototype (and all the prototype's methods), we
// create our on prototype => Teacher

// This will effectively overwrite the greet function you inherited from Person
Teacher.prototype.greet = function() {
    console.log(`Hello, I am ${this.name}. I work in the ${this.dept} department.`);
}
// This is where you will customize the child prototype
// This will REPLACE the greet function that the Teacher inherited

function Student(name, age, major) {
    Person.call(this, name, age);
    this.major = major
}

// Remember: we do this every single time

// student prototype is a copy of the person prototype
Student.prototype = Object.create(Person.prototype);
// we create a student prototype that has all the methods that we copied from the person prototype
Student.prototype.constructor = Student;

Student.prototype.greet = function() {
    console.log(`Hi I'm ${this.name}. I'm majoring in ${this.major}.`);
}

// Tests Below //
let personOne = new Person("John Jacobs", 29);
let teacherOne = new Teacher("Jasmine Jones", 26, "Math");
let studentOne = new Student("Jerico Jameson", 20, "Computer Science");

console.log(personOne);
console.log(teacherOne);
console.log(studentOne);

personOne.greet();
teacherOne.greet();
studentOne.greet();

personOne.sleep();
teacherOne.sleep();
studentOne.sleep();