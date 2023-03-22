// let num = Math.floor(Math.random() * 20) + 1;

// Prompt for user-input to set a max number10
let num = prompt("Please pick a number");

var num1 = Math.floor(Number(num))

console.log(num1)

// console.log(num);

// function do_guess() {
//     let guess = Number(document.getElementById("guess").value);

//     let message = document.getElementById("message");

//     if(guess == num) {
//         message.innerHTML = "You got it!";
//     } else if (guess > 20 || guess < 1 ) {
//         message.innerHTML = "You are out of range! Try again!";
//     } else if (guess > num) {
//         message.innerHTML = "No, try a lower number.";
//     } else {
//         message.innerHTML = "No, try a higher number.";
//     }
// }