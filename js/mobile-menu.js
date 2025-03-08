const headerElement = document.querySelector('#header');

const openClass = 'open';
const activeClass = 'active';

const eventHandler = (e) => {
    const isBurgerButton = e.target.closest('#button-burger');
    const mobileMenuElement = headerElement.querySelector('#mobile-menu');
    const isLink = e.target.closest('[data-anchor-link]');

    if (isBurgerButton) {
        mobileMenuElement.classList.toggle(openClass);
        isBurgerButton.classList.toggle(activeClass);
    } 

    if (isLink) {
        const burgerButton = headerElement.querySelector('#button-burger');
        burgerButton.classList.remove(activeClass);
        mobileMenuElement.classList.remove(openClass);
    }
}

headerElement.addEventListener('click', eventHandler);


const skills=document.querySelector('#skills');
const fade=document.querySelector('#fade');


function cardRotate(event) {
    const card = event.target.closest('[data-card]');
    if (card) {
        fade.classList.add('active');
        card.classList.add('active');
        document.body.classList.add('block');
    }
}

skills.addEventListener('click', (event) => cardRotate(event));

