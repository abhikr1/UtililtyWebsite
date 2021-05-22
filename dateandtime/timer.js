
document.querySelector('#start').addEventListener('click', startTime);

function countdown() {
    let hour = document.querySelector('.hourfield');
let minute = document.querySelector('.minutefield');
let second = document.querySelector('.secondfield');
let hourfield = hour.value;
let minutefield = minute.value;
let secondfield = second.value;
    console.log(`Inside Countdown function ${secondfield}`)
    if(secondfield == 0) {
        if(minutefield == 0){
            if(hourfield == 0){
                hourfield = '00';
                minutefield = '00';
                secondfield = '00';
            }
            else{
                hourfield -= 1;
                minutefield = 59;
            }
        }
        else{
            minutefield -=1;
            secondfield = 59;
        }
    }
    else{
        console.log(`Second sub ${secondfield}`);
        secondfield -=1;
    }
    document.querySelector('.hourfield').value = hourfield;
    document.querySelector('.minutefield').value = minutefield;
    document.querySelector('.secondfield').value = secondfield;
}

function startTime() {
    console.log("aaaa")
    intervalId = setInterval(countdown, 1000);

}

document.querySelector('#reset').addEventListener('click', () => {
    document.querySelector('.hourfield').value = '00';
    document.querySelector('.minutefield').value = '00';
    document.querySelector('.secondfield').value = '00';
});