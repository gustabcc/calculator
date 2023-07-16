const main = document.querySelector('main');
const root = document.querySelector(':root');
const input = document.getElementById('input');
const resultInput = document.getElementById('result');

const allowedKeys = ["(", ")", "/", "*", "-", "+", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "%"];

//this event allows the keys to be clicked whith the mouse whithout influencing its functionality.
document.querySelectorAll('.charKey').forEach(function(charKeyBtn){
  charKeyBtn.addEventListener('click', function() {
    const value = charKeyBtn.dataset.value;
    input.value += value;
  })
})

//this event adds the functionality of the clear button, which serves to clear the input where the numbers are.
document.getElementById('clear').addEventListener('click', function() {
  input.value = '';
  input.focus();
})

document.getElementById('equal').addEventListener('click', calculate);

input.addEventListener('keydown', function(ev) {
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
})

//the calculate function performs a calculation based on the value present in an input HTML element and displays the result in another HTML element. 
function calculate() {
  resultInput.value = 'ERROR';
  resultInput.classList.add('error');

  const result = eval(input.value);
  
  resultInput.value = result;
  resultInput.classList.remove('error');
}

//this feature allows you to copy the result of the operation performed on the calculator.
document.getElementById('copyToClipboard').addEventListener('click', function(ev) {
  const button = ev.currentTarget

  if(button.innerText === 'Copy') {
    button.innerText = 'Copied';
    button.classList.add('success');
    navigator.clipboard.writeText(resultInput.value);
  } else {
    button.innerText = 'Copy';
    button.classList.remove('success');
  }
})

//this event control the dark mode and ligth mode of the calculator.
document.getElementById('themeSwitcher').addEventListener('click', function() {
  if(main.dataset.theme === 'dark') {
    root.style.setProperty('--bg-color', '#F1F5F9');
    root.style.setProperty('--font-color', '#212529');
    root.style.setProperty('--border-color', '#aaa');
    root.style.setProperty('--primary-color', '#26834a');
    main.dataset.theme = 'light';
  } else {
    root.style.setProperty('--bg-color', '#212529');
    root.style.setProperty('--font-color', '#fff');
    root.style.setProperty('--border-color', '#aaa');
    root.style.setProperty('--primary-color', '#4dff91');
    main.dataset.theme = 'dark';
  }
})