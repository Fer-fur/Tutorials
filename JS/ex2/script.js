let container = document.getElementById("container");
let btn = document.getElementById("btn");
let numOfSquaresText = document.getElementById("numOfSquaresText");
let dimensionOfDiv = 4;

function initSketch() {
    generateDiv(50)
}

btn.addEventListener("click", () => {

    // get user input
    let userInput = askForInteger();
    
    // remove all child from the container before generating more
    removeAllChild(container); 

    // generate the <div> according to the user input
    generateDiv(userInput);
})

function generateDiv (numOfDiv) {
    
    // to calculate the width & height of the display
    divDimension = numOfDiv * dimensionOfDiv;

    // to set the display's dimension
    container.setAttribute("style", `width: ${divDimension}px; height: ${divDimension}px`);

    // to append the number of <div> input by the user
    for(let i = 0; i< (numOfDiv * numOfDiv); i++) {
        let div = document.createElement("div");

        div.setAttribute('style', `width: ${dimensionOfDiv}px; height: ${dimensionOfDiv}px`)

        div.addEventListener('mouseenter' , (e) => {
            e.target.style.backgroundColor = randomColour();
        })

        container.appendChild(div);
    }

    // to update the <p> to display in text the number of <div>
    numOfSquaresText.textContent = `${numOfDiv} x ${numOfDiv} squares`;
}

function removeAllChild (element) {
    element.textContent = '';
}

function askForInteger () {
    let input;

    do {
        input = prompt("Enter the number of squares you would like. (Max 100)");

        if (input === null) {
            return
        }

        input = parseFloat(input);

        if(!isNaN(input) && Number.isInteger(input) >= 1 && input <= 100) {
            return input
        }else {
            alert("Please enter an integer between 1 ~ 100");
        }
    } while (true)
}

function randomColour() {
    let red = Math.floor((Math.random())*256);
    let green = Math.floor((Math.random())*256);
    let blue = Math.floor((Math.random())*256);

    return `rgb(${red}, ${green}, ${blue})`
}

initSketch();