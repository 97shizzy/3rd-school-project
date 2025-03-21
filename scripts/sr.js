document.querySelectorAll(".scroll a").forEach(link => {
    link.addEventListener("mouseenter", function() {
        document.querySelector(".scroll").style.animationPlayState = "paused";
    });
    link.addEventListener("mouseleave", function() {
        document.querySelector(".scroll").style.animationPlayState = "running";
    });
});