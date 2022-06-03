import React, { useEffect, useState } from "react";
import "./QuizApp.css";
import { javascript, react, typecript } from "./data";
import Result from "../QuizResult/Result";
import QuizCeritificate from "../QuizCeritificate/QuizCeritificate";

let timerId;

const QuizApp = ({ info, setStart }) => {
  const [index, setIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [timeCounter, setTimeCounter] = useState(10);
  const [quiz, setQuiz] = useState([]);
  const [userAns, setUserAns] = useState([]);
  const [quizComplete, setQuizComplete] = useState(false);
  const [certificateScree, setCertificateScree] = useState(false);

  const questionLimit = Number(info.questionNo);
  const ScorePercentage = (score / questionLimit) * 100;

  const quizToShow = () => {
    if (info.language === "Javascript") {
      setQuiz(javascript);
    } else if (info.language === "React Js") {
      setQuiz(react);
    } else if (info.language === "React Ts") {
      setQuiz(typecript);
    }
  };
  const timer = () => {
    if (!quizComplete) {
      timerId = setTimeout(() => {
        setTimeCounter(timeCounter - 1);
        if (timeCounter === 1) {
          setUserAns([
            ...userAns,
            { selectAns: "Time Out", CorrectAns: "not select" },
          ]);
          if (index < questionLimit - 1) {
            setIndex(index + 1);
          } else {
            setQuizComplete(true);
          }
        }
      }, 1000);
    }
  };

  useEffect(() => {
    quizToShow();
    if (timeCounter > 0) {
      timer();
    } else {
      setTimeCounter(10);
    }
  }, [index, timeCounter]);

  let selectAns = (selectAns, CorrectAns) => {
    setUserAns([...userAns, { selectAns, CorrectAns }]);
    if (selectAns === CorrectAns) setScore((prevscore) => ++prevscore);
    if (index < questionLimit - 1) {
      clearInterval(timerId);
      setIndex(index + 1);
      setTimeCounter(10);
    } else {
      setQuizComplete(true);
    }
  };

  let backToQuiz = () => {
    setUserAns([]);
    setTimeCounter(10);
    setScore(0);
    setIndex(0);
    setQuizComplete(false);
  };

  let EndQuiz = () => {
    setUserAns([]);
    setTimeCounter(10);
    setScore(0);
    setStart(false);
    setQuizComplete(false);
  };

  let DownloadCertificate = () => {
    setCertificateScree(true);
  };
  return !certificateScree ? (
    <div className="quizApp container p-5">
      <div>
        <h3>{info.language} Quiz</h3>
        <div>
          {index + 1}/{questionLimit}
          {!quizComplete && <span className="mx-5">Timer: {timeCounter}</span>}
        </div>
      </div>

      {!quizComplete ? (
        quiz.map((ques, ind) => {
          return (
            ind === index && (
              <div key={index}>
                <div className="question">{ques.question}</div>
                <div className="options">
                  {ques.option.map((option, key) => {
                    return (
                      <button
                        key={key}
                        onClick={() => selectAns(option, ques.answer)}
                        className="App-btn btnShadow w-100 my-2"
                      >
                        {option}
                      </button>
                    );
                  })}
                </div>
              </div>
            )
          );
        })
      ) : (
        <Result
          score={score}
          ScorePercentage={ScorePercentage}
          info={info}
          backToQuiz={backToQuiz}
          EndQuiz={EndQuiz}
          userAns={userAns}
          DownloadCertificate={DownloadCertificate}
        />
      )}
    </div>
  ) : (
    <QuizCeritificate info={info} ScorePercentage={ScorePercentage} />
  );
};

export default QuizApp;
