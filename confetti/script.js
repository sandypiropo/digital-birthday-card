const jsConfetti = new JSConfetti();

const confettiButton = document.querySelector('#confettiButton');

confettiButton.addEventListener('click', () => {
    jsConfetti.addConfetti({
        emojis: ['🌈', '🐰', '✨', '🧡', '💗', '🤍', '🩷'],
    }).then(() => jsConfetti.addConfetti())
});
