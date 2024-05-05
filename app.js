var stopwatchDisplay = document.getElementById("stopwatch-display");
var startStopwatchButton = document.getElementById("start-stopwatch");
var stopStopwatchButton = document.getElementById("stop-stopwatch");
var resetStopwatchButton = document.getElementById("reset-stopwatch");

var timerDisplay = document.getElementById("timer-display");
var setTimerInput = document.getElementById("set-timer");
var startTimerButton = document.getElementById("start-timer");
var stopTimerButton = document.getElementById("stop-timer");

var stopwatchStartTime;
var stopwatchElapsedTime = 0;
var stopwatchInterval;

var timerStartTime;
var timerDuration = 0;
var timerInterval;

function startStopwatch() {
    stopwatchStartTime = Date.now() - stopwatchElapsedTime;
    stopwatchInterval = setInterval(function() {
        stopwatchElapsedTime = Date.now() - stopwatchStartTime;
        displayTime(stopwatchDisplay, stopwatchElapsedTime);
    }, 10);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchElapsedTime = 0;
    displayTime(stopwatchDisplay, stopwatchElapsedTime);
}

var timerInterval;
var timerDisplay = document.getElementById("timer-display");

function startTimer() {
    var timerDuration = 30000; 
    var timerStartTime = Date.now();
    clearInterval(timerInterval); // Clear any existing interval to prevent multiple timers running concurrently
    timerInterval = setInterval(function() {
        var currentTime = Date.now();
        var elapsedTime = currentTime - timerStartTime;
        var remainingTime = timerDuration - elapsedTime;
        if (remainingTime <= 0) {
            clearInterval(timerInterval);
            displayTime(timerDisplay, 0);
            alert("Timer Finished!");
        } else {
            displayTime(timerDisplay, remainingTime);
        }
    }, 10);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function displayTime(displayElement, time) {
    var minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((time % (1000 * 60)) / 1000);
    var milliseconds = Math.floor((time % 1000) / 10);
    displayElement.textContent = formatTime(minutes) + ":" + formatTime(seconds) + "." + formatTime(milliseconds);
}

function formatTime(time) {
    return time < 10 ? "0" + time : time;
}


startStopwatchButton.addEventListener("click", startStopwatch);
stopStopwatchButton.addEventListener("click", stopStopwatch);
resetStopwatchButton.addEventListener("click", resetStopwatch);

startTimerButton.addEventListener("click", startTimer);
stopTimerButton.addEventListener("click", stopTimer);
