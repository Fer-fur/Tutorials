export default function createHome() {
    const homeDiv = document.createElement('div');
    homeDiv.classList.add('homeContainer')
    homeDiv.textContent = "This is the homepage."

    return homeDiv;
}