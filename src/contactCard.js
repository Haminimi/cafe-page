import { initialize } from './initialize';
import message from './love-message.png';
import letter from './letter.png';

export function populateContactCard() {
    const { home, menu, contact, para, cardHeaderText, firstHeaderStickerDiv, secondHeaderStickerDiv } = initialize();

    home.classList.remove('current-card');
    menu.classList.remove('current-card');
    contact.classList.add('current-card');

    const firstHeaderSticker = new Image();
    firstHeaderSticker.src = letter;
    firstHeaderSticker.classList.add('header-sticker');
    const secondHeaderSticker = new Image();
    secondHeaderSticker.src = message;
    secondHeaderSticker.classList.add('header-sticker');

    firstHeaderStickerDiv.appendChild(firstHeaderSticker);
    cardHeaderText.textContent = 'Contact';
    secondHeaderStickerDiv.appendChild(secondHeaderSticker);

    para.innerHTML = `
    We would love to hear from you! Whether you have questions about our menu,
    want to book an event, or just want to say hello, feel free to reach out.
    Our team is here to assist you.<br>
  
    <b>Address: 123 Cozy Street, Cityville<br>
    Phone: (123) 456-7890<br>
    Email: info@thecozycupcafe.com</b>
  `;
}