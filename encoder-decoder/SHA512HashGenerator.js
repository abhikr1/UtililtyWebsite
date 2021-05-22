const input = document.querySelector('.input');
const output = document.querySelector('.output');
const button = document.querySelector('.encoder');
const reset = document.querySelector('.reset');
button.addEventListener('click', () => {
    // eslint-disable-next-line no-undef
    output.value = CryptoJS.SHA512(input.value);
});
reset.addEventListener('click', () => {
    output.value = '';
    input.value = '';
});
