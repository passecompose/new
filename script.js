// JavaScript for Navigation and Utility Functions
function navigateTo(page) {
    window.location.href = page;
}

// Game Logic Placeholder (can be expanded for more advanced functionality)
const GameEngine = (() => {
    const questions = [
        { question: "I have eaten", answer: "j'ai mangé" },
        { question: "She has arrived", answer: "elle est arrivée" },
        { question: "We have spoken", answer: "nous avons parlé" },
    ];

    let currentQuestionIndex = 0;

    function getCurrentQuestion() {
        return questions[currentQuestionIndex];
    }

    function checkAnswer(userAnswer) {
        const correctAnswer = getCurrentQuestion().answer.toLowerCase();
        const isCorrect = userAnswer.toLowerCase().trim() === correctAnswer;
        return { isCorrect, correctAnswer };
    }

    function nextQuestion() {
        currentQuestionIndex++;
        return currentQuestionIndex < questions.length;
    }

    return {
        getCurrentQuestion,
        checkAnswer,
        nextQuestion
    };
})();

function startGame() {
    loadQuestion();
}

function loadQuestion() {
    const questionData = GameEngine.getCurrentQuestion();
    document.getElementById('question').textContent = `Translate: "${questionData.question}"`;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').textContent = '';
}

function submitAnswer() {
    const userAnswer = document.getElementById('answer').value;
    const result = GameEngine.checkAnswer(userAnswer);

    document.getElementById('feedback').textContent = result.isCorrect ? "Correct!" : `Incorrect. The correct answer is: ${result.correctAnswer}`;
    document.getElementById('feedback').style.color = result.isCorrect ? "green" : "red";

    setTimeout(() => {
        if (GameEngine.nextQuestion()) {
            loadQuestion();
        } else {
            document.getElementById('feedback').textContent = "You've completed the game! Well done!";
        }
    }, 2000);
}
