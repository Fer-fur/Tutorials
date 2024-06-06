import ('./style.css');
import createHome from './home';
import createMenu from './menu';
import createAbout from './about';

function handleClick(contentGenerator) {
    const mainContainer = document.getElementById('mainContainer');

    // clear content before appending new content
    mainContainer.innerHTML = '';

    mainContainer.appendChild(contentGenerator());
}

document.getElementById('homeBtn').addEventListener('click', () => handleClick(createHome));
document.getElementById('menuBtn').addEventListener('click', () => handleClick(createMenu));
document.getElementById('aboutBtn').addEventListener('click', () => handleClick(createAbout));


handleClick(createHome);