'use strict';

var person = {
  name: 'Sarah',
  country: 'US',
  age: 35,
  treehouseStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

// why isn't the var keyword required here? Because it's being created and treated as a global variable. Which is probably going to be a problem. If you use 'strict' mode it will throw an error when you try this.
for (prop in person) {
  console.log(prop);
}


for (var prop in person) {
  console.log(prop, ':', person[prop]); // you can log something else by adding a string to the end of the console log statement. Spaces are added by default
  // reminder: you can't use dot notion with for in loops
}
