let msg1 = document.getElementById('msg1');
let msg2 = document.getElementById('msg2');
let msg3 = document.getElementById('msg3')

let answer = Math.floor(Math.random() * 10) + 1;
let numofguess = 0;
let inputs = []

function dbao() {
    let userguess = document.getElementById('guess').value;

    if (userguess < 1 || userguess > 10 || userguess == 'undefined') {
        msg3.textContent = "Please enter the valid input"
    } else {
        inputs.push(userguess);
        numofguess += 1;
        if (userguess < answer) {
            msg1.textContent = "Your guess is too small"
            msg2.textContent = "Number of guesses are :" + numofguess;
            msg3.textContent = "Your guesses are :" + inputs;
        } else if (userguess > answer) {
            msg1.textContent = "Your guess is too large"
            msg2.textContent = "Number of guesses are :" + numofguess;
            msg3.textContent = "Your guesses are" + inputs;
        } else if (userguess == answer) {
            msg1.textContent = " you won";
            msg2.textContent = "Yours guesses are : " + numofguess;
            msg3.textContent = "Your inputs are : " + inputs;
        }
    }
}