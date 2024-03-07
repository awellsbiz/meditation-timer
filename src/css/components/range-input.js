const slider = document.getElementById('customRange');
const displayValue = document.getElementById('timer');
const startButton = document.getElementById('start-button');
const pauseButton = document.getElementById('pause-button');

let timer;

let totalSeconds;

let state = {
  isRunning: false,
};

document.addEventListener('DOMContentLoaded', () => {
  displayValue.innerHTML = slider.value;

  //Update the display value when the slider is changes

  slider.oninput = function () {
    displayValue.innerHTML = this.value;
    if (!state.isRunning) {
      UpdateTimerDisplay(this.value * 60);
    }
  };

  startButton.addEventListener('click', (e) => {
    e.preventDefault();
    if (!state.isRunning) {
      startTimer();
    } else {
      pauseTimer();
    }
  });
});

// update the timer display
function UpdateTimerDisplay(totalSeconds) {
  let minutes = Math.floor(totalSeconds / 60);
  let seconds = totalSeconds % 60;

  // make it so two digits are always displayed
  seconds = seconds < 10 ? '0' + seconds : seconds;
  minutes = minutes < 10 ? '0' + minutes : minutes;

  displayValue.innerHTML = `${minutes}:${seconds}`;
}

// timer function

function startTimer() {
  if (!state.isRunning) {
    if (totalSeconds === undefined) {
      totalSeconds = slider.value * 60;
    }
  }
  // defining the starting seconds

  UpdateTimerDisplay(totalSeconds);

  timer = setInterval(() => {
    totalSeconds--;
    UpdateTimerDisplay(totalSeconds);

    if (totalSeconds <= 0) {
      clearInterval(timer);
      state.isRunning = false;
      startingMinutes = slider.value;
    }
  }, 1000);

  state.isRunning = true;
  console.log(state.isRunning);
  startButton.innerHTML = 'Pause';
}

//pause function

function pauseTimer() {
  console.log(timer);
  if (state.isRunning) {
    clearInterval(timer);
    state.isRunning = false;
    startButton.innerHTML = 'Resume';
  }
}

//add interval to timer
