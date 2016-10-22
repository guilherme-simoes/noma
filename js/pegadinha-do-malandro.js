var iframe = document.getElementById('video');

// $f == Froogaloop
var player = $f(iframe);

// bind events
var playButton = document.getElementById("play-video");
var playIcon = document.getElementById("play-icon");
playButton.addEventListener("click", function() {
  player.api("play");
  playIcon.className = "hide";
  playButton.className = "hide";
});
