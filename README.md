## 1. What ES6 Is

**ES6**, also known as ECMAScript 2015, is the 6th edition of the ECMAScript language specification. It introduced significant enhancements to JavaScript, making it more powerful and easier to write.

**Key Goals of ES6:**

- Improve language usability and readability.
- Add new features for writing complex applications.
- Enable more sophisticated and scalable JavaScript development.

---

## 2. New Features Introduced in ES6

Here are some of the key features introduced in ES6:

### a. Block-Scoped Variables

- **let**: Variable with block scope.
- **const**: Block-scoped constant.

### b. Arrow Functions

- Shorter syntax for writing functions.
- Lexically binds `this` (doesn't create its own `this` context).

### c. Template Literals

- Multi-line strings and string interpolation using backticks (`` ` ``).

### d. Destructuring

- Extracting values from arrays or properties from objects into distinct variables.

### e. Default Parameters

- Set default values for function parameters.

### f. Rest and Spread Operators

- **Rest (`...`)**: Combine multiple elements into an array.
- **Spread (`...`)**: Expand an array into individual elements.

### g. Classes

- Simplified syntax for creating objects and inheritance.

### h. Modules

- Import and export modules to reuse code.

### i. Enhanced Object Literals

- Shorthand for defining methods and properties.

### j. Promises

- Handle asynchronous operations more effectively.

### k. Iterators and Generators

- Custom iteration protocols for objects and functions to control iteration.

### l. for-of Loop

- Iterating over arrays and other iterable objects.

---

## 3. The Difference Between a Constant and a Variable

### Variable (`let`)

- **Declaration**: `let variableName = value;`
- **Scope**: Block-scoped.
- **Reassignment**: Can be reassigned.
- **Use Case**: When the value is expected to change.

```javascript
let count = 0;
count = 5; // Allowed
```

### Constant (`const`)

- **Declaration**: `const constantName = value;`
- **Scope**: Block-scoped.
- **Reassignment**: Cannot be reassigned.
- **Use Case**: When the value should not change.

```javascript
const pi = 3.14;
// pi = 3.14159; // Not allowed
```

---

## 4. Block-Scoped Variables

- **Block Scope**: Variables declared inside a block (`{}`) are only accessible within that block.
- **Keywords**: `let` and `const`.

### Example:

```javascript
{
  let x = 10;
  const y = 20;
  console.log(x, y); // 10, 20
}
// console.log(x, y); // Error: x and y are not defined
```

---

## 5. Arrow Functions and Function Parameters Default to Them

### Arrow Functions

- **Syntax**: `const functionName = (parameters) => { body }`
- **Shorter Syntax**: Single-line body and single parameter don't need curly braces or parentheses.

### Example:

```javascript
const add = (a, b) => a + b;
console.log(add(5, 3)); // 8

const greet = (name) => `Hello, ${name}`;
console.log(greet("Alice")); // Hello, Alice
```

### Default Parameters

- Provide default values for function parameters if not supplied.

### Example:

```javascript
const greet = (name = "World") => `Hello, ${name}!`;
console.log(greet()); // Hello, World!
console.log(greet("Alice")); // Hello, Alice!
```

---

## 6. Rest and Spread Function Parameters

### Rest Parameters

- Combine multiple arguments into an array.
- **Syntax**: `functionName(...restParameter)`

### Example:

```javascript
const sum = (...numbers) => {
  return numbers.reduce((acc, num) => acc + num, 0);
};
console.log(sum(1, 2, 3, 4)); // 10
```

### Spread Operator

- Expand an array into individual elements.
- **Syntax**: `...spreadVariable`

### Example:

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = [...arr1, ...arr2];
console.log(combined); // [1, 2, 3, 4, 5, 6]

const maxVal = Math.max(...arr1);
console.log(maxVal); // 3
```

---

## 7. String Templating in ES6

- Use backticks (`` ` ``) for strings.
- Embed expressions with `${expression}`.

### Example:

```javascript
const name = "Alice";
const age = 25;
const message = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(message); // Hello, my name is Alice and I am 25 years old.
```

### Multi-line Strings:

```javascript
const multiLine = `This is a string
that spans across
multiple lines.`;
console.log(multiLine);
```

---

## 8. Object Creation and Their Properties in ES6

### Enhanced Object Literals

- Shorthand for property names and methods.
- Dynamic property names.

### Example:

```javascript
const name = "Alice";
const age = 25;

const person = {
  name,
  age,
  greet() {
    return `Hello, my name is ${this.name}.`;
  },
  ["age_" + age]: true, // Dynamic property name
};

console.log(person.greet()); // Hello, my name is Alice.
console.log(person.age_25); // true
```

### Object Destructuring

- Extract properties from objects into variables.

### Example:

```javascript
const user = {
  id: 1,
  username: "johndoe",
  email: "john@example.com",
};

const { username, email } = user;
console.log(username); // johndoe
console.log(email); // john@example.com
```

---

## 9. Iterators and for-of Loops

### Iterators

- Objects implementing the `Iterator` protocol can be iterated.
- An object needs a `next()` method returning `{ value, done }`.

### Example:

```javascript
const iterable = {
  [Symbol.iterator]() {
    let step = 0;
    return {
      next() {
        step++;
        if (step <= 3) {
          return { value: step, done: false };
        } else {
          return { done: true };
        }
      },
    };
  },
};

for (const value of iterable) {
  console.log(value); // 1, 2, 3
}
```

### for-of Loop

- Iterates over iterable objects like arrays, strings, and sets.
- Accesses each element directly.

### Example:

```javascript
const array = [1, 2, 3];
for (const num of array) {
  console.log(num); // 1, 2, 3
}

const str = "hello";
for (const char of str) {
  console.log(char); // h, e, l, l, o
}
```

---
