import pizza from './images/pizza-1.jpg';

export default function displayHome() {
    const content = document.querySelector('#content');
    const container = document.createElement('div');
    const textContainer = document.createElement('div');
    const heroImg = document.createElement('img');
    const heading = document.createElement('p');
    const text = document.createElement('p');

    container.classList.add('hero-wrapper');
    textContainer.classList.add('text-wrapper');
    heroImg.src = pizza;
    heroImg.classList.add('hero-img');
    heading.textContent = 'Best Pizza in the Town!';
    heading.classList.add('heading');
    text.textContent = "Hungry? Visit the shop now, just few steps away from you! We got all kinds of flavours and sauces to keep you full!";
    text.classList.add('hero-txt');

    textContainer.append(heading, text);
    container.append(heroImg, textContainer);
    content.append(container);
}