/*SHOW MENU*/
const MENU_ICON = document.querySelector('.hamburger-menu');
const SHOW_MENU = document.querySelector('.hamburger-list-container');
MENU_ICON.addEventListener('click', () => {
    if (!SHOW_MENU.classList.contains('show-menu')) {
        SHOW_MENU.style.display = 'block';
        SHOW_MENU.classList.remove('hide-menu');
        MENU_ICON.classList.remove('rotateHide');
        SHOW_MENU.classList.add('show-menu');
        MENU_ICON.classList.add('rotateShow');
    } else {
        MENU_ICON.classList.remove('rotateShow');
        SHOW_MENU.classList.remove('show-menu');
        MENU_ICON.classList.add('rotateHide');
        SHOW_MENUu.classList.add('hide-menu');

        SHOW_MENU.addEventListener('animationend', () => {
            if (SHOW_MENU.classList.contains('hide-menu')) {
                setTimeout(() => {
                    SHOW_MENUu.style.display = 'none';
                }, 100);
            }
        });
    }
});
