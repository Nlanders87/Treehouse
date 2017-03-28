function getRandomNumber(upper, lower) {
  var random = Math.floor(Math.random() * (upper - lower + 1)) + lower;
  return random;
}

console.log(getRandomNumber(1,6));
console.log(getRandomNumber(1,100));
console.log(getRandomNumber(1,150));
console.log(getRandomNumber(1,200));
