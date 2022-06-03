import React from "react";
import img from "../../asset/images/quizImg.png";
import Congrtas from "../../asset/images/congrats.png";
import tryAgain from "../../asset/images/try_again.png";
import "./Result.css";

const Result = ({
  ScorePercentage,
  info,
  score,
  backToQuiz,
  EndQuiz,
  userAns,
  DownloadCertificate,
}) => {
  return (
    <div className="result">
      <div className="left">
        <div>
          <img src={img} alt="img" className="w-50 rounded-3 pb-3" />
        </div>
        <div>
          {ScorePercentage >= 60 ? (
            <img src={Congrtas} alt="img" className="w-50" />
          ) : (
            <img src={tryAgain} alt="img" className="w-25 rounded" />
          )}
        </div>
        <h4 className="m-5">
          {info.name} your score is {score} and percentage is{" "}
          {ScorePercentage.toFixed(2)}%
        </h4>
        <button className="App-btn mx-2 btnShadow" onClick={backToQuiz}>
          Back to quiz
        </button>
        <button className="App-btn mx-2 btnShadow" onClick={EndQuiz}>
          End Session
        </button>
        <button className="App-btn-long btnShadow" onClick={DownloadCertificate}>
          Download your Certificate
        </button>
      </div>
      <div className="right innerShadow p-3">
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
