const secretNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    const message = document.getElementById('loveMessage');
    const quote = document.getElementById('loveQuote');
    if (parseInt(userGuess) === secretNumber) {
        message.style.display = 'block';
        setTimeout(() => { message.style.opacity = '1'; }, 10);
        fetchLoveQuote();
    } else {
        alert('Oops! Try again, my love!');
    }
}

function fetchLoveQuote() {
    fetch('https://api.quotable.io/random?tags=love')
        .then(response => response.json())
        .then(data => {
            const quote = document.getElementById('loveQuote');
            quote.textContent = `"${data.content}" - ${data.author}`;
            quote.style.display = 'block';
            setTimeout(() => { quote.style.opacity = '1'; }, 10);
        })
        .catch(error => console.error('Error fetching quote:', error));
}
