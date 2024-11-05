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

    // Hoş bir şiiri gösterme
    if (!document.getElementById("poem-container").classList.contains("hidden")) {
        return; // Eğer şiir zaten görünüyorsa, çık
    }

    // İlk mesajı ve uyarıyı gizle
    document.getElementById("welcome-message").classList.add("hidden");
    document.getElementById("instruction").classList.add("hidden");

    // Şiir konteynerini göster
    const poem = `
Sessiz gözyaşın ve gülümsemen gülüm,
hıçkırıkların ve kahkahan gülüm.

pırıl pırıl beyaz dişli kahkahanın tekrarı.

Güz sabahı üzüm bağında
sıra sıra, büklüm büklüm kütüklerin tekrarı
kütüklerde salkımların
salkımlarda tanelerin
tanelerde aydınlığın,
aydınlıkta yüreğimin.`;
    
    document.getElementById("poem-container").innerText = poem;
    document.getElementById("poem-container").classList.remove("hidden");

    // Boş mesaj balonu ve üç noktayı göster
    const loadingMessage = document.createElement("p");
    loadingMessage.innerText = "•••";
    loadingMessage.style.fontSize = "30px";
    document.getElementById("poem-container").appendChild(loadingMessage);
    
    setTimeout(() => {
        loadingMessage.remove(); // Üç noktayı kaldır

        // Şiiri yavaşça yaz
        let i = 0;
        let interval = setInterval(() => {
            if (i < poem.length) {
                document.getElementById("poem-container").innerText += poem[i++];
            } else {
                clearInterval(interval);
                showEnterButton(); // Enter butonunu göster
            }
        }, 100);
    }, 4000); // 4 saniye bekle
});

// Enter tuşunu göster
function showEnterButton() {
    document.getElementById("enter-button").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("enter-button").style.opacity = 1;
    }, 100);
    document.getElementById("enter-instruction").classList.remove("hidden");
}

// Enter butonuna tıklama
document.getElementById("enter-button").addEventListener("click", function() {
    this.style.opacity = 0; // Enter butonunu gizle
    document.getElementById("enter-instruction").classList.add("hidden");

    // Mesaj gönderildi görünümü
    const sentMessage = document.createElement("p");
    sentMessage.innerText = "Mesaj gönderildi.";
    document.getElementById("poem-container").appendChild(sentMessage);

    // Çift tıklama isteği
    document.getElementById("final-message").classList.remove("hidden");
    document.getElementById("final-message").innerText = "TESEKKRUELRRRR";
    setTimeout(() => {
        document.getElementById("final-message").style.opacity = 1;
        askForDoubleClick(); // Son çift tıklama isteği
    }, 2000); // 2 saniye bekle
});

// Son çift tıklama isteği
function askForDoubleClick() {
    document.addEventListener("dblclick", function() {
        // Papatya ve kalp animasyonu
        for (let i = 0; i < 20; i++) {
            createFlowerHeart();
        }
    });
}

// Papatya ve kalp yaratma
function createFlowerHeart() {
    const flowerHeart = document.createElement("div");
    flowerHeart.className = "heart";
    flowerHeart.innerHTML = "<3"; // Kalp simgesi
    flowerHeart.style.left = Math.random() * window.innerWidth + 'px';
    flowerHeart.style.top = Math.random() * window.innerHeight + 'px';
    document.body.appendChild(flowerHeart);
    flowerHeart.style.opacity = 1;

    // Kalbin kaybolması
    setTimeout(() => {
        flowerHeart.style.opacity = 0;
        setTimeout(() => {
            flowerHeart.remove();
        }, 500);
    }, 1500);
}
