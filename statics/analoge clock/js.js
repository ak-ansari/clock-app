const sh1 = document.querySelector(".sh1");
const sh2 = document.querySelector(".sh2");
const mh1 = document.querySelector(".mh1");
const hh1 = document.querySelector(".hh1");
setInterval(() => {
  let date = new Date();
  let minuts = date.getMinutes();
  let hours = date.getHours();
  let seconds = date.getSeconds();
  if (hours > 12) {
    hours = hours - 12;
  }
  let hoursRotate;
  let minutesRotate;
  let secondsRotate;

  hoursRotate = 30 * hours + minuts / 2;
  console.log(hours);
  console.log(minuts);
  console.log(seconds);
  minutesRotate = 6 * minuts;
  secondsRotate = 6 * seconds;

  sh1.style.transform = `rotate(${secondsRotate}deg)`;
  sh2.style.transform = `rotate(${secondsRotate}deg)`;
  mh1.style.transform = `rotate(${minutesRotate}deg)`;
  hh1.style.transform = `rotate(${hoursRotate}deg)`;
}, 1000);
