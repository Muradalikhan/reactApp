import React from "react";
import classes from "./section3.module.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";
import FadeIn from "react-fade-in";

export default function Section3() {
  return (
    <div className={classes.section3} id="sec-3">
      <div className={classes.header}>
        <h2>Skills</h2>
        <p>Here is what I am good at with </p>
      </div>
      <div className={classes.Content}>
        <div className={classes.left} data-aos="fade-up">
          <div className={classes.leftContent}>
            <label>Html</label>
            <Progress
              percent={88}
              status="success"
              className={classes.progressBar}
            />
            <label>Css</label>
            <Progress
              percent={80}
              status="success"
              className={classes.progressBar}
              theme={{
                success: {
                  color: "rgb(223, 105, 180)",
                },
              }}
            />
            <label>Bootstrap</label>
            <Progress
              percent={88}
              status="success"
              className={classes.progressBar}
            />
            <label>Javascript</label>
            <Progress
              percent={80}
              status="success"
              className={classes.progressBar}
              theme={{
                success: {
                  color: "rgb(223, 105, 180)"
                },
              }}
            />
          </div>
        </div>
        <div className={classes.right} data-aos="fade-up">
          <div className={classes.innerRight}>
            <div className={classes.circle}>
              <label className={classes.label}>React js</label>
              <Progress
                percent={88}
                status="success"
                type="circle"
                width={150}
                strokeWidth={7}
              />
            </div>
            <div className={classes.circle}>
              <label className={classes.label}>Next js</label>
              <Progress
                percent={88}
                status="success"
                type="circle"
                width={150}
                strokeWidth={7}
              />
            </div>
          </div>
          <div className={classes.innerRight}>
            <div className={classes.circle}>
              <label className={classes.label}>Mui </label>
              <Progress
                percent={88}
                status="success"
                type="circle"
                width={150}
                strokeWidth={7}
              />
            </div>
            <div className={classes.circle}>
              <label className={classes.label}>Firebase</label>
              <Progress
                percent={88}
                status="success"
                type="circle"
                width={150}
                strokeWidth={7}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
