import calculate from './calculate.js';
import copyToClipboard from './copyToClipboard.js';
import { clearButton, handleButtonsPress, handleTyping } from './keyHandlers.js';
import theme from './theme.js';


const input = document.getElementById('input');
const resultInput = document.getElementById('result');

//this event allows the keys to be clicked whith the mouse whithout influencing its functionality.
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click', handleButtonsPress)
})

//this event adds the functionality of the clear button, which serves to clear the input where the numbers are.
document.getElementById('clear').addEventListener('click', clearButton)

//the calculate function performs a calculation based on the value present in an input HTML element and displays the result in another HTML element.
document.getElementById('equal').addEventListener('click', calculate);

//this function allows you to use the keyboard to enter numbers.
input.addEventListener('keydown', handleTyping);

//this feature allows you to copy the result of the operation performed on the calculator.
document.getElementById('copyToClipboard').addEventListener('click', copyToClipboard)

//this event control the dark mode and ligth mode of the calculator.
document.getElementById('themeSwitcher').addEventListener('click', theme)