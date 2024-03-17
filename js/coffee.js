const output = document.querySelector('#output');

// Step 1: Define a JavaScript class called 'Coffee'
class Coffee {
  constructor(type, size) {
    this.type = type;
    this.size = size;
  }

  // Step 3: Add a method to the Coffee class called serveIt()
  serveIt() {
    console.log(`Serving ${this.size} ${this.type} coffee.`);
  }

  // Step 5: Define a subclass of the Coffee class
}

// Step 6: Create a new instance of the Latte object
class Latte extends Coffee {
  constructor(size) {
    super('Latte', size);
  }

  // Step 7: Add a method to the Latte subclass
  latteDesc() {
    return `A creamy ${this.size} ${this.type} coffee`;
  }
}

// Step 2: Instantiate a coffee based on the above constructor function
const myCoffee = new Coffee('Cappuccino', 'medium');

// Step 4: Call up the serveIt() method
myCoffee.serveIt();

// Step 8: Create yet another instance of Latte and call methods
const myLatte = new Latte('large');
console.log(myLatte.latteDesc());
myLatte.serveIt();

// Class Exercise: Create a new constructor for a different type of coffee
class Americano extends Coffee {
  constructor(size) {
    super('Americano', size);
  }
}

// Step 6: Create a new instance of the Americano object
const myAmericano = new Americano('small');

// Output all object member values
output.innerHTML = `
  <p>Type: ${myAmericano.type}</p>
  <p>Size: ${myAmericano.size}</p>
`;
