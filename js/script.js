let loadingtext = document.querySelector(".loading-text");
let bg = document.querySelector(".bg");
let welcome = document.querySelector(".welcome-text");

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

let load = 0;

let int = setInterval(blur, 50);

function blur() {
  load++;
  if (load > 99) {
    clearInterval(int);
    loadingtext.style.display = "none";
    welcome.style.display = "block";
  }
  loadingtext.innerText = `${load}%`;
  loadingtext.style.opacity = scale(load, 0, 100, 20, 0);
  bg.style.filter = `blur(${scale(load, 0, 100, 20, 0)}px)`;
}
