function showHearts() {
    document.getElementById('firstMessage').classList.add('hidden');
    document.getElementById('heartsContainer').classList.remove('hidden');
    startHeartAnimation();
    setTimeout(() => {
        document.getElementById('heartsContainer').classList.add('hidden');
        document.getElementById('shakeMessage').classList.remove('hidden');
    }, 3000); // 3 saniye sonra ekrana geçiş yapar
}

function startHeartAnimation() {
    for (let i = 0; i < 50; i++) {
        createHeart();
    }
}

function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart');
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    heart.innerHTML = '❤️';
    document.getElementById('heartsContainer').appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}

function showScratchMessage() {
    document.getElementById('birthdayMessage').classList.add('hidden');
    document.getElementById('scratchMessage').classList.remove('hidden');
    // Burada kazıma animasyonunu ekleyin
}

document.getElementById('finalMessage').addEventListener('dblclick', () => {
    document.getElementById('finalMessage').classList.add('hidden');
    alert("Mesaj sona erdi, iyi ki doğdun Nida!");
});
