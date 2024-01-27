function favoriteColor(color) {
  let a = 'yellow';
  return color + ` is my best color for design, but I sometimes use ${a}`;
}

//this fuction adds 7 to any number passed into it.
function add7(num) {
  return num + 7;
}

// this multiplies the two numbers passed into it
function multiply(num1, num2) {
  return num1 * num2;
}

// this function returns the last letter of of the word paased into it
function lastLetter(str) {
  return str.charAt(str.length - 1);
}
console.log(lastLetter('harunzy'));
//this function changes the first letter  to capital letter
function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
}
