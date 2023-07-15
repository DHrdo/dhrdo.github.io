/*LIGHT/DARK MODE*/
const light = document.querySelector('.change-light-img');

const header = document.querySelector('.header');
const menubg = document.querySelector('.hamburger-list-container');

const h1 = document.querySelectorAll('h1');
const h2 = document.querySelectorAll('h2');
const h3 = document.querySelectorAll('h3');
const p = document.querySelectorAll('p');
const li = document.querySelectorAll('li');
const span = document.querySelector('span');
const changeLightImg = document.querySelector('.change-light-img');

const footer = document.querySelector('footer');
const github = document.querySelector('.github-img');
const linkedin = document.querySelector('.linkedin-img');

let darkMode = false;
light.addEventListener('click', () => {
    if (!darkMode) {
        darkMode = true;
        header.style.backgroundColor = 'rgb(14,41,84)';
        menubg.style.backgroundColor = 'rgb(14, 41, 84)';
        h1.forEach(element => {
            element.style.color = 'rgb(255, 255, 255)';
        });
        h2.forEach(element => {
            element.style.color = 'rgb(255, 255, 255)';
        });
        p.forEach(element => {
            element.style.color = 'rgb(255, 255, 255)';
        });
        h3.forEach(element => {
            element.style.color = 'rgb(255, 255, 255)';
        });
        li.forEach(element => {
            element.style.color = 'rgb(255, 255, 255)';
        });
        changeLightImg.src = '/assets/images/moonDark.png';
        footer.style.backgroundColor = 'rgb(14, 41, 84)';

        github.src = '/assets/images/github-dark.png';
        linkedin.src = '/assets/images/linkedin-dark.png';

    } else {
        darkMode = false;
        header.style.backgroundColor = 'rgb(223, 224, 223)';
        menubg.style.backgroundColor = 'rgb(223, 224, 223)';
        h1.forEach(element => {
            element.style.color = 'rgb(5, 24, 33)';
        });
        h2.forEach(element => {
            element.style.color = 'rgb(5, 24, 33)';
        });
        p.forEach(element => {
            element.style.color = 'rgb(5, 24, 33)';
        });
        h3.forEach(element => {
            element.style.color = 'rgb(5, 24, 33)';
        });
        li.forEach(element => {
            element.style.color = 'rgb(5, 24, 33)';
        });
        changeLightImg.src = '/assets/images/moonLight.png';
        footer.style.backgroundColor = 'rgb(223, 224, 223)';

        github.src = '/assets/images/github.png';
        linkedin.src = '/assets/images/linkedin.png';
    }
});