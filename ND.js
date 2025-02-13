
window.onload = function() {
    setTimeout(function() {
        document.getElementById("title").classList.remove("hidden");
        document.getElementById("title").classList.add("fadeIn");
    }, 1500);

    // 2 saniye sonra paragrafı göster
    setTimeout(function() {
        document.getElementById("paragraph").classList.remove("hidden");
        document.getElementById("paragraph").classList.add("fadeIn");
    }, 3000);

    // Paragrafın altındaki butonu göster
    setTimeout(function() {
        document.getElementById("button").classList.remove("hidden");
        document.getElementById("button").classList.add("fadIn");
    }, 5000);
};

// Butona tıklanınca Sevgilerle Dila ve paragraf kaybolacak ve Nida <3 yazısı görünecek
document.getElementById("button").addEventListener("click", function() {
    document.getElementById("title").classList.add("hidden");
    document.getElementById("paragraph").classList.add("hidden");
    document.getElementById("button").classList.add("hidden");

    setTimeout(function() {
        document.getElementById("nida").classList.remove("hidden");
        document.getElementById("nida").classList.add("fadeIn");
    }, 1000);
});

// Kalp animasyonu başlatma
document.getElementById("nida").addEventListener("click", function(event) {
    for (let i = 0; i < 10; i++) { // 10 tane kalp oluştur
        createHeart(event.pageX, event.pageY);
    }
});

function createHeart(x, y) {
    let heart = document.createElement("div");
    heart.innerHTML = " 💜"; 
    heart.classList.add("heart");
    document.body.appendChild(heart);

    // Kalbin rastgele sağa sola kaymasını sağla
    let randomX = Math.random() * 100 - 50; 
    let randomY = Math.random() * 50 - 25;

    heart.style.left = `${x + randomX}px`;
    heart.style.top = `${y + randomY}px`;

    setTimeout(() => { heart.remove(); }, 2000); // Kalp kaybolması için süre
}

}
