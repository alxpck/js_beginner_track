// for in loops are only available to objects

object = {}

// basic for in loop format
for (var key in object) {
  // do something
};

// object
var student = {
  name: "Dave",
  grades: [80, 85, 90, 95]
};

// for in loop
for (var key in student) {
  // do something
  console.log(key);
  // this will log "name" and then "grades"
}

// for, var, in -- are all keywords that have to stay the same everytime you write a for in loop.

// key -- can be any variable name, it could be "i", "x" or "each"

// student/object -- is the name of the object you want to perform the loop on

// You can't use dot notation when using a for-in loop

// so to access the values of the keys you need to write the loop like this:

for (var key in student) {
  console.log(student[key]); // note no '' quotes around key like in python
}
