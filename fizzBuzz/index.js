/* Write a program that allows the user to enter a number,
print each number between one and the number the user entered, 
but for numbers that divide by 3 without a remainder print Fizz instead. 
For numbers that divide by 5 without a remainder print Buzz and 
finally for numbers that divide by both 3 and 5 without a remainder print FizzBuzz. */

let answer = parseInt(
  prompt('Please enter a number to play the Fizz Buzz game: ')
);

for (i = 1; i <= answer; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log('FizzBuzz');
  } else if (i % 3 === 0) {
    console.log('Fizz');
  } else if (i % 5 === 0) {
    console.log('Buzz');
  } else {
    console.log(i);
  }
}
