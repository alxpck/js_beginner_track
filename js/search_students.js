'use strict';

// INSTRUCTIONS
/* Use the prompt method to get a student name from the user then return/print the matching student to the document. If match, print that one student's data. Keep looping until they say quit */

console.log(students);

function print(message) {
  var outerDiv = document.getElementById('output');
  outerDiv.innerHTML = message;
}

function capitalize(string) {
  var string = string[0].toUpperCase() + string.slice(1);
  return string;
}

var message = '';
do {
  // prompt the user to enter a student's name
  var response = prompt('Search student records: type a name, like "Alex", or type "quit" to end)');
  // lowercase the response for easier matching
  if (response !== null) {
    response = response.toLowerCase();
  }
  console.log(response);

  for (var i = 0; i < students.length; i++) {
    var student = students[i];
    for (var prop in student) {
      if (student.name.toLowerCase() === response) {
        console.log('We have a match');
        if (prop === 'name') {
          message += '<h2>' + capitalize(prop) + ': ' + student[prop] + '</h2>';
        } else {
          message += '<p>' + capitalize(prop) + ': ' + student[prop] + '</p>';
        }
        print(message);
      }
    }
  }
} while (response !== 'quit'); // keep looping until they type quit
