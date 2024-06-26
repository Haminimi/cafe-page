import { populateHomeCard } from './homeCard';
import { populateContactCard } from './contactCard';
import { populateMenuCard } from './menuCard';
import coffeeBean from './assets/images/coffee-bean.png';
import '@fortawesome/fontawesome-free/js/all.js';

export function initialize() {
	const content = document.getElementById('content');
	while (content.firstChild) {
		content.removeChild(content.firstChild);
	}

	const header = document.createElement('div');
	header.classList.add('header');

	const cafe = document.createElement('p');
	cafe.classList.add('header-cafe');
	cafe.textContent = 'The Cozy Cup ☕';

	const home = document.createElement('p');
	home.classList.add('header-element', 'current-card');
	home.setAttribute('id', 'home');
	home.textContent = 'Home';
	const menu = document.createElement('p');
	menu.classList.add('header-element');
	menu.setAttribute('id', 'menu');
	menu.textContent = 'Menu';
	const contact = document.createElement('p');
	contact.classList.add('header-element');
	contact.setAttribute('id', 'contact');
	contact.textContent = 'Contact';

	const card = document.createElement('div');
	card.classList.add('card');

	const cardHeader = document.createElement('div');
	cardHeader.classList.add('card-header');
	const cardHeaderText = document.createElement('p');
	cardHeaderText.textContent = '❤️ Welcome ❤️';
	const firstHeaderStickerDiv = document.createElement('div');
	const secondHeaderStickerDiv = document.createElement('div');
	cardHeader.appendChild(firstHeaderStickerDiv);
	cardHeader.appendChild(cardHeaderText);
	cardHeader.appendChild(secondHeaderStickerDiv);

	const cardContent = document.createElement('div');
	cardContent.classList.add('card-content');

	const para = document.createElement('p');
	para.classList.add('para');
	para.textContent =
		"At The Cozy Cup, we believe in crafting more than just coffee, we create moments that linger on your palate and in your memory. With a rich history rooted in a love for quality ingredients and a commitment to excellence, our cafe is more than a destination, it's a journey through flavors and aromas.";

	const cardStickerDiv = document.createElement('div');
	cardStickerDiv.classList.add('card-sticker-div');
	const cardSticker = new Image();
	cardSticker.src = coffeeBean;
	cardSticker.classList.add('card-sticker');

	const photoCredit = document.createElement('div');
	photoCredit.classList.add('photo-credit');
	photoCredit.textContent = 'Photo by ';
	const link = document.createElement('a');
	link.href =
		'https://unsplash.com/@thomholmes?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
	link.textContent = 'Thom Holmes ';
	const anotherLink = document.createElement('a');
	anotherLink.href =
		'https://unsplash.com/photos/brown-wooden-dining-table-inside-room-RqASow2Y6Os?utm_content=creditCopyText&utm_medium=referral&utm_source=unsplash';
	anotherLink.textContent = 'on Unsplash';
	photoCredit.appendChild(link);
	photoCredit.appendChild(anotherLink);

	const footer = document.createElement('div');
	footer.classList.add('footer');
	const space = document.createTextNode('\u00a0\u00a0');
	footer.textContent = 'Built by Haminimi';
	footer.appendChild(space);
	const faGithub = document.createElement('i');
	faGithub.classList.add('fa-brands', 'fa-github');

	const gitHubLink = document.createElement('a');
	gitHubLink.href = 'https://github.com/Haminimi';
	gitHubLink.appendChild(faGithub);
	footer.appendChild(gitHubLink);

	header.appendChild(cafe);
	header.appendChild(home);
	header.appendChild(menu);
	header.appendChild(contact);
	cardContent.appendChild(para);
	card.appendChild(cardHeader);
	card.appendChild(cardContent);
	cardStickerDiv.appendChild(cardSticker);
	card.appendChild(cardStickerDiv);
	content.appendChild(header);
	content.appendChild(card);
	content.appendChild(photoCredit);
	content.appendChild(footer);

	//Tab Switching
	home.addEventListener('click', populateHomeCard);
	menu.addEventListener('click', populateMenuCard);
	contact.addEventListener('click', populateContactCard);

	return {
		card,
		cardHeader,
		cardHeaderText,
		firstHeaderStickerDiv,
		secondHeaderStickerDiv,
		para,
		space,
		home,
		menu,
		contact,
	};
}
