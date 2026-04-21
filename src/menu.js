import pizza2 from './images/pizza-2.jpg';
import pizza3 from './images/pizza-3.jpg';
import pizza4 from './images/pizza-4.jpg';
import pizza5 from './images/pizza-5.jpg';
import pizza6 from './images/pizza-6.jpg';
import './menu.css';

export default function displayMenu() {
    const content = document.querySelector('#content');
    const images = [pizza2, pizza3, pizza4, pizza5, pizza6];
    const names = ['Chicken Tikka', 'Chicken Jalapeno', 'Thin Crust', 'Chicken Malai', 'Stuff Crust'];
    const prices = [800, 900, 800, 1000, 1200];

    for(let i = 0; i < 5; i++) {
        const card = document.createElement('div');
        const pic = document.createElement('img');
        const name = document.createElement('p');
        const price = document.createElement('p');

        pic.src = images[i];
        pic.classList.add('item-img');
        name.textContent = names[i];
        name.classList.add('item-name');
        price.textContent = 'RS ' + prices[i];
        price.classList.add('price');

        card.classList.add('card');
        card.append(pic, name, price);
        content.appendChild(card);
    }
}