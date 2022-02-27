import React from "react";
import classes from "./section3.module.css";
import { Progress } from 'react-sweet-progress';
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
          <label>Html</label>
        <Progress percent={88} status="success" className={classes.progressBar}/>
        </div>
        <div className={classes.right}>right</div>
      </div>
    </div>
  );
}
