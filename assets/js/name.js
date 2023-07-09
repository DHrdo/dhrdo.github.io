/*LETTERS*/
const myNameWord = 'Denis Accardo';
const myName = document.querySelector('.myName');
let counterMyName = 0;
let displayedName = '';
setInterval(updateLetters, 500)
requestAnimationFrame(updateLetters);

function updateLetters() {
    if (counterMyName < myNameWord.length) {
        displayedName += myNameWord[counterMyName];
        myName.innerHTML = displayedName;
        counterMyName++;
    }
};