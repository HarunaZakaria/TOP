const myArray = ['I', 'love', 'chocolate', 'frogs'];
const madeAString = myArray.join(' ');
const myNumer = Math.random();
const myName = 'Haruna';
const newName = myName.replace('Haruna', 'Zakaria');

const textBox = document.querySelector('#textBox');
const output = document.querySelector('#output');

textBox.addEventListener('keydown', (event) => {
  output.textContent = `You pressed "${event.key}".`;
});
