import { initialize } from './initialize';

export function populateHomeCard() {
    const { home, menu, contact, para } = initialize();

    menu.classList.remove('current-card');
    contact.classList.remove('current-card');
    home.classList.add('current-card');

    para.textContent = `At The Cozy Cup, we believe in crafting more than just 
    coffee, we create moments that linger on your palate and in your memory. 
    With a rich history rooted in a love for quality ingredients and a commitment 
    to excellence, our cafe is more than a destination, it\'s a journey through flavors and aromas.`;
}