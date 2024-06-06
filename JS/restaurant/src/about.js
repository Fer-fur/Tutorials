export default function createAbout() {
    const aboutDiv = document.createElement('div');
    aboutDiv.classList.add('aboutContainer');
    aboutDiv.textContent = 'Details about the restaurant'

    return aboutDiv;
}