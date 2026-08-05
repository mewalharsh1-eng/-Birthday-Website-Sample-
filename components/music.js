 const music = document.getElementById("bgMusic");
const startBtn = document.getElementById("startBtn");

let playing = false;

startBtn.addEventListener("click", () => {

    if (!playing) {

        // Song 40 second se start hoga
        music.currentTime = 35;

        music.play();

        setTimeout(() => {

            document.getElementById("memories").scrollIntoView({
                behavior: "smooth",
                block: "start"
            });

        }, 1300);

        startBtn.innerHTML = "🎵 Music Playing ❤️";

        document.getElementById("celebrateMsg").innerHTML =
            "✨ Our Special Day Begins ❤️";

        playing = true;

    } else {

        music.pause();

        music.currentTime = 40;

        startBtn.innerHTML = "▶️ Play Music";

        playing = false;

    }

});

// 1:30 (90 sec) par automatically stop
music.addEventListener("timeupdate", () => {

    if (music.currentTime >= 90) {

        music.pause();

        music.currentTime = 40;

        startBtn.innerHTML = "▶️ Play Music";

        playing = false;

    }

});