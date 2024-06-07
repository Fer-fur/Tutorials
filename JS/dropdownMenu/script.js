// Get all dropdowns from the document
const dropdowns = document.querySelectorAll('.dropdown');

// Loop through all dropdown elements
dropdowns.forEach(dropdown => {
    // Get inner elements from each dropdown
    const select = dropdown.querySelector('.select');
    const caret = dropdown.querySelector('.caret');
    const menu = dropdown.querySelector('.menu');
    const options = dropdown.querySelectorAll('.menu li');
    const selected = dropdown.querySelector('.selected');

    // Add a click event to the select element
    select.addEventListener('click', () => {
        // Add the clicked select styles to the select element
        select.classList.toggle('select-clicked');

        //Add the rotate styles to the caret element
        caret.classList.toggle('caret-rotate');

        // Add the open styles to the menu element
        menu.classList.toggle('menu-open');
    })

    //Loop through all options elements
    options.forEach(option => {
        option.addEventListener('click', () => {
            selected.innerText = option.innerText;

            select.classList.remove('select-clicked');
            caret.classList.remove('caret-rotate');
            menu.classList.remove('menu-open');

            options.forEach(option => {
                option.classList.remove('active');
            });
            option.classList.add('active');
        })
    })
})