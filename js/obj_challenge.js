'use strict';

var students = [
  {name: 'Alex', track: 'JavaScript', achievements: 42, points: 880},
  {name: 'Sarah', track: 'PHP', achievements: 12, points: 5},
  {name: 'Leo', track: 'Python', achievements: 56, points: 44},
  {name: 'Robert', track: 'Ruby', achievements: 78, points: 8860},
  {name: 'Monty', track: 'Python', achievements: 5000, points: 180}
];

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}


function capitalize(string) {
  /*
  Create a function that capitalizes a word. Use this to capitalize my
  property names in the object when displaying them to the browser
  */
  var string = string[0].toUpperCase() + string.slice(1);
  return string;
}

// initialize an empty string
var message = '';
// loop through each item in the array
for (var i = 0; i < students.length; i++) {
  // assign an easy to remember name to the object at the array index
  var object = students[i];
  // loop through the properties in the object
  for (var prop in object) {
    // check to see if the property in question is the name value and  if so style differently
    if (prop === 'name') {
      message += '<h2>' + capitalize(prop) + ": " + object[prop] + '</h2>';
    } else {
      message += '<p>' + capitalize(prop) + ": " + object[prop] + '</p>';
    }
  }
}

print(message)
