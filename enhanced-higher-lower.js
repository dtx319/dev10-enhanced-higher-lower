

// Part 1: Prompt for user-input to set a max number
let valid_input = false;
let input_num, input;

while(!valid_input) {
    input = window.prompt("Please pick a number greater than 1");

    input_num = Math.round(Number(input));

    if (!isNaN(input_num) && input_num > 1) {
        valid_input = true;
    } else {
        alert("Please try again");
    }
}


// test!
console.log(input_num);


// dynamic text that displays range based on prompt input
let range = document.getElementById("range");

range.innerHTML = "Guess a number between 1 and " + input_num + '.'


// select random number within range
let num = Math.floor(Math.random() * input_num) + 1;


// test!
console.log(num);

// setting up empty array to capture guesses
let guessesArray = [];

// let them guess!
function do_guess() {
    let guess = Math.round(Number(document.getElementById("guess").value));

    console.log(guess);

    let message = document.getElementById("message");

    if (isNaN(guess)) {
        message.innerHTML = "That is not a number!"
    } else if (guessesArray.includes(guess) == true) {
        message.innerHTML = "You've already guessed that number. Try again!"
    } else if (guess > input_num || guess < 1 ) {
        message.innerHTML = "You are out of range! Try again!";
    } else if (guess < num) {
        message.innerHTML = "No, try a higher number.";
        guessesArray.push(guess);
    } else if (guess > num) {
        message.innerHTML = "No, try a lower number.";
        guessesArray.push(guess);
    } else {
        message.innerHTML = "You got it!";
    }

    console.log(guessesArray);
}