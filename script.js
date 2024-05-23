const startButtonSelector = ".button__start";
const stopButtonSelector = ".button__stop";
const hoursInputSelector = "#hours";
const minutesInputSelector = "#minutes";
const secondsInputSelector = "#seconds";
;
const hoursInput = document.querySelector(hoursInputSelector);
const minutesInput = document.querySelector(minutesInputSelector);
const secondsInput = document.querySelector(secondsInputSelector);
const startButton = document.querySelector(startButtonSelector);
const stopButton = document.querySelector(stopButtonSelector);

const delaySeconds = 5;

let intervalId;
let remainingTime;

let hours; 
let minutes;
let seconds;


setTimeout(() => {}, 2000);


function startTimer(event) {
    event.preventDefault();
    hours = parseInt(hoursInput.value);
    minutes = parseInt(minutesInput.value);
    seconds = parseInt(secondsInput.value);

    remainingTime = hours * 3600 + minutes * 60 + seconds;
    
    intervalId = setInterval(updateTimer, 1000);
    // console.log("remaningTime: ", remainingTime);
    document.documentElement.requestFullscreen();
    startButton.classList.add("hide")
    stopButton.classList.remove("hide")
    
}
function updateTimer() {
    if (remainingTime > 0) {
    remainingTime--

    hours = Math.floor(remainingTime / 3600);
    minutes = Math.floor(remainingTime  % 3600 / 60);
    seconds = Math.floor(remainingTime % 60);
    
    hoursInput.value = hours.toString().padStart(2, "0");
    minutesInput.value = minutes.toString().padStart(2, "0");
    secondsInput.value = seconds.toString().padStart(2, "0"); 
    } else {
        stopTimer();
    }
    
};
function stopTimer() {
    clearInterval(intervalId);
    
stopButton.classList.add("hide")
    setTimeout(() => {
    startButton.classList.remove("hide")
    document.exitFullscreen();
    },1000)
};


startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);



