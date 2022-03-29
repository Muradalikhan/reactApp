import React from "react";
import "./QuizCeritificate.css";

const QuizCeritificate = ({ info, ScorePercentage }) => {
  return (
    <div className="QuizCeritificate">
      <div className="c-border">
        <h2 className="c-header">Quiz Ceritificate</h2>
        <div>
          <div className="c-name">Name : {info.name}</div>
          <p className="c-para">
            This is to certify that {info.name} has successfully completed the
            course of {info.language} with acheiving{" "}
            <i className="c-per">{ScorePercentage}%</i> . We apperciate his /
            her efforts for completing the course with our orginization and we
            would love to see you back in future , best of luck for your Career.
          </p>
        </div>
        <div className="c-footer">
          <div>Date :</div>
          <div>Signature :</div>
        </div>
      </div>
    </div>
  );
};

export default QuizCeritificate;
