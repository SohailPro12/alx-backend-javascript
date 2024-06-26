### 1. Promises

#### What are Promises?

**Promises** in JavaScript are objects representing the eventual completion or failure of an asynchronous operation and its resulting value. They provide a cleaner alternative to callback-based code for handling asynchronous operations.

#### How and Why to Use Promises?

- **How**: Create a promise using `new Promise(executor)`, where `executor` is a function with `resolve` and `reject` parameters.

  ```javascript
  const myPromise = new Promise((resolve, reject) => {
    // Asynchronous operation, e.g., fetching data
    setTimeout(() => {
      const data = { message: "Promise resolved!" };
      resolve(data); // Success
      // reject(new Error('Promise rejected!')); // Error
    }, 1000);
  });
  ```

- **Why**: Promises simplify asynchronous programming by providing a consistent way to handle success (`resolve`) and failure (`reject`) outcomes.

### 2. `then`, `catch`, and `finally` Methods

#### `then` Method

- Used to handle the resolved value of a promise.

```javascript
myPromise.then((result) => {
  console.log(result.message); // "Promise resolved!"
});
```

#### `catch` Method

- Used to handle errors (`reject`).

```javascript
myPromise.catch((error) => {
  console.error(error.message); // "Promise rejected!"
});
```

#### `finally` Method

- Executes code after `then` or `catch`, regardless of the promise's state.

```javascript
myPromise.finally(() => {
  console.log("Promise finally executed.");
});
```

### 3. `every` Method of the Promise Object

- **`Promise.all`**: Resolves when all promises in an iterable resolve, or rejects with the reason of the first promise that rejects.

```javascript
const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // [3, 42, "foo"]
});
```

### 4. `throw` / `try` / `catch`

- **Throw**: Signals an error.
- **Try**: Encloses code to test for errors.
- **Catch**: Handles errors thrown in `try` block.

```javascript
try {
  throw new Error("Something went wrong");
} catch (error) {
  console.error(error.message); // "Something went wrong"
}
```

### 5. `await` Operator

- **Await**: Pauses execution until promise is settled.
- Used inside async functions.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
}

fetchData();
```

### 6. How to Use an Async Function

- **Async Function**: Returns a Promise.
- **Example**: Fetch data asynchronously.

```javascript
async function fetchData() {
  try {
    const response = await fetch("https://api.example.com/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

fetchData()
  .then((data) => console.log(data))
  .catch((error) => console.error("Unhandled error:", error));
```

Async functions simplify asynchronous code by allowing you to write asynchronous code that looks like synchronous code, making it easier to understand and maintain.

These concepts form the core of modern asynchronous JavaScript programming, enabling developers to handle complex operations more effectively.
