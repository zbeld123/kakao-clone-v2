const statusContainer = document.querySelector(".status-bar");
const watch = statusContainer.querySelector(".status-bar__clock");

function getDate() {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();
  const seconds = date.getSeconds();

  watch.innerHTML = `${hours}:${minutes < 10 ? `0${minutes}` : `${minutes}`}:${
    seconds < 10 ? `0${seconds}` : `${seconds}`
  }`;
}

function init() {
  setInterval(getDate, 1000);
  getDate();
}

init();
