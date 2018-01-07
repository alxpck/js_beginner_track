// quiz program
// ask a series of questions

// display the number correct and number wrong

// use a two dimensional array
// [question, answer]

// use a loop
// prompt to ask a question

// use a conditional statement to evaluate if the answer is correct

var questions = [
  ['what\'s your name?', 'alex'],
  ['what is your quest?', 'to find the holy grail'],
  ['what\'s your favorite color?', 'blue']
];

var correctAnswers = [0];
var wrongAnswers = [0];

function print (message) {
  document.write(message);
}

function askQuestions (questions) {
  for (var i = 0; i < questions.length; i += 1) {
    answer = window.prompt(questions[i][0]);
    console.log(answer);
    console.log(answer.toLowerCase());

    if (answer.toLowerCase() === questions[i][1]) {
      correctAnswers[0] += 1;
      correctAnswers.push(answer);
      console.log(correctAnswers);
    } else {
      wrongAnswers[0] += 1;
      wrongAnswers.push(answer);
      console.log(wrongAnswers);
    }
  }
}

function makeList (list) {
  if (list === correctAnswers) {
    listHTML = '<h2>Correct Answers</h2>';
  } else if (list === wrongAnswers) {
    listHTML = '<h2>Incorrect Answers</h2>';
  } else {
    listHTML = '<h2>I don\'t know what to do with this list</h2>';
  }
  listHTML += '<ol>';
  for (var i = 1; i < list.length; i += 1) {
    listHTML += '<li>' + list[i] + '</li>';
  }
  listHTML += '</ol>';
  return listHTML;
}

askQuestions(questions);
var message = '<h2>Score:</h2>' + '<p>You got ' + correctAnswers[0] + ' answers correct, and ' + wrongAnswers[0] + ' answers wrong.</p>';
var correctList = makeList(correctAnswers);
var wrongList = makeList(wrongAnswers);
print(message);
print(correctList);
print(wrongList);
