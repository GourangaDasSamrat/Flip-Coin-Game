document.addEventListener('DOMContentLoaded', () => {
    const coinImage = document.getElementById('coin-image');
    const resultText = document.getElementById('result');
    const flipAgainButton = document.getElementById('flip-again');
    const flipSound = document.getElementById('flip-sound');
    const winsDisplay = document.getElementById('wins');
    const lossesDisplay = document.getElementById('losses');
    const flipCountInput = document.getElementById('flip-count');
    const themeToggle = document.getElementById('theme-toggle');

    let userChoice;
    let wins = 0;
    let losses = 0;

    document.getElementById('heads').addEventListener('click', () => {
        userChoice = 'Heads';
        flipCoin();
    });

    document.getElementById('tails').addEventListener('click', () => {
        userChoice = 'Tails';
        flipCoin();
    });

    flipAgainButton.addEventListener('click', () => {
        resultText.textContent = '';
        flipAgainButton.style.display = 'none';
        coinImage.style.animation = '';
    });

    themeToggle.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    function flipCoin() {
        const flips = parseInt(flipCountInput.value);
        let winCount = 0;

        flipSound.play();

        for (let i = 0; i < flips; i++) {
            const outcome = Math.random() > 0.5 ? 'Heads' : 'Tails';

            coinImage.style.animation = 'spin 1s ease-in-out';
            setTimeout(() => {
                coinImage.src = outcome === 'Heads' ? 'heads.png' : 'tails.png';
                if (userChoice === outcome) {
                    winCount++;
                }
            }, 1000);
        }

        setTimeout(() => {
            resultText.textContent = `You chose ${userChoice}. You won ${winCount} out of ${flips} flips.`;
            wins += winCount;
            losses += flips - winCount;

            winsDisplay.textContent = wins;
            lossesDisplay.textContent = losses;
            flipAgainButton.style.display = 'block';
        }, 1200);
    }
});