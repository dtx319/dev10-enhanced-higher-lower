// Prompt for user-input to set a max number
let valid_input = false;
let input_num, input;

while(!valid_input) {
    input = window.prompt("Please pick a number greater than 1");

    input_num = Math.round(Number(input));

    if (!isNaN(input_num) && input_num > 1) {
        valid_input = true;
    } else {
        alert("Please try again.");
    }
};

// test that max number in range is assigned appropriately
console.log(input_num);

// display dynamic text of range based on prompt input
let range = document.getElementById("range");

range.innerHTML = "Guess a number between 1 and " + input_num + '.'

// select random number within range
let num = Math.floor(Math.random() * input_num) + 1;

// test that randomized number was assigned appropriately
console.log(num);

// set up of empty array to capture guesses
let guessesArray = [];

// let them guess!
function do_guess() {
    let guess = Math.round(Number(document.getElementById("guess").value));

    // test that guess is being assigned properly
    console.log(guess);

    // display messages based on guess
    let message = document.getElementById("message");

    if (isNaN(guess)) { // number validation
        message.innerHTML = "That is not a number!"
    } else if (guessesArray.includes(guess) == true) { // duplicate validation 
        message.innerHTML = "You've already guessed that number. Try again!"
    } else if (guess > input_num || guess < 1 ) { // range validation
        message.innerHTML = "You are out of range! Try again!";
    } else if (guess < num) { // record guess of lower number
        message.innerHTML = "No, try a higher number.";
        guessesArray.push(guess);
    } else if (guess > num) { // record guess of higher number
        message.innerHTML = "No, try a lower number.";
        guessesArray.push(guess);
    } else {
        guessesArray.push(guess);
        message.innerHTML = "You got it! It took you " + guessesArray.length + " tries! Your guesses were " + guessesArray.join(', ') + "."
    };

    // test that the guesses are getting pushed to the array
    console.log(guessesArray);
};