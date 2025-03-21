document.addEventListener("DOMContentLoaded", () => {
    const modal = document.querySelector(".mod");
    const button = document.querySelector(".play-button");
    const audio = document.getElementById("bg-music");

    button.addEventListener("click", () => {
        modal.style.display = "none"; 
        audio.play(); 
    });
});
