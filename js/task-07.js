

const inputRangeRef = document.querySelector('#font-size-control');
const inputTextRef = document.querySelector('#text');


inputRangeRef.addEventListener('input', handleInput);

function handleInput(event) {
    inputTextRef.style.fontSize = event.currentTarget.value + 'px';
};