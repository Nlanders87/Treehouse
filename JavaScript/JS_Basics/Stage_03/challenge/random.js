var firstNum = prompt('Please enter a number');
var secondNum = prompt('Please enter another number');
var topNumber = parseInt(firstNum);
var bottomNumber = parseInt(secondNum);
var randNum = Math.floor(Math.random() * (topNumber - bottomNumber +1)) + bottomNumber;
var message = "<p>" + randNum + " is a number between " + bottomNumber + " and " + topNumber + ".</p>";
document.write(message);
