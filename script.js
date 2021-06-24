const progress = document.getElementById("progress");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const circles = document.querySelectorAll(".circle");
let currentActive = 1;
let index = 0;
next.addEventListener("click", function () {
  currentActive++;
  if (currentActive > circles.length) {
    currentActive = circles.length;
  }
  update();
  removeActiveClasses();
  index++;
  panels[index].classList.add("active");
});
prev.addEventListener("click", function () {
  currentActive--;
  if (currentActive < 1) {
    currentActive = 1;
  }
  update();
  removeActiveClasses();
  index--;
  panels[index].classList.add("active");
});
function update() {
  circles.forEach((circle, idx) => {
    if (idx < currentActive) {
      circle.classList.add("active");
    } else {
      circle.classList.remove("active");
    }
  });
  const actives = document.querySelectorAll(".active");
  progress.style.width =
    ((actives.length - 2) / (circles.length - 1)) * 100 + "%";
  if (currentActive === 1) {
    prev.disabled = true;
  } else if (currentActive === circles.length) {
    next.disabled = true;
  } else {
    prev.disabled = false;
    next.disabled = false;
  }
}
const panels = document.querySelectorAll(".panel");
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}

for (let i = 0; i < panels.length; i++) {
  panels[i].addEventListener("click", function () {
    removeActiveClasses();
    panels[i].classList.add("active");
  });
}
