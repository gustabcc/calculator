export default function() {

    const main = document.querySelector('main');
    const root = document.querySelector(':root');

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
  }