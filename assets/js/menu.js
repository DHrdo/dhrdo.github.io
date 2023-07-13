/*SHOW MENU*/
const menuIcon = document.querySelector('.hamburger-menu');
const showMenu = document.querySelector('.hamburger-list-container');
menuIcon.addEventListener('click', () => {
    if (!showMenu.classList.contains('show-menu')) {
        showMenu.style.display = 'block';
        showMenu.classList.remove('hide-menu');
        menuIcon.classList.remove('rotateHide');
        showMenu.classList.add('show-menu');
        menuIcon.classList.add('rotateShow');
    } else {
        menuIcon.classList.remove('rotateShow');
        showMenu.classList.remove('show-menu');
        menuIcon.classList.add('rotateHide');
        showMenu.classList.add('hide-menu');

        showMenu.addEventListener('animationend', () => {
            if (showMenu.classList.contains('hide-menu')) {
                setTimeout(() => {
                    showMenu.style.display = 'none';
                }, 100);
            }
        });
    }
});

/*HIDING MENU WHEN CLICKING ON A MENU ELEMENT*/
const listElement = document.querySelectorAll('.mobile-list-element');
listElement.forEach((item) => {
    item.addEventListener('click', () => {
        console.log('elemento');
        menuIcon.classList.remove('rotateShow');
        showMenu.classList.remove('show-menu');
        menuIcon.classList.add('rotateHide');
        showMenu.classList.add('hide-menu');

        showMenu.addEventListener('animationend', () => {
            if (showMenu.classList.contains('hide-menu')) {
                setTimeout(() => {
                    showMenu.style.display = 'none';
                }, 100);
            }
        })
    })
})
