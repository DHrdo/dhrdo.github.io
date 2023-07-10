/*LETTERS*/
const MY_NAME_WORD = 'Denis Accardo';
const MY_NAME = document.querySelector('.myName');
let counterMyName = 0;
let displayedName = '';
setInterval(updateLetters, 500)
requestAnimationFrame(updateLetters);

function updateLetters() {
    if (counterMyName < MY_NAME_WORD.length) {
        displayedName += MY_NAME_WORD[counterMyName];
        MY_NAME.innerHTML = displayedName;
        counterMyName++;
    }
};