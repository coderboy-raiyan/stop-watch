let startBtn = document.querySelector(".start");
let resetBtn = document.querySelector(".reset");
let pauseBtn = document.querySelector(".pause");

let minutes = document.querySelector("#minutes");
let seconds = document.querySelector("#seconds");
let hours = document.querySelector("#hours");

let hour;
let min;
let sec = 0;
let time;
let watchIsRunning = false;

function start() {
  if (!watchIsRunning) {
    watchIsRunning = true;
    time = setInterval(function () {
      sec++;
      let { minute, second, hour } = getTime(sec);
      minutes.innerHTML = minute < 10 ? "0" + minute : minute;
      seconds.innerHTML = second < 10 ? "0" + second : second;
      hours.innerHTML = hour < 10 ? "0" + hour : hour;
    }, 1000);
  }
}
function reset() {
  watchIsRunning = false;
  clearInterval(time);
  min = 0;
  sec = 0;
  minutes.innerHTML = "00";
  seconds.innerHTML = "00";
}
function pause() {
  watchIsRunning = false;
  clearInterval(time);
}

function getTime(sec) {
  let minute = parseInt(sec / 60);
  let second = parseInt(sec % 60);
  let hour = parseInt(sec / 3600);
  return {
    minute,
    second,
    hour,
  };
}

startBtn.addEventListener("click", start);
resetBtn.addEventListener("click", reset);
pauseBtn.addEventListener("click", pause);
