

  document.querySelector('input');
  const inputEl = document.getElementById('validation-input');
  inputEl.addEventListener('blur', onBorderColor);

  function onBorderColor(event){
    let inputValue = event.currentTarget.value;
    
    if (inputValue.length === Number(inputEl.dataset.length)) {
        inputEl.classList.add('valid');
        inputEl.classList.remove('invalid');
    } else if(inputEl.value.length === 0) { 
        //Можна виковирстовувати коли необхідно прибрати border-color, 
        //якщо ж необхідно вказати пусту ячейку як помилку, 
        //то даний код не використовуємо//
        inputEl.classList.remove('valid');
        inputEl.classList.remove('invalid');
    } else {
        inputEl.classList.add('invalid');
    }
  }