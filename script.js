function startGame() {
    window.location.href = 'game.html';
}

const questions = [
    { question: "I have eaten", answer: "j'ai mangé" },
    { question: "She has arrived", answer: "elle est arrivée" },
    { question: "We have spoken", answer: "nous avons parlé" },
];

let currentQuestionIndex = 0;

function checkAnswer() {
    const userAnswer = document.getElementById('answer').value.toLowerCase().trim();
    const correctAnswer = questions[currentQuestionIndex].answer;

    if (userAnswer === correctAnswer) {
        document.getElementById('feedback').textContent = "Correct!";
        document.getElementById('feedback').style.color = "green";
    } else {
        document.getElementById('feedback').textContent = `Incorrect. The correct answer is: ${correctAnswer}`;
        document.getElementById('feedback').style.color = "red";
    }

    setTimeout(() => {
        currentQuestionIndex++;
        if (currentQuestionIndex < questions.length) {
            loadNextQuestion();
        } else {
            document.getElementById('feedback').textContent = "You have completed the game!";
        }
    }, 2000);
}

function loadNextQuestion() {
    document.getElementById('question').textContent = `Translate: "${questions[currentQuestionIndex].question}"`;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}
