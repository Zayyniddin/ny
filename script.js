let days = document.querySelector(".days"),
  hours = document.querySelector(".hours"),
  minutes = document.querySelector(".minutes"),
  seconds = document.querySelector(".seconds"),
  nextYearSpan = document.querySelector(".timer__h1-span");

function updateTimer() {
  const year = new Date().getFullYear();
  const nextYear = new Date(`January 01 ${year + 1} 00:00:00`);
  const currentTime = new Date();
  const gap = nextYear - currentTime;
  const daysLeft = Math.floor(gap / 1000 / 60 / 60 / 24);
  const hoursLeft = Math.floor((gap / 1000 / 60 / 60) % 24);
  const minutesLeft = Math.floor((gap / 1000 / 60) % 60);
  const secondsLeft = Math.floor((gap / 1000) % 60);

  days.textContent = daysLeft < 10 ? "0" + daysLeft : daysLeft;
  hours.textContent = hoursLeft < 10 ? "0" + hoursLeft : hoursLeft;
  minutes.textContent = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
  seconds.textContent = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

  nextYearSpan.textContent = nextYear.getFullYear();

  setTimeout(updateTimer, 1000);
}

updateTimer(); 