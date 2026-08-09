import { useState } from "react";
import "./App.css";

const questions = [
  {
    question: "What does HTML stand for?",
    options: [
      "Hyper Text Markup Language",
      "High Text Machine Language",
      "Hyperlink Text Management Language",
      "Home Tool Markup Language",
    ],
    answer: "Hyper Text Markup Language",
  },

  {
    question: "Which language is used to style web pages?",
    options: ["HTML", "CSS", "Python", "Java"],
    answer: "CSS",
  },

  {
    question: "Which language is React based on?",
    options: ["Java", "C++", "JavaScript", "Python"],
    answer: "JavaScript",
  },

  {
    question: "Which symbol is used for a comment in JavaScript?",
    options: ["//", "##", "<!-- -->", "**"],
    answer: "//",
  },

  {
    question: "Which hook is used to manage state in React?",
    options: ["useEffect", "useState", "useData", "useReact"],
    answer: "useState",
  },
];

function App() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [answerChecked, setAnswerChecked] = useState(false);
  const [quizFinished, setQuizFinished] = useState(false);

  const question = questions[currentQuestion];

  function selectAnswer(option) {
    if (answerChecked) {
      return;
    }

    setSelectedAnswer(option);
    setAnswerChecked(true);

    if (option === question.answer) {
      setScore(score + 1);
    }
  }

  function nextQuestion() {
    if (!selectedAnswer) {
      return;
    }

    if (currentQuestion === questions.length - 1) {
      setQuizFinished(true);
    } else {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer("");
      setAnswerChecked(false);
    }
  }

  function restartQuiz() {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedAnswer("");
    setAnswerChecked(false);
    setQuizFinished(false);
  }

  // Show result after completing the quiz
  if (quizFinished) {
    return (
      <div className="quiz-container">
        <div className="quiz-box">
          <h1>Quiz Completed!</h1>

          <h2>
            Your Score: {score} / {questions.length}
          </h2>

          <p>
            {score === questions.length
              ? "Excellent! You got everything correct!"
              : "Good job! Keep practicing to improve your score."}
          </p>

          <button
            className="restart-button"
            onClick={restartQuiz}
          >
            Restart Quiz
          </button>
        </div>
      </div>
    );
  }

  // Show quiz
  return (
    <div className="quiz-container">
      <div className="quiz-box">

        <h1>Quiz App</h1>

        <p className="question-number">
          Question {currentQuestion + 1} of {questions.length}
        </p>

        <h2>{question.question}</h2>

        <div className="options">
          {question.options.map((option) => {
            let className = "option";

            // Check answer after user selects an option
            if (answerChecked) {
              // Correct answer is always green
              if (option === question.answer) {
                className = "option correct";
              }
              // User's wrong answer is red
              else if (option === selectedAnswer) {
                className = "option wrong";
              }
            }

            return (
              <button
                key={option}
                className={className}
                onClick={() => selectAnswer(option)}
                disabled={answerChecked}
              >
                {option}
              </button>
            );
          })}
        </div>

        <button
          className="next-button"
          onClick={nextQuestion}
          disabled={!selectedAnswer}
        >
          {currentQuestion === questions.length - 1
            ? "Finish Quiz"
            : "Next Question"}
        </button>

        <p className="score">
          Score: {score}
        </p>

      </div>
    </div>
  );
}
export default App;
