const startDay = "10 Nov 24";

function countdown() {
  let offerStarts = new Date(startDay);
  let offerEnds = new Date();
  let totalTime = (offerStarts - offerEnds) / 1000;

  let days = Math.floor((totalTime / (24 * 60 * 60)) % 7);
  //   let myDay = times(days);
  let hours = Math.floor((totalTime / 3600) % 24);
  let minutes = Math.floor((totalTime / 60) % 60);
  let seconds = Math.floor(totalTime % 60);
  //   console.log(days, hours, minutes, seconds);

  document.getElementById("days").innerText = formateTime(days);
  document.getElementById("hours").innerText = formateTime(hours);
  document.getElementById("minutes").innerText = formateTime(minutes);
  document.getElementById("seconds").innerText = formateTime(seconds);
}
function formateTime(time) {
  return time < 10 ? `0${time}` : time;
}

setInterval(() => countdown(), 1000);
