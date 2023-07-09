/*WORDS CHANGER*/
const words = ['desire', 'ideas'];
const getWord = document.querySelector('.changeWord');
let counter = 0;
setInterval(updateWords, 2500);
requestAnimationFrame(updateWords);
function updateWords() {
    getWord.innerHTML = words[counter];
    counter += 1;
    if (counter > 1) {
        counter = 0;
    }
};