const promise = fetch('https://api.ipify.org/?format=json');
promise
    .then((response) => response.json())
    .then((json) => {
        document.querySelector('.ipaddress').value = json.ip;
    });
