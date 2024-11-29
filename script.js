function moveRandomEl(elm) {
  elm.style.position = "absolute";
  elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
  elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

moveRandom.addEventListener("mouseenter", function (e) {
  moveRandomEl(e.target);

  function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");
moveRandom.addEventListener("mouseenter", function (e) {
    moveRandomEl(e.target);
});

const sayYes = document.querySelector("#say-yes");
sayYes.addEventListener("click", function (e) {
    e.preventDefault();
    for (let i = 0; i < 20; i++) {
        createHeart();
    }
});

function createHeart() {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.style.top = Math.floor(Math.random() * 100) + "%";
    heart.style.left = Math.floor(Math.random() * 100) + "%";
    document.body.appendChild(heart);
    setTimeout(() => {
        heart.remove();
    }, 4000);
}  
});