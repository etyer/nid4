document.getElementById("title").addEventListener("click", function(event) {
    for (let i = 0; i < 10; i++) { // 10 tane kalp oluştur
        createHeart(event.pageX, event.pageY);
    }
});

function createHeart(x, y) {
    let heart = document.createElement("div");
    heart.innerHTML = "💜"; 
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Kalbin rastgele sağa sola kaymasını sağla
    let randomX = Math.random() * 100 - 50; 
    let randomY = Math.random() * 50 - 25;

    heart.style.left = `${x + randomX}px`;
    heart.style.top = `${y + randomY}px`;

    setTimeout(() => { heart
