document.addEventListener("dblclick", function() {
    // Kalp yaratma
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.innerHTML = "<3"; // Kalp simgesi
    heart.style.left = Math.random() * window.innerWidth + 'px';
    heart.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(heart);

    // Kalbin görünürlüğü
    setTimeout(() => {
        heart.style.opacity = 1;
    }, 100);

    // Kalbin kaybolması
    setTimeout(() => {
        heart.style.opacity = 0;
        setTimeout(() => {
            heart.remove();
        }, 500);
    }, 1500);
});
