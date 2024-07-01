### Advanced JavaScript Concepts

## ES6 data manipulation

### 1. `map`, `filter`, and `reduce` on Arrays

These methods are fundamental for array manipulation in JavaScript, offering powerful ways to transform, filter, and reduce data.

#### `map`

The `map` method creates a new array populated with the results of calling a provided function on every element in the calling array.

```javascript
// Example: Doubling each number in an array
const numbers = [1, 2, 3, 4];
const doubled = numbers.map((num) => num * 2);
console.log(doubled); // [2, 4, 6, 8]
```

- **Use Case**: Transform each element in an array (e.g., convert an array of strings to an array of objects).

#### `filter`

The `filter` method creates a new array with all elements that pass the test implemented by the provided function.

```javascript
// Example: Filtering even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter((num) => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

- **Use Case**: Remove unwanted elements based on conditions (e.g., filter out negative numbers from an array).

#### `reduce`

The `reduce` method executes a reducer function (that you provide) on each element of the array, resulting in a single output value.

```javascript
// Example: Summing up all numbers in an array
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  0
);
console.log(sum); // 10
```

- **Use Case**: Accumulate values into a single result (e.g., sum of all numbers, product of all numbers, constructing an object from an array).

---

### 2. Typed Arrays

Typed Arrays provide a way to handle binary data directly in JavaScript. They allow you to work with raw memory buffers in a more efficient and structured way.

#### Creating and Using Typed Arrays

```javascript
// Example: Creating a typed array of 32-bit integers
const buffer = new ArrayBuffer(16); // Create a buffer of 16 bytes
const int32View = new Int32Array(buffer); // Create a 32-bit integer array view on the buffer

// Setting values
int32View[0] = 42;
int32View[1] = 84;
console.log(int32View); // Int32Array(4) [42, 84, 0, 0]
```

- **Typed Array Types**: Examples include `Int8Array`, `Uint8Array`, `Float32Array`, etc., each for different types of numeric data.

- **Use Case**: Handling binary data directly, such as reading files, working with image data, or interfacing with low-level APIs.

---

### 3. The Set, Map, and Weak Link Data Structures

#### `Set`

A `Set` is a collection of unique values. Each value can only occur once in a `Set`.

```javascript
// Example: Using a Set to store unique values
const uniqueNumbers = new Set([1, 2, 2, 3, 4, 4, 5]);
console.log(uniqueNumbers); // Set { 1, 2, 3, 4, 5 }

// Adding and checking values
uniqueNumbers.add(6);
console.log(uniqueNumbers.has(4)); // true
uniqueNumbers.delete(3);
console.log(uniqueNumbers); // Set { 1, 2, 4, 5, 6 }
```

- **Use Case**: Storing a collection of unique values, like eliminating duplicates from an array.

#### `Map`

A `Map` is a collection of key-value pairs where keys can be of any type. Unlike objects, maps preserve the order of insertion and allow keys of any type.

```javascript
// Example: Using a Map to store key-value pairs
const contacts = new Map();
contacts.set("Alice", "555-1234");
contacts.set("Bob", "555-5678");

console.log(contacts.get("Alice")); // '555-1234'
console.log(contacts.has("Bob")); // true
contacts.delete("Alice");
console.log(contacts); // Map { 'Bob' => '555-5678' }
```

- **Use Case**: Storing and retrieving key-value pairs with non-string keys or maintaining the insertion order.

#### `WeakSet`

A `WeakSet` is a collection of objects, where the references to the objects are held weakly. This means that if no other reference to an object exists, the object can be garbage-collected.

```javascript
// Example: Using a WeakSet
let obj1 = { name: "Object 1" };
let obj2 = { name: "Object 2" };

const weakSet = new WeakSet([obj1, obj2]);

console.log(weakSet.has(obj1)); // true

obj1 = null; // Now obj1 is eligible for garbage collection
console.log(weakSet.has(obj1)); // false (since obj1 is no longer referenced)
```

- **Use Case**: Tracking objects without preventing their garbage collection, useful for managing object lifecycles in large applications.

#### `WeakMap`

A `WeakMap` is similar to a `Map` but its keys must be objects, and the references to the keys are held weakly.

```javascript
// Example: Using a WeakMap
let key1 = { name: "key1" };
let key2 = { name: "key2" };

const weakMap = new WeakMap();
weakMap.set(key1, "value1");
weakMap.set(key2, "value2");

console.log(weakMap.get(key1)); // 'value1'

key1 = null; // key1 is now eligible for garbage collection
console.log(weakMap.has(key1)); // false (since key1 is no longer referenced)
```

- **Use Case**: Associating metadata with objects without preventing their garbage collection, commonly used for implementing private data for objects.

---

### Summary

- **`map`, `filter`, and `reduce`**: Essential for transforming, filtering, and reducing arrays.
- **Typed Arrays**: Efficiently handle raw binary data with typed views.
- **`Set`, `Map`, `WeakSet`, and `WeakMap`**: Provide advanced data structures for managing unique values, key-value pairs, and weakly referenced objects.
