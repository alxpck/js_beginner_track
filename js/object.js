var person = {
  name: 'Sarah',
  country: 'US',
  age: 35,
  treehouseStudent: true,
  skills: ['JavaScript', 'HTML', 'CSS']
};

// get the value of the object's name property
console.log(person['name']);

// get the value of the object's name property using dot notation
console.log(person.name);

// you can also set an object's property using dot notation
person.name = 'Alex';

// you can create new properties using dot notation
person.favoriteMovie = 'Brazil';

console.log(person)

// One way to think of objects is as a package for a collection of variables. Think of the properties as a collection of variables about related data. It keeps related data grouped into one easily accessed unit and simplies handling data. You can pass an object and all of it's properties into a function or return all of the data out of a function.

function print(message) {
  var div = document.getElementById('output');
  div.innerHTML = message;
}

var message = '<p>Hello. My name is ' + person.name + '</p>';
message += '<p>I live in the ' + person.country + '</p>';
person.name = 'Big Jim';
message += '<p>But I wish my name was ' + person.name + '</p>';
person.age += 1;
message += '<p>My age is now ' + person.age + '</p>';
message += '<p>I have ' + person.skills.length + ' skills: ';
message += person.skills.join(', ') + '</p>';
print(message);
