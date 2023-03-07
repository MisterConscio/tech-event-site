const eventDate = new Date("Dec 12, 2023 19:00:00");
const eventTimeStamp = eventDate.getTime();

const mainInterval = setInterval(function() {
  const now = new Date();
  const todayTimeStamp = now.getTime();

  const timeLeft = eventTimeStamp - todayTimeStamp;
  const daysLeft = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
  const hoursLeft = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutesLeft = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
  const secondsLeft = Math.floor((timeLeft % (1000 * 60)) / 1000);

  const timeDisplay = document.getElementById('contador')

  timeDisplay.innerHTML = `${daysLeft}d ${hoursLeft}h ${minutesLeft}m ${secondsLeft}s`;

  if (timeLeft < 0) {
    clearInterval(mainInterval);
    timeDisplay.innerHTML = "12 de Dezembro de 2023";
  }
}, 1000)
