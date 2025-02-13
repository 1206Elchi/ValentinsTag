// Liste von Sprüchen
const quotes = [
    "Liebe ist wie ein Spiel – und du hast gewonnen! ❤️",
    "Ich wusste, dass du Ja sagen würdest! 🥰",
    "Jetzt bin ich der glücklichste Mensch der Welt! 🌹",
    "Zusammen sind wir unschlagbar! 💪",
    "Danke, dass du mein Valentins-Partner bist! 💖",
    "Das war die beste Entscheidung deines Lebens! 😉",
    "Liebe liegt in der Luft... und du hast sie gefangen! 🕊️",
    "Du hast mein Herz erobert! 💘",
];

// Funktion zum Anzeigen eines zufälligen Spruchs
function displayRandomQuote() {
    const quoteElement = document.getElementById('quote');
    
	const randomIndex = Math.floor(Math.random() * quotes.length);
    
	quoteElement.textContent = quotes[randomIndex];
}

// Funktion zum Neustarten des Spiels
function restartGame() {
	window.location.href = 'index.html';
}

// Zeige sofort einen zufälligen Spruch an
displayRandomQuote();
