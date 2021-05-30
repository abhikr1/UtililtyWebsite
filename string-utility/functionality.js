let wordcount = document.querySelector('#wordcount');
let charcount = document.querySelector('#charcount');
const lowercase = document.querySelector('#lowercase');
const uppercase = document.querySelector('#uppercase');

const input = document.querySelector('#input');
const output = document.querySelector('#output');
wordcount.addEventListener('click', () => {
    let result = 1;
    for(let i = 0; i < input.value.length; i++){
        if(input.value[i] === " "){
            result++;
        }
    }
    if(input.value.length === 0)
    output.value = 0;
    else
    output.value = result;
});
charcount.addEventListener('click', () => {
    output.value = input.value.length;
})

lowercase.addEventListener('click' , () => {
    output.value = input.value.toLowerCase();
})

uppercase.addEventListener('click' , () => {
    output.value = input.value.toUpperCase();
})