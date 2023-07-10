/*WORDS CHANGER*/
const WORDS = ['desire', 'ideas'];
const GETWORD = document.querySelector('.changeWord');
let counter = 0;
setInterval(updateWords, 2500);
requestAnimationFrame(updateWords);
function updateWords() {
    GETWORD.innerHTML = WORDS[counter];
    counter += 1;
    if (counter > 1) {
        counter = 0;
    }
};