const noButton = document.getElementById('no-button');
const yesButton = document.getElementById('yes-button');
const subtitles = [
    "Warum tust du mir das an? 😢💔",
    "Habe ich etwas falsch gemacht? 🥺",
    "Ich dachte, wir hätten eine Verbindung... 😞",
    "Du brichst mir das Herz in tausend Teile... 💔😭",
    "Bitte sag Ja – ich flehe dich an! 🙏🥹",
    "Willst du wirklich einen Button weinen sehen? 😭😭😭",
    "...und ich dachte, wir wären Freunde... 😔💔",
    "Ich werde nie wieder derselbe sein... 😢💧",
    "...das war's dann wohl mit meinem Valentinstag... 🥀😞",
    "...du hast wirklich Nein gesagt? Ich bin enttäuscht... 😤",
    "...was wäre, wenn ich dir Blumen schenke? 🌹🌹🌹",
    "...ich habe einen Kuchen gebacken – nur für dich! 🎂❤️",
    "...ich kann tanzen, wenn du willst! 💃🕺✨",
    "...ich habe schon unsere Zukunft geplant – sag einfach Ja! 🔮✨",
    "...was wäre, wenn ich dir einen Witz erzähle? 😂",
    "...ich kann auch anders sein – probier's aus!",
    "...ich verspreche dir Abenteuer und Spaß!",
    "...du willst doch nicht allein sein am Valentinstag?",
    "...ich habe extra diesen Anzug angezogen! 🎩",
    "...bitte sag Ja – sonst muss ich Möbel werfen! 🛋️",
    "Du bist wie ein Sonnenaufgang – wunderschön! 🌅",
    "Mit dir ist jeder Tag Valentinstag! 💖",
    "Ich habe extra für dich geübt, 'Ja' zu hören! 🎶",
    "Du bist der Grund, warum ich existiere... 🥰",
    "Ohne dich wäre ich nur ein trauriger Button... 😔",
    "Sag Ja, und ich mache dich zur glücklichsten Person der Welt! 🌍✨",
    "Liebe ist wie ein Spiel – und du bist mein Hauptgewinn! 🎰❤️",
    "Du bist das Highlight meines Tages! 🌈",
    "Mit dir fühlt sich alles richtig an... 💕",
    "Du bist das Puzzleteil, das mir gefehlt hat! 🧩"
];

function getRandomPosition() {
    const x = Math.random() * (window.innerWidth - 100);
    const y = Math.random() * (window.innerHeight - 50);
    return { x, y };
}

function getRandomSubtitle() {
    return subtitles[Math.floor(Math.random() * subtitles.length)];
}

// Liste der Effekte
const effects = [
    // Effekt 1: Trauriger Regen
    () => {
        const rainContainer = document.createElement('div');
        rainContainer.classList.add('rain-container');
        for (let i = 0; i < 50; i++) {
            const drop = document.createElement('div');
            drop.classList.add('raindrop');
            drop.style.left = `${Math.random() * 100}vw`;
            drop.style.animationDelay = `${Math.random() * 2}s`;
            rainContainer.appendChild(drop);
        }
        document.body.appendChild(rainContainer);
        setTimeout(() => document.body.removeChild(rainContainer), 3000);
    },
    
    // Effekt 2: Wohnzimmer-Szene
    
    
    // Effekt 3: Der Button springt wie ein Ball
    () => {
        noButton.style.animation = 'bounce 1s infinite';
        setTimeout(() => noButton.style.animation = '', 2000);
    },

    // Effekt 4: Der Button wird unsichtbar
    () => {
        noButton.style.opacity = '0';
        setTimeout(() => noButton.style.opacity = '1', 2000);
    },

    // Effekt 5: Der Button wird winzig klein
    () => {
        noButton.style.transform = 'scale(0.2)';
        setTimeout(() => noButton.style.transform = 'scale(1)', 2000);
    },

    // Effekt 6: Der Button teleportiert sich blitzschnell
    () => {
        for (let i = 0; i < 5; i++) {
            setTimeout(() => {
                const { x, y } = getRandomPosition();
                noButton.style.position = 'absolute';
                noButton.style.left = `${x}px`;
                noButton.style.top = `${y}px`;
            }, i * 200);
        }
    },

    // Effekt 7: Der Button explodiert in Konfetti
    () => {
        const confettiContainer = document.createElement('div');
        confettiContainer.classList.add('confetti-container');
        
        for (let i = 0; i < 100; i++) {
            const confettiPiece = document.createElement('div');
            confettiPiece.classList.add('confetti');
            confettiPiece.style.left = `${Math.random() * 100}%`;
            confettiPiece.style.animationDelay = `${Math.random()}s`;
            confettiContainer.appendChild(confettiPiece);
        }

        document.body.appendChild(confettiContainer);
        
        setTimeout(() => document.body.removeChild(confettiContainer), 3000);
    },

    // Effekt 8: Der Button dreht sich wie verrückt
    () => {
        noButton.style.animation = 'spin 2s linear infinite';
        setTimeout(() => noButton.style.animation = '', 2000);
    },

    // Effekt 9: Der Bildschirm wird dunkel (Traurigkeit)
    () => {
        const overlay = document.createElement('div');
        overlay.classList.add('dark-overlay');
        overlay.textContent = 'Warum? 😢';
        document.body.appendChild(overlay);

        setTimeout(() => document.body.removeChild(overlay), 3000);
    },

    // Effekt 10: Ein Herz fliegt über den Bildschirm
    () => {
        const heart = document.createElement('div');
        heart.classList.add('flying-heart');
        heart.textContent = '❤️';
        
        heart.style.left = `${Math.random() * window.innerWidth}px`;
        
        document.body.appendChild(heart);

        setTimeout(() => document.body.removeChild(heart), 3000);
    }
];

// Event-Listener für den Nein-Button
noButton.addEventListener('mouseover', () => {
    const subtitleText = getRandomSubtitle();

    // Zeige einen zufälligen Untertitel an
    const subtitle = document.createElement('h2');
    subtitle.textContent = subtitleText;

    subtitle.style.position = 'absolute';
    subtitle.style.top = `${Math.random() * (window.innerHeight - 50)}px`;
    subtitle.style.left = `${Math.random() * (window.innerWidth - 200)}px`;
    document.body.appendChild(subtitle);

    // Positioniere den Button an eine zufällige Stelle
    const { x, y } = getRandomPosition();
    noButton.style.position = 'absolute';
    noButton.style.left = `${x}px`;
    noButton.style.top = `${y}px`;

    // Wähle einen zufälligen Effekt aus der Liste
    const randomEffect = effects[Math.floor(Math.random() * effects.length)];
    
	 randomEffect();

     setTimeout(() => {
        document.body.removeChild(subtitle);
    }, 2000);
});

// Wenn der "Nein"-Button geklickt wird
noButton.addEventListener('click', () => {
    alert('Du hast mich gefangen! Aber willst du wirklich Nein sagen? 🥺');
});

// Wenn der "Ja"-Button geklickt wird, leite zur "win.html" weiter
yesButton.addEventListener('click', () => {
    window.location.href = 'win.html';
});

