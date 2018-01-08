// Javascript is an object-oriented language.
// An object is something that has properties + methods
// Properties = Like a variable that belongs to the object
// Methods = Something the object can do or can be done to the object

// Most everything in Javascript is an object or can be treated like an object: functions, arrays, strings, numbers and booleans

// an array is an object
[1, 2, 3]

// it has a property called length
[1, 2, 3].length

// it has methods like push
[1, 2, 3].push(4)

// Using objects to store and access data
// Javascript objects let you store data in key-value pairs (or property-value pairs)

// Create an object literal
var student = {
  name: "Dave", // the key isn't in quotes.
  grades: [80, 90, 95, 85] // the value can be any other javascript data type
}; // separate all but the last key-value pairs with a comma

// Spaces and newlines are optional (this is the same as the above)
var student = {name:"Dave",grades:[80,90,95,85]};
// but generally each key-value pair has it's own line for readability
