import calculate from "./calculate.js";


export function handleButtonsPress(ev) {
    const input = document.getElementById('input');
    const charKeyBtn = ev.currentTarget;
    const value = charKeyBtn.dataset.value;
    input.value += value;
}

export function clearButton() {
    input.value = '';
    input.focus();
  }

export function handleTyping(ev) {

    const allowedKeys = ["(", ")", "/", "*", "-", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "%"];

    //prevent letters from being written on the calculator.
    ev.preventDefault(); 
  
    //control the characters that can be typed on the calculator keyboard.
    if(allowedKeys.includes(ev.key)) {
      input.value += ev.key;
      return;
    }
  
    //allows  the backspace button to be used to clear characters from the keyboard.
    if(ev.key === 'Backspace') {
      input.value = input.value.slice(0, -1);
      return;
    }
  
    if(ev.key === 'Enter') {
      calculate();
    }
  }