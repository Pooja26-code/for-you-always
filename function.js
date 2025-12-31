document.addEventListener("DOMContentLoaded", () => {
  document.body.classList.add("loaded");

  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  // Restore play state
  const isPlaying = localStorage.getItem("musicPlaying");
  const savedTime = localStorage.getItem("musicTime");

  if (savedTime) {
    music.currentTime = parseFloat(savedTime);
  }

  if (isPlaying === "true") {
    music.play().catch(() => {});
    if (btn) btn.innerText = "Pause Music 🔇";
  }

  // Save current time continuously
  music.addEventListener("timeupdate", () => {
    localStorage.setItem("musicTime", music.currentTime);
  });
});

// Play / Pause control
function toggleMusic() {
  const music = document.getElementById("bg-music");
  const btn = document.getElementById("music-btn");

  if (music.paused) {
    music.play();
    localStorage.setItem("musicPlaying", "true");
    btn.innerText = "Pause Music 🔇";
  } else {
    music.pause();
    localStorage.setItem("musicPlaying", "false");
    btn.innerText = "Play Music 🎵";
  }
}
