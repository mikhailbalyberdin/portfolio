const headerElement = document.querySelector('#header');

const openClass = 'open';

const eventHandler = (e) => {
    const isBurgerButton = e.target.closest('#button-burger');
    const mobileMenuElement = headerElement.querySelector('#mobile-menu');

    if (isBurgerButton) {
        mobileMenuElement.classList.toggle(openClass);
    } 
}

headerElement.addEventListener('click', eventHandler);
