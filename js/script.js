let ltext = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");
let aa = document.querySelector(".welcome-text");

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let load = 0;

let int = setInterval(blur, 50);

function blur() {
  load++;
  if (load > 99) {
    clearInterval(int);
    ltext.style.display = "none";
    aa.style.display = "block";
  }
  ltext.innerText = `${load}%`;
  ltext.style.opacity = scale(load, 0, 100, 20, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
