let inputBox = document.getElementById('input-box');
let getDecimal = document.getElementById('myDecimal');
let num0 = (num0) => {
    inputBox.value += num0.value;
}
let num1 = (num1) => {
    inputBox.value += num1.value;
}
let num2 = (num2) => {
    inputBox.value += num2.value;
}
let num3 = (num3) => {
    inputBox.value += num3.value;
}
let num4 = (num4) => {
    inputBox.value += num4.value;
}
let num5 = (num5) => {
    inputBox.value += num5.value;
}
let num6 = (num6) => {
    inputBox.value += num6.value;
}
let num7 = (num7) => {
    inputBox.value += num7.value;
}
let num8 = (num8) => {
    inputBox.value += num8.value;
}
let num9 = (num9) => {
    inputBox.value += num9.value;
}
let division = (division) => {
    inputBox.value += division.value;
}
let multiplication = () => {
    inputBox.value += "*";
}
let subtraction = (subtraction) => {
    inputBox.value += subtraction.value;
}
let addition = (addition) => {
    inputBox.value += addition.value;
}
let clearInput = () => { 
    inputBox.value = "";
}
let calculateInput = () => {
    inputBox.value = eval(inputBox.value);
    getDecimal.disabled = false;
}
let percentageNumber = () => {
    inputBox.value = eval((inputBox.value)/100);
}
let getAbsolute = () => {
    inputBox.value = parseFloat(inputBox.value) * -1;
}
let numberDecimal = (numberDecimal) => {
    inputBox.value += numberDecimal.value;
    numberDecimal.disabled = true;   
}

 

 
 