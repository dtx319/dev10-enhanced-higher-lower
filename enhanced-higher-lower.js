

// Prompt for user-input to set a max number10
let valid_input = false;
let input_num, input;

while(!valid_input) {
    input = window.prompt("Please pick a number");

    input_num = Math.floor(Number(input));

    if (!isNaN(input_num) && input_num > 0) {
        valid_input = true;
    } else {
        alert("Please try again");
    }
}

// let input = window.prompt("Please pick a number");

// var inputNum1 = Math.floor(Number(inputNum))



// let range = document.getElementById("range");

// range.innerHTML = "Guess between 1 and ${{inputNum}}"

// let num = Math.floor(Math.random() * 20) + 1;

// console.log(num);

// function do_guess() {
//     let guess = Number(document.getElementById("guess").value);

//     let message = document.getElementById("message");

//     if(guess == num1) {
//         message.innerHTML = "You got it!";
//     } else if (guess > 20 || guess < 1 ) {
//         message.innerHTML = "You are out of range! Try again!";
//     } else if (guess > num) {
//         message.innerHTML = "No, try a lower number.";
//     } else {
//         message.innerHTML = "No, try a higher number.";
//     }
// }