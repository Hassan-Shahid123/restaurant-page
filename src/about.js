import './about.css';

export default function displayAbout() {
    const content = document.querySelector('#content');
    const aboutContainer = document.createElement('div');
    const phone = document.createElement('p');
    const email = document.createElement('p');
    const form = document.createElement('form');
    const label = document.createElement('label');
    const textArea = document.createElement('textarea');
    const submitBtn = document.createElement('button');

    phone.textContent = 'Phone: 1234567890';
    email.textContent = 'Email: hassan@email.com';
    label.for = 'txt';
    label.textContent = 'We would love to hear from you!'
    textArea.id = 'txt';
    textArea.rows = '5';
    textArea.cols = '30';
    textArea.classList.add('text-area');
    submitBtn.textContent = 'Submit';

    submitBtn.addEventListener('click', (e) => {
        e.preventDefault();
    })

    form.append(label, textArea, submitBtn);
    aboutContainer.append(phone, email, form);
    aboutContainer.classList.add('about-wrapper');

    content.appendChild(aboutContainer);
}