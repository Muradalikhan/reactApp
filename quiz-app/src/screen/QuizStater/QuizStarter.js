import React, { useState } from "react";
import "./QuizStarter.css";
import Img from "../../asset/images/quizImg.jpg";
import QuizApp from "../QuizApp/QuizApp";
import "../../App.css";

const QuizStarter = () => {
  const [name, setName] = useState("");
  const [language, setLanguage] = useState("");
  const [questionNo, setQuestionNo] = useState("");
  const [dataObj, setDataObj] = useState({});
  const [start, setStart] = useState(false);

  const handleChange = (e) => {
    if (e.target.name === "name") {
      setName(e.target.value);
    } else if (e.target.name === "language") {
      setLanguage(e.target.value);
    } else if (e.target.name === "questionNo") setQuestionNo(e.target.value);
  };
  const startQuiz = () => {
    if (name !== "" && language !== "" && questionNo !== "") {
      setStart(true);
      const obj = {
        name,
        language,
        questionNo,
      };
      setDataObj(obj);
    } else {
      alert("empty field not allowed");
    }
  };
  return !start ? (
    <div className="Quiz-Starter">
      <h3>Set up your Quiz</h3>
      <div className="p-3 innerShadow">
        <div className="my-3 ">
          <img src={Img} alt="img" className="w-100 borderRadius" />
        </div>
      </div>
      <div className="innerShadow my-4">
        <input
          type="text"
          className="input p-4"
          placeholder="Your Name"
          aria-label="Username"
          name="name"
          aria-describedby="basic-addon1"
          value={name}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="innerShadow my-4">
        <select
          className="input p-4"
          name="language"
          value={language}
          onChange={(e) => handleChange(e)}
        >
          <option defaultValue>Select Quiz Language</option>
          <option value="Javascript">Javascript</option>
          <option value="React Js">React Js</option>
          <option value="React Ts">React Ts</option>
        </select>
      </div>
      <div className="innerShadow my-4">
        <select
          className="input  p-4"
          name="questionNo"
          value={questionNo}
          onChange={(e) => handleChange(e)}
        >
          <option defaultValue>Question</option>
          <option value="5">5</option>
          <option value="10">10</option>
          <option value="15">15</option>
        </select>
      </div>
      <button className="App-btn w-100 btnShadow" onClick={startQuiz}>
        Start Quiz
      </button>
    </div>
  ) : (
    <QuizApp info={dataObj} setStart={setStart} />
  );
};

export default QuizStarter;
