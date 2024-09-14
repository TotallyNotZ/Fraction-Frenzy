let currentQuestion = { a: 0, b: 0 }; // Initialize currentQuestion
let score = 0; // Initialize score

function getRandomNumber(max) {
    return Math.floor(Math.random() * max) + 1;
}

function generateQuestion() {
    const a = getRandomNumber(20);  // Generate random number between 1 and 20
    const b = getRandomNumber(20);  // Generate random number between 1 and 20
    // Ensure a is always greater than or equal to b to avoid negative results
    if (a < b) {
        [a, b] = [b, a];
    }
    currentQuestion = { a, b };
    document.getElementById('question').textContent = `What is ${a} + ${b}?`;
    document.getElementById('answer').value = '';  // Clear the answer box
}

function updateScore(correct) {
    if (correct) {
        score += 1;
        document.getElementById('feedback').innerHTML = '<img src="effects/check.png" width="24" height="24" alt="Check"> Good job!';
        document.getElementById('feedback').style.display = 'block';
        document.getElementById('ding-sound').play();
    } else {
        score -= 1;
        document.getElementById('feedback').innerHTML = '<img src="effects/buzzer.png" width="24" height="24" alt="Buzzer"> Incorrect!';
        document.getElementById('feedback').style.display = 'block';
        document.getElementById('buzzer-sound').play();
    }
    document.getElementById('score').textContent = `Score: ${score}`;
    setTimeout(() => {
        document.getElementById('feedback').style.display = 'none';
        generateQuestion();
    }, 2500);
}

function checkAnswer() {
    const answer = parseInt(document.getElementById('answer').value, 10);
    const correctAnswer = currentQuestion.a + currentQuestion.b;

    if (isNaN(answer)) {
        alert('Please enter a valid number.');
        return;
    }

    updateScore(answer === correctAnswer);
}

document.getElementById('answer').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        checkAnswer();
    }
});

// Generate an initial question when the page loads
generateQuestion();
