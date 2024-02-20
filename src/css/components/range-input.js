const slider = document.getElementById('customRange');
const displayValue = document.getElementById('timer');

document.addEventListener('DOMContentLoaded', () => {
  const startButton = document.getElementById('start-button');

  displayValue.innerHTML = slider.value;

  //Update the display value when the slider is changes

  slider.oninput = function () {
    displayValue.innerHTML = this.value;
  };

  startButton.addEventListener('click', (e) => {
    e.preventDefault();
    startTimer();
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
  // defining the starting minutes and seconds
  let startingMinutes = slider.value;
  let totalSeconds = startingMinutes * 60;

  UpdateTimerDisplay(totalSeconds);

  let timer = setInterval(() => {
    totalSeconds--;
    UpdateTimerDisplay(totalSeconds);
  }, 1000);
}

// UpdateTimerDisplay();
