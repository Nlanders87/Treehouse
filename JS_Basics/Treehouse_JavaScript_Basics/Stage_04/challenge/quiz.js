// Quiz starts with no correct answers
var correct = 0;

//prompt users with questions
var firstQuestion = prompt("How old am I?");
if (firstQuestion.toUpperCase() === '29') {
  correct += 1;
}
var secondQuestion = prompt("What kind of car do I drive?");
if (secondQuestion.toUpperCase() === "MUSTANG") {
  correct += 1;
}
var thirdQuestion = prompt("What is my favorite video game?");
if (thirdQuestion.toUpperCase() === "WORLD OF WARCRAFT") {
  correct += 1;
}
var fourthQuestion = prompt("Who is my favorite author?");
if (fourthQuestion.toUpperCase() === "STEPHEN KING" ) {
  correct += 1;
}
var fifthQuestion = prompt("Who is my favorite actor?");
if (fifthQuestion.toUpperCase() === "MARK HAMILL" ) {
  correct += 1;
}

//output quiz results
document.write("You got " + correct + " out of 5 questions correct!");

//determine rank based on correct results
if ( correct === 5) {
  document.write('<p>You earned a GOLD Crown!</p>');
} else if ( correct >= 3 ) {
  document.write('<p>You earned a SILVER Crown!</p>');
} else if ( correct >= 2) {
  document.write('<p>You earned a BRONZE Crown!</p>');
} else {
  document.write("<p>You didn't earn a crown this time.Try again!</p>");
}
