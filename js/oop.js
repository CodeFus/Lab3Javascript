const output = document.getElementById('output');
const output2 = document.getElementById('output2');

/* STEP 1a: Create a new object using a regular function */
function createNewPerson(firstName, lastName, age, interests) {
    let obj = {};
    obj.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    obj.age = age;
    obj.interests = interests;
    obj.greetings = function () {
        output.textContent = `Hello, I am ${this.name.firstName}.`;
    }
    return obj;
}

/* STEP 1b: Use the console to create a new person, and then invoke the function represented by .greeting() */
let person1 = createNewPerson("P1", "LP1", 20, ["swimming", "painting"]);
let person2 = createNewPerson("P2", "LP2", 60, ["coding", "painting"]);

person1.greetings(); // Output: Hello, I am P1.

/* STEP 2a: In order to be a bit more concise, JavaScript allows us to use constructor functions - 
rewrite the above function, without returning anything. Capitalize the name of the function. */
function Person(firstName, lastName, age, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.interests = interests;
    this.greetings = function () {
        output.textContent = `Hello, I am ${this.name.firstName}.`;
    }
}

/* STEP 2b: Use the console to create a couple of different people, using the 'new' keyword, 
and again invoking the .greeting() method for each person */
let person3 = new Person("P3", "LP3", 50, ["running", "sleeping"]);
person3.greetings(); // Output: Hello, I am P3.

/* STEP 3a: Build the complete constructor for the object Person (comment out the above function first).
 Include name (first and last), age, gender, interests, bio (function), and greeting (function). */
function Person(firstName, lastName, age, gender, interests) {
    this.name = {
        "firstName": firstName,
        "lastName": lastName
    };
    this.age = age;
    this.gender = gender;
    this.interests = interests;
    this.bio = function () {
        return `${this.name.firstName} ${this.name.lastName} is ${this.age} years old. They like ${this.interests.join(", ")}.`;
    };
    this.greetings = function () {
        output2.textContent = `Hello, I am ${this.name.firstName}.`;
    }
}

/* STEP 3b: Instantiate a new Person based on the above constructor */
let person4 = new Person("P4", "LP4", 40, "Male", ["reading", "hiking"]);

/* STEP 3c: Attempt to access the various properties of person1 using the console. */
console.log(person4.age); // Output: 40
console.log(person4.interests[1]); // Output: hiking
console.log(person4.bio()); // Output: P4 LP4 is 40 years old. They like reading, hiking.

/* STEP 4a: Alternatively, you can use the Object() constructor to create an object. eg. car*/
let car = new Object();

/* STEP 4b: Once 'car' is created, add various properties and methods… */
car.brand = "honda";
car.model = "civic";
car.fun = function () {
    console.log(this.brand);
}

/* STEP 4c: Change some of the properties of 'car' in the console, then invoke the car.fun() function */
car.brand = "toyota";
car.fun(); // Output: toyota

/* STEP 5a: Yet another approach is to use the create() method. 
Let's see how the above car object can be used to create another object */
let anotherCar = Object.create(car);
anotherCar.brand = "nissan";

/* STEP 5b: Output to the paragraph anotherCar.brand - you will see that it has retained the properties of the original object. */
output2.textContent = `Brand of anotherCar: ${anotherCar.brand}`; // Output: Brand of anotherCar: nissan
