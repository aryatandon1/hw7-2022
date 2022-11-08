var video;



// document.querySelector("#play").addEventListener("click", function() {
// 	console.log("Play Video");
// });

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	console.log("Auto play is set to " + video.autoplay);
	console.log("Loop is set to " + video.loop);
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Clicked Play button");
	video.play();
	document.getElementById("volume").innerHTML = (video.volume * 100).toString() + '%';
	console.log("Video is being played");
});

document.querySelector("#pause").addEventListener("click", function() {
	console.log("Clicked Pause button");
	// video = document.querySelector('#pause');
	video.pause();
	console.log("Video is being paused");
});

document.querySelector("#slower").addEventListener("click", function() {
	console.log("Clicked Slow Down button")
	// video = document.querySelector('#slower');
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate);
	console.log("Video is being slowed down");
});

document.querySelector("#faster").addEventListener("click", function() {
	console.log("Clicked speed up button")
	// video = document.querySelector('#faster');
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate);
	console.log("Video is sped up");
});

document.querySelector("#orig").addEventListener("click", function() {
	console.log("Clicked Original button")
	// video = document.querySelector('#orig');
	video.classList.remove("#oldSchool");
	console.log("We removed oldSchool");
});

document.querySelector("#skip").addEventListener("click", function() {
	console.log("Skip part")
	// video = document.querySelector('#skip');
    if(video.currentTime + 10 >= video.duration ) {
		video.currentTime = 0;
	} else {
		video.currentTime = video.currentTime + 10;
	}
	console.log(video.currentTime);
});

document.querySelector("#vintage").addEventListener("click", function() {
	console.log("Styled part")
	// video = document.querySelector('#vintage');
	video.classList.add("#oldSchool");
	console.log("We added oldSchool");
});

document.querySelector("#slider").addEventListener("click", function() {
  video.volume = slider.value / 100;
  document.getElementById("volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#mute").addEventListener("click", function() {
	if(video.muted == false) {
		video.muted = true;
		document.getElementById("mute").innerHTML = "Unmute";
	} else {
		video.muted = false;
		document.getElementById("mute").innerHTML = "Mute";
	}
  });
