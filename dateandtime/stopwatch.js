function startTime() {
    intervalId = setInterval(timer, 10);

}

function pauseTime() {
    clearInterval(intervalId);

}

function resetTime(){
    hour=0;
    minute =0;
    second=0;
    millisecond=0;

    document.querySelector('#hour').innerText='00';
    document.querySelector('#minute').innerText='00';
    document.querySelector('#second').innerText='00';
    document.querySelector('#millisecond').innerText='000';
    clearInterval(intervalId);


}

let hour =0;
let minute =0;
let second = 0;
let millisecond =0;

let intervalId;

document.querySelector('#start').addEventListener('click', startTime);
document.querySelector('#pause').addEventListener('click', pauseTime);
document.querySelector('#reset').addEventListener('click', resetTime);


function timer() {
    millisecond += 10;
    if (millisecond === 1000) {
        millisecond = 0;
        second += 1;
    }

    if (second === 60) {
        second = 0;
        minute += 1;
    }
    if (minute === 60) {
        minute = 0;
        hour += 1;
    }
    if (hour < 10) {
        document.querySelector('#hour').innerText = `0${hour}`;
    } else {
        document.querySelector('#hour').innerText = hour;
    }
    if (minute < 10) {
        document.querySelector('#minute').innerText = `0${minute}`;
    } else {
        document.querySelector('#minute').innerText = minute;
    }
    if (second < 10) {
        document.querySelector('#second').innerText = `0${second}`;
    } else {
        document.querySelector('#second').innerText = second;
    }
    if (millisecond < 10) {
        document.querySelector('#millisecond').innerText = `00${millisecond}`;
    } else if (millisecond < 100) {
        document.querySelector('#millisecond').innerText = `0${millisecond}`;
    } else {
        document.querySelector('#millisecond').innerText = millisecond;
    }
}
