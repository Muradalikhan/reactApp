import React from "react";
import classes from "./section3.module.css";
import { Progress } from "react-sweet-progress";
import "react-sweet-progress/lib/style.css";

export default function Section3() {
  return (
    <div className={classes.section3}>
      <div className={classes.header}>
        <h2>Skills</h2>
        <p>Here is what I am good at with </p>
      </div>
      <div className={classes.Content}>
        <div className={classes.left}>
          <div className={classes.leftContent}>
            <label>Html</label>
            <Progress
              percent={88}
              status="success"
              className={classes.progressBar}
            />
            <label>Html</label>
            <Progress
              percent={80}
              status="success"
              className={classes.progressBar}
            />
            <label>Html</label>
            <Progress
              percent={88}
              status="success"
              className={classes.progressBar}
            />
            <label>Html</label>
            <Progress
              percent={80}
              status="success"
              className={classes.progressBar}
            />
            <label>Html</label>
            <Progress
              percent={88}
              status="success"
              className={classes.progressBar}
            />
            <label>Html</label>
            <Progress
              percent={88}
              status="success"
              className={classes.progressBar}
            />
          </div>
        </div>
        <div className={classes.right}>
          <div className={classes.innerRight}>
          <label>html</label>
          <Progress
            percent={88}
            status="success"
            type="circle"
            width={200}
            strokeWidth={7}
          />
          <label>html</label>
          <Progress
            percent={88}
            status="success"
            type="circle"
            width={200}
            strokeWidth={7}
          />
          <label>html</label>
          <Progress
            percent={88}
            status="success"
            type="circle"
            width={200}
            strokeWidth={7}
          />
          <label>html</label>
          <Progress
            percent={88}
            status="success"
            type="circle"
            width={200}
            strokeWidth={7}
          />
          </div>
         
        </div>
      </div>
    </div>
  );
}
