const quizData = [
    {
        question: "Which of the following is the largest ocean on Earth?",
        choices: ["Atlantic Ocean", " Indian Ocean", "Pacific Ocean", "Southern Ocean"],
        correctAnswer: 2
    },

    {
        question: "Who was the first President of the United States?",
        choices: ["Thomas Jefferson", " George Washington", " John Adams", "Benjamin Franklin"],
        correctAnswer: 1
    },
    {
        question: "What is the currency of Brazil?",
        choices: ["Peso", " Real", " Reais", "Escudo"],
        correctAnswer: 1
    }
];

let currentQuestion = 0;
let score = 0;

function displayQuestion() {
    const questionElement = document.getElementById("question");
    const choiceElements = [
        document.getElementById("choice0"),
        document.getElementById("choice1"),
        document.getElementById("choice2"),
        document.getElementById("choice3")
    ];

    const currentQuizData = quizData[currentQuestion];
    questionElement.textContent = currentQuizData.question;

    for (let i = 0; i < currentQuizData.choices.length; i++) {
        choiceElements[i].textContent = currentQuizData.choices[i];
    }

    document.getElementById("progress").textContent = `Question ${currentQuestion + 1} of ${quizData.length}`;
}

function checkAnswer(choice) {
    const currentQuizData = quizData[currentQuestion];

    if (choice === currentQuizData.correctAnswer) {
        score++;
    }

    currentQuestion++;

    if (currentQuestion < quizData.length) {
        displayQuestion();
    } else {
        displayScore();
    }
}

function displayScore() {
    const quizContainer = document.getElementById("quiz");
    const scoreElement = document.getElementById("score");

    const percentage = (score / quizData.length) * 100;

    scoreElement.innerHTML = `<h1>Your Score: ${score} out of ${quizData.length}</h1>
                              <p>Percentage: ${percentage.toFixed(2)}%</p>`;
}

// Initial display
displayQuestion();
