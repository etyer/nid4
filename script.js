document.addEventListener("DOMContentLoaded", function () {
    // İlk çift tıklama ile uyarıyı göster
    document.getElementById("alert-box").classList.remove("hidden");
    document.getElementById("instruction").style.opacity = 1;

    // Çift tıklama olayını dinle
    document.addEventListener("dblclick", function () {
        // Uyarı mesajını gizle
        document.getElementById("alert-box").classList.add("hidden");
        
        // Mesaj balonunu göster
        document.getElementById("message-container").classList.remove("hidden");
        document.getElementById("message-bubble").style.display = "block";

        // Mesaj balonunu açma animasyonu
        setTimeout(() => {
            document.getElementById("message-bubble").classList.remove("hidden");
            showTypingDots(); // Üç noktayı göster
        }, 500); // 0.5 saniye bekle
    });
});

// Üç noktayı göster ve şiiri yaz
function showTypingDots() {
    const dots = document.querySelector(".dots");
    const messageBubble = document.getElementById("message-bubble");

    // Üç nokta görünür olacak
    setTimeout(() => {
        dots.style.opacity = 1;
        setTimeout(() => {
            dots.style.opacity = 0; // Üç noktayı gizle
        }, 1000); // 1 saniye görünür
    }, 1000); // 1 saniye bekle

    // Şiiri yazma işlemi
    const poem = `
Sessiz gözyaşın ve gülümsemen gülüm,
hıçkırıkların ve kahkahan gülüm.

Pırıl pırıl beyaz dişli kahkahanın tekrarı.

Güz sabahı üzüm bağında
sıra sıra, büklüm büklüm kütüklerin tekrarı
kütüklerde salkımların
salkımlarda tanelerin
tanelerde aydınlığın,
aydınlıkta yüreğimin.`;

    // Mesaj balonunun içinde şiiri yaz
    let i = 0;
    let interval = setInterval(() => {
        if (i < poem.length) {
            document.getElementById("poem-text").innerText += poem[i++];
        } else {
            clearInterval(interval);
            showEnterKey(); // Enter tuşunu göster
        }
    }, 100); // 0.1 saniye aralıkla yaz
}

// Enter tuşunu göster
function showEnterKey() {
    const enterKey = document.getElementById("enter-key");
    enterKey.style.display = "block";
    enterKey.classList.remove("hidden");

    // Ekranın ortasında göster
    setTimeout(() => {
        enterKey.style.opacity = 1;
    }, 500); // 0.5 saniye bekle

    // Basma talimatını göster
    document.getElementById("enter-instruction").classList.remove("hidden");
    setTimeout(() => {
        document.getElementById("enter-instruction").style.opacity = 1;
    }, 1000); // 1 saniye bekle

    // Enter tuşuna basma olayı
    enterKey.addEventListener("click", function () {
        this.style.transform = "scale(0.9)"; // Tuş basma animasyonu
        setTimeout(() => {
            this.style.transform = "scale(1)"; // Tuşu geri büyüt
        }, 200); // 0.2 saniye bekle

        sendMessage(); // Mesajı gönder
    });
}

// Mesaj gönderilmiş gibi göster
function sendMessage() {
    const messageBubble = document.getElementById("message-bubble");
    const sentMessage = document.createElement("p");
    sentMessage.innerText = "Mesaj gönderildi.";
    sentMessage.style.fontSize = "20px";
    messageBubble.appendChild(sentMessage);

    // Son mesajı göster
    setTimeout(() => {
        const finalMessage = document.getElementById("final-message");
        finalMessage.style.opacity = 1;
        finalMessage.classList.remove("hidden");
        createFlowers(); // Çiçekleri oluştur
    }, 2000); // 2 saniye sonra
}

// Papatyaları oluştur
function createFlowers() {
    const emojis = ["🌼", "🔥", "🤍"];
    for (let i = 0; i < 50; i++) { // 50 çiçek oluştur
        setTimeout(() => {
            const flower = document.createElement("span");
            flower.innerText = emojis[Math.floor(Math.random() * emojis.length)];
            flower.classList.add("flower", "animate");
            flower.style.left = Math.random() * 100 + "vw"; // Ekranda rastgele konum
            flower.style.top = Math.random() * 100 + "vh"; // Ekranda rastgele konum
            document.body.appendChild(flower);
            
            // Çiçeğin kaybolması için zaman ayarla
            setTimeout(() => {
                flower.remove(); // Çiçeği kaldır
            }, 2000); // 2 saniye sonra
        }, i * 100); // Her 0.1 saniyede bir çiçek ekle
    }
    
    // Son olarak ekranı kapat
    setTimeout(() => {
        window.close(); // Tarayıcı penceresini kapat
    }, 8000); // 8 saniye sonra kapat
}
