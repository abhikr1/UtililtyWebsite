const inputurl = document.querySelector('.input');
const outputurl = document.querySelector('.output');
const encode = document.querySelector('.encoder');
const reset = document.querySelector('.reset');

encode.addEventListener('click', () => {
    outputurl.value = encodeURIComponent(inputurl.value);
});

reset.addEventListener('click', () => {
    outputurl.value = '';
    inputurl.value = '';
});
