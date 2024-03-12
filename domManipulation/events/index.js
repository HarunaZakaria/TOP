const buttons = document.querySelectorAll('button');
const btn1 = document.querySelector('#btn1');
const btn2 = document.querySelector('#btn2');
/* btn.addEventListener('click', () => {
  alert('Hello World');
});
 */
btn1.addEventListener('click', function (e) {
  e.target.style.background = 'blue';
});

btn2.addEventListener('click', function (e) {
  e.target.style.background = 'green';
});

// and for each one we add a 'click' listener
/* buttons.forEach((button) => {
  button.addEventListener('click', () => {
    alert(button.value);
  });
}); */
