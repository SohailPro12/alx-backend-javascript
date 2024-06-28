### ES6 Classes and Object-Oriented Programming

ECMAScript 6 (ES6) introduced a new syntax for creating and working with classes in JavaScript, making it easier to work with object-oriented programming (OOP). Let's dive into defining classes, adding methods, extending classes, and other advanced features like static methods, metaprogramming, and symbols.

### 1. How to Define a Class

In ES6, a class is a blueprint for creating objects. You define a class using the `class` keyword.

```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Creating an instance of the class
const animal = new Animal('Charlie', 'Dog');
console.log(animal.speak()); // "Charlie makes a sound."
```

- **Constructor**: The `constructor` method is a special method for creating and initializing objects of the class.
- **Properties**: Inside the `constructor`, `this.name` and `this.species` are properties of the class instance.

### 2. How to Add Methods to a Class

Methods are functions that belong to the class and can be defined directly inside the class body.

```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  // Instance method
  speak() {
    return `${this.name} makes a sound.`;
  }

  // Another instance method
  describe() {
    return `${this.name} is a ${this.species}.`;
  }
}

const animal = new Animal('Charlie', 'Dog');
console.log(animal.speak()); // "Charlie makes a sound."
console.log(animal.describe()); // "Charlie is a Dog."
```

### 3. Why and How to Add a Static Method to a Class

Static methods are defined on the class itself rather than on instances of the class. They are called on the class directly, not on an instance.

#### Why Use Static Methods?

- Utility functions related to the class but not dependent on instance properties.
- Factory methods that create instances of the class.

#### How to Add Static Methods

Use the `static` keyword to define a static method.

```javascript
class MathUtils {
  // Static method
  static add(a, b) {
    return a + b;
  }

  static subtract(a, b) {
    return a - b;
  }
}

// Calling static methods
console.log(MathUtils.add(5, 3)); // 8
console.log(MathUtils.subtract(5, 3)); // 2
```

### 4. How to Extend a Class from Another

Inheritance allows one class to inherit properties and methods from another class using the `extends` keyword. The `super` keyword is used to call the parent class's constructor and methods.

```javascript
class Animal {
  constructor(name, species) {
    this.name = name;
    this.species = species;
  }

  speak() {
    return `${this.name} makes a sound.`;
  }
}

// Dog extends Animal
class Dog extends Animal {
  constructor(name, breed) {
    super(name, 'Dog'); // Call the parent constructor
    this.breed = breed;
  }

  // Overriding the speak method
  speak() {
    return `${this.name} barks.`;
  }

  fetch() {
    return `${this.name} is fetching a ball.`;
  }
}

const dog = new Dog('Buddy', 'Golden Retriever');
console.log(dog.speak()); // "Buddy barks."
console.log(dog.fetch()); // "Buddy is fetching a ball."
console.log(dog.species); // "Dog" - inherited from Animal
```

- **`extends`**: Establishes inheritance from another class.
- **`super`**: Calls the parent class's constructor or methods.

### 5. Metaprogramming and Symbols

Metaprogramming involves writing code that manipulates other code. ES6 provides several tools for metaprogramming, including symbols and proxies.

#### Symbols

Symbols are unique and immutable values used to create unique property keys.

```javascript
// Creating symbols
const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false

const obj = {
  [sym1]: 'Value associated with sym1',
  [sym2]: 'Value associated with sym2',
};

console.log(obj[sym1]); // "Value associated with sym1"
console.log(obj[sym2]); // "Value associated with sym2"

// Symbols are not enumerable
console.log(Object.keys(obj)); // []
console.log(Object.getOwnPropertySymbols(obj)); // [ Symbol(description), Symbol(description) ]
```

#### Use Cases for Symbols

- **Unique Property Keys**: Prevent property name collisions.
- **Meta Properties**: Add metadata to objects without affecting their normal behavior.
- **Well-Known Symbols**: Predefined symbols for language behaviors (e.g., `Symbol.iterator` for custom iteration).

### Proxies (Part of Metaprogramming)

Proxies allow you to intercept and redefine fundamental operations on objects (e.g., property lookup, assignment, function invocation).

```javascript
const target = {
  message1: "Hello",
  message2: "World"
};

const handler = {
  get: function(target, prop, receiver) {
    return prop in target ? target[prop] : `Property ${prop} does not exist.`;
  }
};

const proxy = new Proxy(target, handler);

console.log(proxy.message1); // "Hello"
console.log(proxy.message3); // "Property message3 does not exist."
```

- **`get`**: Trap for property access.
- **`set`**: Trap for property assignment.
- **Other traps**: `apply` for function calls, `construct` for `new` keyword, etc.

### Summary

- **Classes**: Define a blueprint for objects with properties and methods.
- **Methods**: Add functions to class instances.
- **Static Methods**: Define utility functions on the class itself.
- **Inheritance**: Extend a class to create a new class with additional or overridden behavior.
- **Metaprogramming**: Use symbols for unique keys and proxies to intercept and redefine object operations.

