Iterator Documentation
There are many additional built-in array methods, a complete list of which is on the Mozilla Developer Network.

The documentation for each method contains several sections:

A short definition
A block with the correct syntax for using the method
A list of parameters the method accepts or requires
The return value of the function
An extended description
Examples of the method's use
Polyfill, Specifications, Browser Compatibility
A list of iterator methods can be found here.

In the instructions below, there are some errors in the code. Use the documentation for a given method to determine the error or fill in a blank to make the code run correctly.

Review: Iterators
You have learned a number of useful methods in this lesson as well as how to use the JavaScript documentation from the Mozilla Developer Network to discover and understand additional methods. Let's review!

.forEach() is used to execute the same code on every element in an array but does not change the array and returns undefined.
.map() executes the same code on every element in an array and returns a new array with the updated elements.
.filter() checks every element in an array to see if it meets certain criteria and returns a new array with the elements that return truthy for the criteria.
All iterator methods can be written using arrow function syntax. In fact, given the succinctness and the implicit return of arrow function syntax, this is quickly becoming the preferred way to write these types of method calls.
You can visit the Mozilla Developer Network to learn more about iterator methods (and all other parts of JavaScript!).
Additional iterator methods such as .some(), .every(), .reduce() perform different functions.
