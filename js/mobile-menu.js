const headerElement = document.querySelector('#header');

const openClass = 'open';

const eventHandler = (e) => {
    const isBurgerButton = e.target.closest('#button-burger');
    const mobileMenuElement = headerElement.querySelector('#mobile-menu');
    const isLink = e.target.closest('[data-anchor-link]');

    if (isBurgerButton) {
        mobileMenuElement.classList.toggle(openClass);
    } 

    if (isLink) {
        console.log("Hello");
        mobileMenuElement.classList.remove(openClass);
    }
}

headerElement.addEventListener('click', eventHandler);
