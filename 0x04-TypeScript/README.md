### 1. Basic Types in TypeScript

TypeScript extends JavaScript by adding types. This helps catch errors early and provides better tooling support.

#### Common Basic Types

1. **`number`**: Represents all numeric values, both integers and floating-point numbers.
2. **`string`**: Represents text data.
3. **`boolean`**: Represents `true` or `false`.
4. **`array`**: Represents a collection of elements of a specific type.
5. **`tuple`**: Represents an array with a fixed number of elements, where each element may have a different type.
6. **`enum`**: Represents a collection of related values that can be numbers or strings.
7. **`any`**: A type that can be anything. It disables type checking.
8. **`void`**: Represents the absence of any type, often used in functions that don't return a value.
9. **`null` and `undefined`**: Represent the absence of a value.
10. **`object`**: Represents any non-primitive type.
11. **`unknown`**: A type-safe counterpart to `any`.

#### Examples

```typescript
let isDone: boolean = false;
let age: number = 30;
let name: string = "Alice";

let list: number[] = [1, 2, 3];
let tuple: [string, number] = ["hello", 10];

enum Color { Red, Green, Blue }
let c: Color = Color.Green;

let notSure: any = 4;
notSure = "maybe a string";
notSure = false;

function warnUser(): void {
    console.log("This is a warning message");
}

let unusable: void = undefined;

let u: undefined = undefined;
let n: null = null;

let person: object = { name: "Alice", age: 30 };

let uncertain: unknown = 4;
uncertain = "maybe a string again";
```

### 2. Interfaces, Classes, and Functions

#### Interfaces

Interfaces define the structure of an object. They are used to enforce type checking for objects, function parameters, etc.

```typescript
interface Person {
  name: string;
  age: number;
  greet(): string; // Method signature
}

let user: Person = {
  name: "John",
  age: 25,
  greet: () => "Hello"
};
```

#### Classes

Classes provide a way to create objects with properties and methods. They support inheritance and encapsulation.

```typescript
class Animal {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  move(distanceInMeters: number = 0): void {
    console.log(`${this.name} moved ${distanceInMeters} meters.`);
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("Woof! Woof!");
  }
}

let dog = new Dog("Rex");
dog.bark(); // "Woof! Woof!"
dog.move(10); // "Rex moved 10 meters."
```

#### Functions

TypeScript allows you to define the types of function parameters and return values.

```typescript
function add(x: number, y: number): number {
  return x + y;
}

let myAdd: (x: number, y: number) => number = function (x, y) {
  return x + y;
};
```

### 3. Working with the DOM and TypeScript

TypeScript provides strong typing support when working with the DOM, which helps prevent common errors.

```typescript
// Get an HTML element by its ID
let button = document.getElementById("myButton") as HTMLButtonElement;

// Add a click event listener with type-safe access to the event object
button.addEventListener("click", (event: MouseEvent) => {
  console.log("Button clicked!");
});
```

### 4. Generic Types

Generics allow you to define functions, classes, and interfaces that work with a variety of types while maintaining type safety.

#### Functions with Generics

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("Hello");
let output2 = identity<number>(42);
```

#### Classes with Generics

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = (x, y) => x + y;
```

### 5. Namespaces

Namespaces organize code into a logical structure, making it easier to manage large codebases. They encapsulate related code into a single block, reducing the risk of name collisions.

```typescript
namespace Shapes {
  export class Circle {
    constructor(public radius: number) {}
  }

  export class Square {
    constructor(public sideLength: number) {}
  }
}

let circle = new Shapes.Circle(10);
let square = new Shapes.Square(5);
```

### 6. Merging Declarations

TypeScript allows you to merge multiple declarations of the same entity. This can be useful for extending existing types or modules.

#### Merging Interfaces

```typescript
interface Box {
  height: number;
  width: number;
}

interface Box {
  scale: number;
}

let box: Box = { height: 5, width: 6, scale: 10 };
```

### 7. Ambient Namespaces

Ambient namespaces allow you to describe the shape of code written in other (non-TypeScript) JavaScript libraries.

```typescript
declare namespace MyLibrary {
  function doSomething(): void;
  let version: string;
}

// Usage
MyLibrary.doSomething();
console.log(MyLibrary.version);
```

### 8. Basic Nominal Typing

Nominal typing (or nominal subtyping) means that type compatibility is based on the explicit declaration of types rather than their structure. TypeScript is primarily structurally typed, but you can achieve nominal typing using unique symbols or branded types.

#### Branded Types

```typescript
type USD = number & { _type: 'USD' };
type EUR = number & { _type: 'EUR' };

function makeUSD(amount: number): USD {
  return amount as USD;
}

function makeEUR(amount: number): EUR {
  return amount as EUR;
}

let priceUSD: USD = makeUSD(10);
let priceEUR: EUR = makeEUR(20);

// These will cause errors due to nominal typing
// priceUSD = priceEUR;
// priceEUR = priceUSD;
```

In this example, although `USD` and `EUR` are structurally similar, they are treated as distinct types.

### Summary

- **Basic Types**: Enhance JavaScript with type checking for common data types.
- **Interfaces and Classes**: Define object structures and create reusable blueprints with encapsulated logic.
- **DOM Manipulation**: Type-safe operations on HTML elements.
- **Generics**: Flexible functions and classes that operate on various types.
- **Namespaces**: Organize code logically and prevent naming conflicts.
- **Merging Declarations**: Extend and combine types or modules.
- **Ambient Namespaces**: Integrate and describe external libraries in TypeScript.
- **Nominal Typing**: Ensure type safety beyond structural compatibility using unique symbols.