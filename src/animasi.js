window.onload = () => {
  let img = document.querySelector("#doa1");
  let counter = document.querySelector("#hitung");
  let score = 0;
  let sound = new Audio("subhanallah.mp3");

  img.addEventListener("mousedown", () => {
    img.src = "berdoa2.png";
    sound.currentTime = 0;
    sound.play();
    addToCounter();
  });
  
  img.addEventListener("mouseup", () => {
    img.src = "berdoa1.png";
  });

  function addToCounter() {
    score++;
    counter.innerHTML = score;
  }

  sound.addEventListener("ended", () => {
    sound.currentTime = 0;
  });
};
