class Person {
    constructor(name = 'Anonymous', age = 0) {                       //USE = TO SET DEFAULTS
        this.name = name;
        this.age = age;
    }
    getGreeting() {
        return `Hi, I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is ${this.age} years old.`;
    }
}

class Student extends Person {
    constructor(name, age, major) {
        super(name, age);                   //CALLS THE PARENT CLASS
        this.major = major;
    }
    hasMajor() {
        return !!this.major;                //TURNS STRING INTO BOOLEAN - IF STRING EXISTS, RETURNS TRUE, IF IT DOESN'T, RETURNS FALSE
    }
    getDescription() {
        let description = super.getDescription();
        
        if (this.hasMajor()) {
            description += ` Their major is ${this.major}.`
        }
        
        return description;
    }
}

class Traveler extends Person {
    constructor(name, age, homeLocation) {
        super(name, age);
        this.homeLocation = homeLocation;
    }
    getGreeting() {
        let greeting = super.getGreeting();
        
        if (this.homeLocation) {
            greeting += ` I'm visiting from ${this.homeLocation}.`;
        }
        
        return greeting;
    }
}

const me = new Traveler('Andres Rodriguez', 30, 'Miami');
console.log(me.getGreeting());

const other = new Traveler();
console.log(other.getGreeting());