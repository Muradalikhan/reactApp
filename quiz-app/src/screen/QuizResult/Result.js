import React from "react";
import img from "../../asset/images/quizImg.jpg";
import Congrtas from "../../asset/images/congrats.jpg";
import tryAgain from "../../asset/images/try again.jpg";
import "./Result.css";

const Result = ({
  ScorePercentage,
  info,
  score,
  backToQuiz,
  EndQuiz,
  userAns,
}) => {
  console.log(score);
  return (
    <div className="result">
      <div className="left">
        <div>
          <img src={img} alt="img" className="w-25" />
        </div>
        <div>
          {ScorePercentage >= 60 ? (
            <img src={Congrtas} alt="img" className="w-25" />
          ) : (
            <img src={tryAgain} alt="img" className="w-25" />
          )}
        </div>
        <h4 className="m-5">
          {info.name} your score is {score} and percentage is{" "}
          {ScorePercentage.toFixed(2)}%
        </h4>
        <button className="App-btn mx-3" onClick={backToQuiz}>
          Back to quiz
        </button>
        <button className="App-btn" onClick={EndQuiz}>
          End Session
        </button>
      </div>
      <div className="right">
        <h3 className="summary">Check Answers</h3>
        <div className="ans-list">
          <div className="list-item">
            <div>Actual Ans</div>
            <div>Your Ans</div>
          </div>
          {userAns.map(({ selectAns, CorrectAns }, key) => {
            return (
              <div key={key} className="list-item">
                {/* <span>Actual Ans</span> */}
                <div>{selectAns}</div>
                {/* <span>your Ans</span> */}
                <div className={selectAns === CorrectAns ? "success" : "error"}>
                  {CorrectAns}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Result;
