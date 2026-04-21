import "./styles.css";
import displayHome from './home.js';
import displayMenu from './menu.js';

function display() {
    const header = document.querySelector('header');
    const name = document.createElement('div');
    name.textContent = "Hassan Pizza Shop";
    name.style.fontSize = '1.5rem';
    header.prepend(name);
    displayHome();
}

const homeBtn = document.querySelector('#home');
const menuBtn = document.querySelector('#menu');
const aboutBtn = document.querySelector('#about');
const content = document.querySelector('#content');

homeBtn.addEventListener('click', () => {
    content.textContent = "";
    displayHome();
});

menuBtn.addEventListener('click', () => {
    content.textContent = "";
    displayMenu();
});

display();