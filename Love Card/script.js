const secretNumber = Math.floor(Math.random() * 10) + 1;
function checkGuess() {
    const userGuess = document.getElementById('guess').value;
    if (parseInt(userGuess) === secretNumber) {
        document.getElementById('loveMessage').style.display = 'block';
    } else {
        alert('Oops! Try again, my love!');
    }
}
