 document.addEventListener("DOMContentLoaded", () => {
    const alertMessage = document.getElementById("alert");
    const messageContainer = document.getElementById("message-container");
    const enterKey = document.getElementById("enter-key");
    const finalMessage = document.getElementById("final-message");
    const poemText = document.getElementById("poem-text");

    // İlk uyarı için çift tıklama
    alertMessage.addEventListener("dblclick", () => {
        alertMessage.classList.add("hidden");
        messageContainer.classList.remove("hidden");
        showTypingDots();
    });

    // Şiiri yazan fonksiyon
    function showTypingDots() {
        let dots = document.querySelector(".dots");
        let interval = setInterval(() => {
            dots.innerText += ".";
            if (dots.innerText.length > 3) {
                dots.innerText = "";
            }
        }, 500);

        setTimeout(() => {
            clearInterval(interval);
            displayPoem();
        }, 3000);
    }

    function displayPoem() {
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

        let i = 0;
        let interval = setInterval(() => {
            if (i < poem.length) {
                poemText.innerText += poem[i++];
            } else {
                clearInterval(interval);
                showEnterKey();
            }
        }, 100); // 0.1 saniye aralıkla yaz
    }

    function showEnterKey() {
        enterKey.classList.remove("hidden");
        enterKey.addEventListener("click", () => {
            enterKey.classList.add("hidden");
            sendMessage();
        });
    }

    function sendMessage() {
        const finalText = document.createElement("div");
        finalText.className = "final-text";
        finalText.innerText = "Beyaz kalp <3";
        finalMessage.appendChild(finalText);
        finalMessage.classList.remove("hidden");

        const doubleClickMessage = document.createElement("div");
        doubleClickMessage.className = "double-click";
        doubleClickMessage.innerText = "Çift tıkla!!";
        finalMessage.appendChild(doubleClickMessage);

        doubleClickMessage.addEventListener("dblclick", () => {
            displayFlowers();
        });
    }

    function displayFlowers() {
        // Ekranı papatyalar ve kalpler ile doldur
        for (let i = 0; i < 50; i++) {
            const flower = document.createElement("div");
            flower.innerHTML = "🌼";
            flower.style.position = "absolute";
            flower.style.top = Math.random() * 100 + "vh";
            flower.style.left = Math.random() * 100 + "vw";
            flower.style.fontSize = "20px";
            document.body.appendChild(flower);
        }
        const heart = document.createElement("div");
        heart.innerHTML = "🤍";
        heart.style.position = "absolute";
        heart.style.top = "50%";
        heart.style.left = "50%";
        heart.style.transform = "translate(-50%, -50%)";
        heart.style.fontSize = "50px";
        document.body.appendChild(heart);

        // Ekranın kapanması
        setTimeout(() => {
            document.body.style.transition = "opacity 2s";
            document.body.style.opacity = 0;
            setTimeout(() => {
                document.body.innerHTML = "";
            }, 2000);
        }, 2000);
    }
});
