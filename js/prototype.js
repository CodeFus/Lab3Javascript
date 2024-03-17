const output = document.getElementById('output');

/* STEP 1: Create an object (looks a lot like declaring a variable, but with empty braces), 
then open this page in a browser and enter 'Coffee' in the console */
function Coffee(size, decaf, cream, sugar) {
    this.size = size;
    this.decaf = decaf;
    this.cream = cream;
    this.sugar = sugar;
}

Coffee.prototype.decaffeinated = function () {
    return this.decaf ? 'Decaffeinated' : 'Regular';
}

Coffee.prototype.description = function () {
    return `Size: ${this.size}, Decaf: ${this.decaffeinated()}, Cream: ${this.cream}, Sugar: ${this.sugar}`;
}

/* STEP 2: Instatiate a coffee based on the above constructor function */
let priyanshCoffee = new Coffee('medium', false, true, 2);

/* STEP 3: Refresh the page, and in the console, begin to call a method on 
priyanshCoffee by typing 'priyanshCoffee.' - look at all the members and methods */
console.log(priyanshCoffee.size); // Output: medium
console.log(priyanshCoffee.description()); // Output: Size: medium, Decaf: Regular, Cream: true, Sugar: 2

/* STEP 4: Enter into the console, priyanshCoffee.valueOf() and look at the result. 
priyanshCoffee doesn't have such a method, and neither does the constructor function, 'Coffee'. 
But the 'Object' object does - so through inheritance, priyanshCoffee has access to the method, valueOf(). */
console.log(priyanshCoffee.valueOf()); // Output: [object Object]

/* STEP 5a: Each object has a prototype member that isn't really directly accessible, 
but it can be referenced using the deprecated '__proto__' - 
using a double underscore on either side of the word 'proto'. Try it - priyanshCoffee.__proto__.__proto__ */
console.log(priyanshCoffee.__proto__.__proto__);

/* STEP 5b: The more modern way to do this is … Object.getPrototypeOf(priyanshCoffee) - try THIS in the console */
console.log(Object.getPrototypeOf(priyanshCoffee));

/* STEP 5c: EVERYTHING is an object in JavaScript. Try accessing the prototype property of Coffee 
(which even though it is a constructor function it is still an object) with Coffee.prototype in the console. 
Then try Object.Prototype */
console.log(Coffee.prototype);
console.log(Object.prototype);

/* STEP 6a: Let's circle back to create() - use priyanshCoffee to create a new object 
instance - one based on priyanshCoffee. */
let robertCoffee = Object.create(priyanshCoffee);

/* STEP 6b: See how this new object inherits from the prototype with robertCoffee.__proto__ in the console. */
console.log(robertCoffee.__proto__);

/* STEP 7a: Each constructor function includes a prototype property with a value 
equal to an object that contains a constructor property. 
Try it out by typing priyanshCoffee.constructor and robertCoffee.constructor */
console.log(priyanshCoffee.constructor);
console.log(robertCoffee.constructor);

/* STEP 7b: Since constructor is also a function, you can use it to create 
a new object instance - try it! */
let meganCoffee = priyanshCoffee.constructor('large', true, false, 1);

/* STEP 7c: Attempt via the console to access the new object's properties - meganCoffee.size, meganCoffee.isDecaf, etc. */
console.log(meganCoffee.size); // Output: large
console.log(meganCoffee.decaffeinated()); // Output: Decaffeinated

/* STEP 7d: Now see if the new object can access the description() method… */
console.log(meganCoffee.description()); // Output: Size: large, Decaf: Decaffeinated, Cream: false, Sugar: 1

/* STEP 7e: The constructor has other features - try using it to discover 
the name of an instance's constructor by typing meganCoffee.constructor.name into the console. */
console.log(meganCoffee.constructor.name); // Output: Coffee

/* STEP 8a: We can modify the prototype property of a constructor function - let's add another method to Coffee */
Coffee.prototype.extra = function () {
    return 'Extra feature added';
}

/* STEP 8b: Now let's call up this method on one or more of our Coffee 
instances from the console (priyanshCoffee, robertCoffee, or meganCoffee). */
console.log(priyanshCoffee.extra()); // Output: Extra feature added
console.log(robertCoffee.extra()); // Output: Extra feature added
console.log(meganCoffee.extra()); // Output: Extra feature added

// Next, open up coffee.html and we will put prototypical inheritance to work.
