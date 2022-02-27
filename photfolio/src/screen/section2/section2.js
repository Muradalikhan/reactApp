import React from "react";
import classes from "./section2.module.css";
import userImg from "../../images/userImg.png";

function Section2() {
  return (
    <div className={classes.section2}>
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
          <p>Hello I'm Murad khan</p>
          <p>
            Incididunt occaecat quis esse quis.Esse cillum duis fugiat laboris
            cillum irure.Lorem velit consequat occaecat et anim proident
            elit.Irure consectetur enim non labore cupidatat velit dolor est
            mollit anim non.Id non enim nulla voluptate pariatur cillum occaecat
            sit.
          </p>
          <button className={classes.btn}>Check More</button>
        </div>
      </div>
    </div>
  );
}

export default Section2;
