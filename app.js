/*GAME FUNCTION
-Payer must guess a number between a min and max
-Player gets a certain amount of guesses
-Notify player of the guesses remaining
-Notfy the player of the correct answer if loose
-Let Player choose to play again
*/

// Generate Target Num
let targetNum = Math.floor(Math.random() * 21);
let guessesLeft = 3;
const message = document.querySelector(".message")
const submitBtn = document.getElementById("guess-value")
let correct = false
if (targetNum){
    displayRange(targetNum);
}
submitBtn.addEventListener("click", game)
function game(e){
    const input = document.getElementById("guess-input");
    // Disable input
    input.disabled = false;
    // Change Button Value
    submitBtn.value = "Submit";
   
     // Check the answer
    checkInput(input)

    e.preventDefault()
}

// CheckInput
function checkInput(input){
    // Correct Guess
    if (input.value == targetNum){
        input.style.borderColor = "green";
        message.textContent = `You Win: Correct Answer was ${targetNum}`;
        submitBtn.value = "Play Again";
        input.disabled = true;
        input.value = 0;
        correct = true;
    }
    else if (correct){
        correct = false;
        guessesLeft = 3;
        submitBtn.value = "Submit"
        input.disabled = false;
        // Clear Input
        input.value = "";
        message.textContent = `You have ${guessesLeft} guess left`;
        targetNum = Math.floor(Math.random() * 21);
        displayRange(targetNum)
    }

    else{
        // Incorrect Guess
        input.style.borderColor = "red";
        guessesLeft --;
        // Clear Input
        input.value = "";
        console.log(guessesLeft);
        if (guessesLeft > 1){
            message.textContent = `You have ${guessesLeft} guesses left`
        };
        if (guessesLeft == 1){
            message.textContent = `You have ${guessesLeft} guess left`
        };
        // No more Guesses Left
        if (guessesLeft == 0){
            message.textContent = `You Lost: Correct Answer was ${targetNum}`;
            submitBtn.value = "Play Again";
            input.disabled = true;
        }
        // Play Again
        if (guessesLeft == -1){
            guessesLeft = 3;
            submitBtn.value = "Submit"
            input.disabled = false;
            // Clear Input
            input.value = "";
            message.textContent = `You have ${guessesLeft} guess left`;
            targetNum = Math.floor(Math.random() * 21);
            displayRange(targetNum)
        }
    }
}

// Display the Min and Max Numbers 
function displayRange(targetNum){
  const minNum = document.querySelector(".min-num");
  minNum.textContent = (targetNum - 5);
  const maxNum = document.querySelector(".max-num");
  maxNum.textContent = (targetNum + 5);
}
