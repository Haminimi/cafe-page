import { initialize } from './initialize';
import coffee from './assets/images/coffee.png';
import coffeeBag from './assets/images/coffee-bag.png';

export function populateMenuCard() {
	const {
		home,
		menu,
		contact,
		para,
		cardHeaderText,
		firstHeaderStickerDiv,
		secondHeaderStickerDiv,
	} = initialize();

	home.classList.remove('current-card');
	contact.classList.remove('current-card');
	menu.classList.add('current-card');
	para.classList.add('menu-para');

	const firstHeaderSticker = new Image();
	firstHeaderSticker.src = coffeeBag;
	firstHeaderSticker.classList.add('header-sticker');
	const secondHeaderSticker = new Image();
	secondHeaderSticker.src = coffee;
	secondHeaderSticker.classList.add('header-sticker');

	firstHeaderStickerDiv.appendChild(firstHeaderSticker);
	cardHeaderText.textContent = 'Menu';
	secondHeaderStickerDiv.appendChild(secondHeaderSticker);

	para.textContent = '';
	const menuItems = [
		'Classic Coffee - $2.50',
		'Espresso - $3.00',
		'Cappuccino - $3.50',
		'Latte - $3.00',
		'Iced Coffee - $3.00',
		'Croissant - $2.00',
		'Muffin - $1.50',
		'Orange Juice - $2.50',
	];

	menuItems.forEach((itemText) => {
		const item = document.createElement('p');
		item.classList.add('menu-item');
		item.textContent = itemText;
		para.appendChild(item);
	});
}
