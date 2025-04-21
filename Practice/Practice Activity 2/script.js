const audio = document.getElementById("hover-sound");
const content2 = document.querySelector(".content2");

content2.addEventListener("mouseenter", () => {
  audio.currentTime = 0; // Rewind to start
  audio.play();
});