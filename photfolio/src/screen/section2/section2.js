import React from "react";
import classes from "./section2.module.css";
import userImg from "../../images/userImg.png";

function Section2() {
  return (
    <div className={classes.section2} id="sec-2">
      <div className={classes.header}>
        <h2>
          A<span>bout</span>
        </h2>
        <p>Below is my personal info </p>
      </div>
      <div className={classes.content}>
        <div className={classes.left}>
          <div className={classes.bgColor}>
            <div className={classes.bgImg}>
              <img src={userImg} className={classes.img} />
            </div>
          </div>
        </div>
        <div className={classes.right}>
          <h1>
            My<span> Intro</span>
          </h1>
          <p className={classes.para}>Hello I'm Murad khan</p>
          <p className={classes.para}>
            I'm from Karachi, Pakistan. Since 2 years I’m working as web
            developer with software Company and have developed many website
            where currently I am working on react js and some other latest
            technologies and apart from it I have been part I was a team lead in
            my previous company, I am graduate from one of known University in
            Pakistan and got Bs degree. I am willing to work for your
            orginization.
          </p>
          <button className={classes.btn}>To Know more please contact </button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
