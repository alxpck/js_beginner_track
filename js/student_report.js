'use strict';

/*
We're keeping the data separate from the functionality.
So the students.js file is separate from this file.
And the students.js file is linked in index.html before this file
so that this file (student_report.js) has access to the data in the
students.js file.

This allows people to change the students.js file without worrying
that they will change the funcationality of the page. This is a
good best practice. It also means that if I have an API that just returns
JSON I know how to keep my functionality separate from the JSON and still have it all work.
*/

var message = '';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport(student) {
  var report = '<h2> Student: ' + student.name + '</h2>';
  report += '<p> Track: ' + student.track + '</p>';
  report += '<p> Points: ' + student.points + '</p>';
  report += '<p> Achievements: ' + student.achievements + '</p>';
  return report;
}

while (true) {
  search = prompt('Search student records: type a name [Jody] (or type "quit" to end');
  if (search === null || search.toLowerCase() === 'quit') {
    break;
  }
  for (var i = 0; i < students.length; i++) {
    student = students[i];
    if (student.name === search) {
      message = getStudentReport(student);
      print(message);
    }
  }
}



print(message)
