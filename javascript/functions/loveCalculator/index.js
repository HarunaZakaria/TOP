let yourName = prompt("What is your name");
let partnerName = prompt("What is your partner name");

let loveScore = Math.random() * 100;

loveScore = Math.floor(loveScore) + 1;

if(loveScore >= 80) {
alert( yourName + " You and "+ partnerName +" love score is " + loveScore +"%, your love for each other is like Romeo and Juliet");
} else{
alert( yourName + " You and "+ partnerName +" love chances are " + loveScore +"%");
}
