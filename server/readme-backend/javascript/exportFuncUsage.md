Explain the differences between the various export syntaxes in JavaScript and when to use each:

# 1. Named Exports (Individual Exports):

```
export const funcName = () => {...};
export function funcName() {...};
```
These syntaxes allow you to export specific functions (or variables) from a module, giving them a clear name when imported. You can export multiple functions using this method:

```JavaScript
// module1.js
export const add = (x, y) => x + y;
export function subtract(x, y) {
  return x - y;
}
```
- Importing:

```JavaScript
// module2.js
import { add, subtract } from './module1.js';

const sum = add(5, 3);
const difference = subtract(10, 2);
```
- Use Cases:

    - When you want to export multiple functions or variables from a module and provide clear names for them during import.
    - When you need to control which parts of your module are accessible to other parts of your code.
# 2. Default Export (Single Export):
```
export default functionName() {...};
export default const variableName = ...;
```
This syntax allows you to export a single function (or variable) as the default export from a module. You can only have one default export per module.
```
JavaScript
// module3.js
export default function greet(name) {
  console.log(`Hello, ${name}!`);
}
```
- Importing:

```JavaScript
// module4.js
import sayHi from './module3.js'; // No curly braces needed

sayHi('Alice');
```
- Use Cases:

    - When you want to export a single function or variable from a module as the primary functionality to be imported.
    - When you want to use a simpler import syntax without curly braces.
# 3. export Keyword (Bare Exports - Not Recommended):
```
function funcName() {...}; export funcName;
const variableName = ...; export variableName;
```
This syntax (bare exports) is generally discouraged in modern JavaScript as it can be confusing to read and maintain. It's better to use `export const` or `export function` for clarity.

# In Summary:

- Use `named exports` for exporting multiple functions/variables with _clear names_.
- Use `default export` for exporting a _single function/variable as the primary functionality_.
- Avoid `bare exports` in favor of more explicit export syntax.