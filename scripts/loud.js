document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".mod");
    const button = document.querySelector(".play-button");
    const audio = document.getElementById("bg-music");
    const volumeControl = document.getElementById("volume");


    audio.volume = 0.5;

    button.addEventListener("click", function () {
            modal.style.display = "none";
            audio.play();
        });


    volumeControl.addEventListener("input", (event) => {
        audio.volume = event.target.value;
    });
});