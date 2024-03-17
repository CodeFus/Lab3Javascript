const output = document.getElementById('output');

/* STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces), 
then open this page in a browser and enter 'person' in the console */
let person = {
    name: {
        firstName: "Priyansh",
        lastName: "Thakar"
    },
    age: 80,
    gender: "Male",
    address: {
        streetNo: 100,
        streetName: "Georgian Drive",
        city: "Barrie"
    },
    interests: ["swimming", "painting", "coding"],
    greetings: function () {
        alert(`Hello, I am ${this.name.firstName}.`);
    },
    bio: function () {
        return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
    }
};

/* STEP 3: Add a simple function (now called a method in this context) to the above object 
called "greeting" that creates an alert dialog, then type person.greeting() into the console */
person.greeting = function () {
    alert(`Hello, I am ${this.name.firstName}.`);
}
person.greeting();

/* STEP 4: Add a more complicated function to the object that describes the person, their age, gender, 
    and interests in a string that is output to an alert dialog */
person.describe = function () {
    alert(`${this.name.firstName} is ${this.age} years old. Gender: ${this.gender}. Interests: ${this.interests.join(', ')}`);
}
person.describe();

/* STEP 5a: Dot syntax allows you to access the parts of an object - the first part is the namespace, 
and subsequent parts are used to access things encapsulated within the object. Access the name, age, 
and gender of the person object, and put it inside the <p id="output"></p>. */
output.textContent = `Name: ${person.name.firstName} ${person.name.lastName}, Age: ${person.age}, Gender: ${person.gender}`;

/* STEP 6a: An object can even contain another object - update object person above to include a name object. 
Note how this breaks the greeting and bio functions - update the greeting function to use this sub-namespace */
person.greetings = function () {
    alert(`Hello, I am ${this.name.firstName}.`);
}
person.greetings(); // Output: Hello, I am Priyansh.

/* STEP 6b: Now fix the bio() function to use the sub-namespace of 'name' as well */
person.bio = function () {
    return `The interests of ${this.name.firstName}, of age ${this.age}, of gender ${this.gender} are ${this.interests}.`;
}
console.log(person.bio());

/* STEP 7: You can also use bracket notation, just like an array - 
objects that are built this way are often referred to as associative arrays */
output.textContent = person['name']['firstName']; // Output: Priyansh

/* STEP 8: You can also set members of an object - try changing the person's name, and age */
person.age = 16;
person['name']['firstName'] = "Robert";

/* STEP 9a: It it also possible to add new members to an object - include eye color - and type person.eyes in the console */
person.eyeColor = "green";
console.log(person.eyeColor); // Output: green

/* STEP 9b: Add a new function called 'goodbye' to the person object and try it by typing person.goodbye into the console */
person.goodbye = function () {
    alert(`This is ${this.name.firstName} signing off!`);
}
person.goodbye(); // Output: This is Robert signing off!

/* STEP 10: We can also dynamically set both names and values for objects… */
let key = "hairColor";
let value = "black";
person[key] = value;
console.log(person.hairColor); // Output: black

/* STEP 11a: 'this' is very useful - it allows us to refer to the object in question, specifically. 
This will become much clearer later in the course. Create two new objects, 
each with a name, and a function that outputs the name */
let person1 = {
    name: "P1",
    hello: function () {
        alert(`Hi, I am ${this.name}`);
    }
}

let person2 = {
    name: "P2",
    hello: function () {
        alert(`Hi, I am ${this.name}`);
    }
}

/* STEP 11b: Call up both person1.hello() and person2.hello() 
in the console to see how 'this' is specific to each object */
person1.hello(); // Output: Hi, I am P1
person2.hello(); // Output: Hi, I am P2
