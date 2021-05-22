let input = document.querySelector('.input');
let output = document.querySelector('.output');
const hindi = document.querySelector('#hindi');
const reset = document.querySelector('#reset')
hindi.addEventListener('click', () => {
    const url = new URL('https://api.mymemory.translated.net/get');
    const param = { q: input.value, langpair: 'en|hi' };
    url.search = new URLSearchParams(param).toString();
    fetch(url)
    .then((response) => response.json())
        .then((json) => {
            output.value = json.responseData.translatedText;
        });
  });


const german = document.querySelector('#german');
german.addEventListener('click', () => {
    const url = new URL('https://api.mymemory.translated.net/get');
    const param = { q: input.value, langpair: 'en|de' };
    url.search = new URLSearchParams(param).toString();
    fetch(url)
    .then((response) => response.json())
        .then((json) => {
            output.value = json.responseData.translatedText;
        });
  });


  const french = document.querySelector('#french');
french.addEventListener('click', () => {
    const url = new URL('https://api.mymemory.translated.net/get');
    const param = { q: input.value, langpair: 'en|fr' };
    url.search = new URLSearchParams(param).toString();
    fetch(url)
    .then((response) => response.json())
        .then((json) => {
            output.value = json.responseData.translatedText;
        });
  });
reset.addEventListener('click', () => {
    output.value = "";
    input.value = "";
});
