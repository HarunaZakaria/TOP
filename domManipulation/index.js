//target the container ID in the hmtl
const container = document.querySelector('#container');
const content = document.createElement('div'); // creates a new div
content.classList.add('content'); // adds a new div named content

content.textContent = "I'm adding a new content"; // add a text
container.appendChild(content);

const newContent = document.createElement('div'); // creates a new div
newContent.classList.add('newContent'); // adds a new div named newContent
newContent.textContent = 'Haruna Zakaria';
newContent.style.cssText = 'color: blue; background: red;'; // this add a blue color and a red background
container.appendChild(newContent);

const list = document.createElement('div');
list.classList.add('names');
list.textContent = ['Haruna', 'Dauda', 'Hamis'];
container.appendChild(list);

const greet = 'Good evening';
const nme = 'Mr.Haruna';

const me = document.createElement('div');
me.classList.add('my');
me.textContent = `${greet} ${nme}`;
container.insertBefore(me, newContent);

const para = document.createElement('p');
para.classList.add('para');
para.textContent = 'Hey I’m red!';
para.style.cssText = 'color: red';
container.appendChild(para);

const btext = document.createElement('h3');
btext.classList.add('h3');
btext.textContent = "I'm a blue h3!";
btext.style.cssText = 'color: red';
container.appendChild(btext);

const newH1 = document.createElement('h1');
newH1.classList.add('h1');
newH1.textContent = "I'm in a div";

const newP = document.createElement('p');
newP.classList.add('p');
newP.textContent = 'ME TOO!';

const emp = document.createElement('div');
emp.classList.add('div');
emp.appendChild(newH1);
emp.appendChild(newP);
emp.style.cssText = 'background: pink; border: 2px solid black';

container.appendChild(emp);
