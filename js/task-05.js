

const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const getInputValue = ({ target }) => 
(outputRef.innerText = target.value ? target.value : 'Anonymous');

inputRef.addEventListener('input', getInputValue);