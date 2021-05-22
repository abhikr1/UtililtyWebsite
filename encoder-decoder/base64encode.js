const inputurl = document.querySelector('.input');
const outputurl = document.querySelector('.output');
const encode = document.querySelector('.encoder');
const reset = document.querySelector('.reset');

const base64Encode = (url) => btoa(url);
encode.addEventListener('click', () => {
    outputurl.value = base64Encode(inputurl.value);
});

reset.addEventListener('click', () => {
    outputurl.value = '';
    inputurl.value = '';
});
