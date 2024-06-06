export default function createMenu() {
    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuContainer');
    menuDiv.textContent = 'Restaurant dishes & prices go here.'

    return menuDiv;
}