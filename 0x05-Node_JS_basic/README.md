### 1. **Run JavaScript using NodeJS**

- **Objective:** Understand how to execute JavaScript files using Node.js.
- **Concept:** Node.js is a runtime that allows you to run JavaScript on the server (outside the browser).
- **Example:** Create a simple JavaScript file (`app.js`) and run it with Node.js.

```javascript
// app.js
console.log("Hello, Node.js!");
```

Run the file using:

```bash
node app.js
```

### 2. **Use NodeJS Modules**

- **Objective:** Learn how to import and use Node.js built-in modules and third-party packages.
- **Concept:** Node.js comes with a set of built-in modules like `fs` (file system), `http`, and `path`. You can also install third-party modules using npm (Node Package Manager).
- **Example:**

```javascript
// Using the built-in 'path' module
const path = require("path");

const filePath = path.join(__dirname, "file.txt");
console.log(filePath);
```

### 3. **Use a Specific Node JS Module to Read Files**

- **Objective:** Read files from the file system using the `fs` module.
- **Concept:** The `fs` module provides methods to interact with the file system, including reading files synchronously and asynchronously.
- **Example:**

```javascript
const fs = require("fs");

// Reading file asynchronously
fs.readFile("example.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});
```

### 4. **Use Process to Access Command Line Arguments and the Environment**

- **Objective:** Access command-line arguments and environment variables.
- **Concept:** `process.argv` provides access to command-line arguments, and `process.env` provides access to environment variables.
- **Example:**

```javascript
// Access command-line arguments
console.log(process.argv);

// Access environment variables
console.log(process.env.MY_ENV_VARIABLE);
```

To run with arguments:

```bash
node app.js arg1 arg2
```

To set an environment variable and run:

```bash
MY_ENV_VARIABLE=Hello node app.js
```

### 5. **Create a Small HTTP Server Using Node JS**

- **Objective:** Build a basic HTTP server using the `http` module.
- **Concept:** The `http` module allows you to create an HTTP server that listens to client requests.
- **Example:**

```javascript
const http = require("http");

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.end("Hello World\n");
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
```

### 6. **Create a Small HTTP Server Using Express JS**

- **Objective:** Build an HTTP server using the Express framework.
- **Concept:** Express is a minimalist web framework for Node.js that simplifies routing and middleware management.
- **Example:**

```javascript
const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello Express");
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
```

### 7. **Create Advanced Routes with Express JS**

- **Objective:** Learn how to handle different HTTP methods and create dynamic routes.
- **Concept:** Express allows you to define routes for different HTTP methods (GET, POST, etc.) and set up dynamic routing with route parameters.
- **Example:**

```javascript
app.get("/user/:id", (req, res) => {
  res.send(`User ID: ${req.params.id}`);
});

app.post("/user", (req, res) => {
  res.send("POST request to /user");
});
```

### 8. **Use ES6 with Node JS with Babel-node**

- **Objective:** Write modern JavaScript (ES6+) and use Babel to transpile it for Node.js.
- **Concept:** Babel is a toolchain that allows you to use ES6+ features by transpiling your code into a version of JavaScript that Node.js can understand.
- **Example:**

  1. Install Babel:

  ```bash
  npm install --save-dev @babel/core @babel/cli @babel/preset-env
  ```

  2. Create a `.babelrc` file:

  ```json
  {
    "presets": ["@babel/preset-env"]
  }
  ```

  3. Write ES6+ code:

  ```javascript
  const greet = (name) => {
    console.log(`Hello, ${name}!`);
  };

  greet("ES6");
  ```

  4. Run with Babel:

  ```bash
  npx babel-node app.js
  ```

### 9. **Use Nodemon to Develop Faster**

- **Objective:** Automatically restart your Node.js application when files change during development.
- **Concept:** Nodemon is a tool that monitors your source code and automatically restarts the server when it detects file changes.
- **Example:**
  1. Install Nodemon:
  ```bash
  npm install -g nodemon
  ```
  2. Run your app with Nodemon:
  ```bash
  nodemon app.js
  ```

### Summary

- **Node.js Basics:** Learn how to run JavaScript, work with modules, and handle file system operations.
- **HTTP Servers:** Create servers using both raw Node.js and Express.js.
- **Modern JavaScript:** Use ES6+ features in Node.js with Babel.
- **Efficient Development:** Use tools like Nodemon for faster development cycles.
