import React from "react";
import classes from "./section4.module.css";

export default function Section4() {
  return (
    <div className={classes.section4}>
      <div className={classes.header}>
        <h2>
          My<span> Projects</span>
        </h2>
        <p>these are some of my projects as follow</p>
      </div>
      <div className={classes.Content}>
        <div>cards</div>
      </div>
    </div>
  );
}
