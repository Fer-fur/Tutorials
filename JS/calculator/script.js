const calculatorScreen = document.querySelector("#calculatorScreenText");
const numBtn = document.querySelectorAll(".numBtn");
const cancelBtn = document.querySelector("#cancelBtn");
const operatorBtn = document.querySelectorAll(".operatorBtn");
const eqlBtn = document.querySelector("#eqlBtn");
const delBtn = document.querySelector("#deleteBtn");
const deciBtn = document.querySelector("#decBtn");

let preNum = "";
let curNum = "";
let operator = "";
let calculations = {
    '+' : function(firstNum, secondNum){return firstNum + secondNum},
    '-' : function(firstNum, secondNum){return firstNum - secondNum},
    '*' : function(firstNum, secondNum){return firstNum * secondNum},
    '/' : function(firstNum, secondNum){return firstNum / secondNum},
}
let needToClearScreen = false;
let decimalIsPressed = false;

function numBtnPressed(btn) {
    // to clear the screen preventing any operators from concatenating with numbers
    if(needToClearScreen) {
        calculatorScreen.textContent = "";
        needToClearScreen = false;
    }
    // to restrict adding additional numbers to the screen to prevent text overflow
    if(calculatorScreen.textContent.length < 6){
        calculatorScreen.textContent += btn.target.textContent;
    }

    // if operator was selected, updates current Number instead of previous Number
    if(operator === "") {
        preNum = calculatorScreen.textContent
    }else{
        curNum = calculatorScreen.textContent
    }
}

function resetValues(){
    operator = "";
    preNum = "";
    curNum = "";
    needToClearScreen = false;
    decimalIsPressed = false;
}


numBtn.forEach((btn) => 
    btn.addEventListener('click',(e) => numBtnPressed(e))
)


cancelBtn.addEventListener("click", () => {
    // clears the screen, reset all values and states
    calculatorScreen.textContent="";
    resetValues();
})


operatorBtn.forEach((btn) => 
    btn.addEventListener("click", (e) => {
        // shows operator selected on screen and allows screen to be cleared on the next number button pressed 
        // reallow decimal btn to be pressed
        operator=e.target.textContent;
        calculatorScreen.textContent = e.target.textContent;
        needToClearScreen = true;
        decimalIsPressed = false;
    }
))

eqlBtn.addEventListener("click", () => {
    if(operator != "") {
        let output = +calculations[operator](Number(preNum), Number(curNum)).toFixed(4);
        // if output is a floating value, prevent decimal button from being added.
        if(Number.isInteger(output)){
            decimalIsPressed = false;
        }else {
            decimalIsPressed = true;
        }
        calculatorScreen.textContent = String(output);
        preNum = String(output);
        operator = "";
        curNum = "";
    }
})

// removes the least significant digit and check if the decimal point is present
// if decimal point is not present, allow decimal point to be added
// clears screen if the final digit is removed instead of displaying 0
delBtn.addEventListener('click', () => {
    if(curNum === "") {
        preNum = preNum.slice(0, -1);
        if(!preNum.includes('.')){
            decimalIsPressed = false;
        }
        if(preNum === 0) {
            calculatorScreen.textContent = "";
        }else{
            calculatorScreen.textContent = preNum;
        }
    }else {
        curNum = curNum.slice(0, -1);
        if(!curNum.includes('.')){
            decimalIsPressed = false;
        }
        if(curNum === 0) {
            calculatorScreen.textContent = "";
        }else{
            calculatorScreen.textContent = curNum;
        }
    }
})

deciBtn.addEventListener("click", () => {
    if(!decimalIsPressed){
        calculatorScreen.textContent += '.';
        decimalIsPressed = true;
    }
})