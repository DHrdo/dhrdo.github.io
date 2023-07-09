/*LIGHT/DARK MODE*/
const light = document.querySelector('.change-light-img');

const header = document.querySelector('.header');
const menubg = document.querySelector('.hamburger-list-container');

const knowMe = document.querySelector('.knowme');
const knowledge = document.querySelector('.knowledge-section');

const works = document.querySelector('.works-section');
const h1 = document.querySelectorAll('h1');
const h3 = document.querySelectorAll('h3');
const p = document.querySelectorAll('p');
const li = document.querySelectorAll('li');
const span = document.querySelector('span');
const welcome = document.querySelector('.welcome');
const changeLightImg = document.querySelector('.change-light-img');

const formSection = document.querySelector('.email-form-section');
const form = document.querySelector('form');
const label = document.querySelectorAll('label');

const footer = document.querySelector('footer');
const github = document.querySelector('.github-img');
//const email = document.querySelector('.email-img');
const linkedin = document.querySelector('.linkedin-img');

let darkMode = false;
light.addEventListener('click', () => {
    if (!darkMode) {
        darkMode = true;
        header.style.backgroundColor = 'rgb(14,41,84)';
        menubg.style.backgroundColor = 'rgb(14, 41, 84)';
        knowMe.style.backgroundColor = 'rgb(14, 41, 84)';
        knowledge.style.backgroundColor = 'rgb(14, 41, 84)';
        works.style.backgroundColor = 'rgb(14, 41, 84)';
        formSection.style.backgroundColor = 'rgb(14, 41, 84)'
        form.style.backgroundColor = 'rgb(14, 41, 84)'
        h1.forEach(element => {
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
        welcome.style.color = 'rgb(255, 255, 255)';
        changeLightImg.src = 'assets/images/moonDark.png';
        label.forEach(element => {
            element.style.color = 'rgb(255, 255, 255)';
        });
        footer.style.backgroundColor = 'rgb(14, 41, 84)';

        github.src = 'assets/images/github-dark.png';
        //email.src = 'assets/images/email-dark.png';
        linkedin.src = 'assets/images/linkedin-dark.png';

    } else {
        darkMode = false;
        header.style.backgroundColor = 'rgb(223, 224, 223)';
        menubg.style.backgroundColor = 'rgb(223, 224, 223)';
        knowMe.style.backgroundColor = 'rgb(223, 224, 223)';
        knowledge.style.backgroundColor = 'rgb(216, 216, 216)';
        works.style.backgroundColor = 'rgb(223, 224, 223)';
        formSection.style.backgroundColor = 'rgb(223, 224, 223)'
        form.style.backgroundColor = 'rgb(223, 224, 223)'
        h1.forEach(element => {
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
        welcome.style.color = 'rgb(5, 24, 33)';
        changeLightImg.src = 'assets/images/moonLight.png';
        label.forEach(element => {
            element.style.color = 'rgb(5, 24, 33)';
        });
        footer.style.backgroundColor = 'rgb(223, 224, 223)';

        github.src = 'assets/images/github.png';
        //email.src = 'assets/images/email.png';
        linkedin.src = 'assets/images/linkedin.png';
    }
});
