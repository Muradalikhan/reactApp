import React from "react";
import classes from "./section2.module.css";
import userImg from "../../images/userImg.png";

function Section2() {
  return (
    <div className={classes.section2} id="sec-2">
      <div className={classes.header}>
        <h2>
          About<span> Us</span>
        </h2>
        <p>A little bit information About me</p>
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
            About<span> Me</span>
          </h1>
          <p className={classes.para}>Hello I'm Murad khan</p>
          <p className={classes.para}>
            I'm from Karachi, Pakistan. Since 3 years I’m working as web
            developer with Company Concept Recall and have developed many
            website and apart from it I have been part of web design project,
            office work and as freelancer.
          </p>
          <button className={classes.btn}>Check More</button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
