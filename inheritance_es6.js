// The Person class, our base class
class Person {
    // The person constructor
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greet() {
        console.log(`Greetings, I am ${this.name}.`);
    }

    sleep() {
        console.log(`${this.name} is going to sleep now.`);
    }
}

class Teacher extends Person {
    constructor(name, age, dept) {
        // step 1 is to call the parent constructor
        // available in new keyword: SUPER
        super(name, age);

        // then set your own properties unique to child class
        this.dept = dept;
    }

    // This will effectively overwrite the greet function you inherited from Person
    greet() {
        console.log(`Hello, I am ${this.name}. I work in the ${this.dept} department.`);
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);
        this.major = major;
    }

    greet() {
        console.log(`Hello, I am ${this.name}. My major is ${this.major}.`);
    }
}

let p1 = new Person("Lily Ann Pearl", 65);
let t1 = new Person("Ms. Hastings", 29, "ELA");
let s1 = new Student("Ian Gray", 19, "Finance");

p1.greet();
t1.greet();
s1.greet();

p1.sleep();
t1.sleep();
s1.sleep();