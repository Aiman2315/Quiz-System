#!/usr/bin/env node
function startQuiz(questions) {
    let score = 0;
    questions.forEach((question, index) => {
        console.log(`Question ${index + 1}: ${question.question}`);
        question.options.forEach((option, optionIndex) => {
            console.log(`${optionIndex + 1}. ${option}`);
        });
        const userAnswer = parseInt(prompt("Enter your answer (1, 2, 3, etc.):") || "0");
        if (userAnswer === question.correctAnswerIndex + 1) {
            console.log("Correct!");
            score++;
        }
        else {
            console.log("Incorrect!");
        }
    });
    console.log(`Quiz completed. Your score: ${score}/${questions.length}`);
}
const questions = [
    {
        question: "When did Quaid e Azam born?",
        options: ["25 December 1876", "27 September 1896", "20 August 1870", "20 June 1890"],
        correctAnswerIndex: 1
    },
    {
        question: "What is 3 * 1?",
        options: ["3", "4", "5", "6"],
        correctAnswerIndex: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Mars", "Venus", "Jupiter", "Saturn"],
        correctAnswerIndex: 2
    }
];
startQuiz(questions);
export {};
