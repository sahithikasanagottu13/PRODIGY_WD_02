let timer;
let seconds = 0;
let isRunning = false;

const timeDisplay = document.getElementById('time');
const lapsDisplay = document.getElementById('laps');

document.getElementById('start').addEventListener('click', startTimer);
document.getElementById('pause').addEventListener('click', pauseTimer);
document.getElementById('reset').addEventListener('click', resetTimer);
document.getElementById('lap').addEventListener('click', addLap);

function startTimer() {
    if (!isRunning) {
        timer = setInterval(updateTime, 1000);
        isRunning = true;
    }
}

function pauseTimer() {
    clearInterval(timer);
    isRunning = false;
}

function resetTimer() {
    clearInterval(timer);
    seconds = 0;
    timeDisplay.textContent = '00:00:00';
    lapsDisplay.innerHTML = '';
    isRunning = false;
}

function updateTime() {
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds % 3600) / 60);
    let secs = seconds % 60;
    timeDisplay.textContent = `${format(hrs)}:${format(mins)}:${format(secs)}`;
}

function format(time) {
    return time < 10 ? `0${time}` : time;
}

function addLap() {
    let lapTime = timeDisplay.textContent;
    let lapItem = document.createElement('div');
    lapItem.textContent = `Lap: ${lapTime}`;
    lapsDisplay.appendChild(lapItem);
}
