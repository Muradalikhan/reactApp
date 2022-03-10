import React from "react";

export const AnalogClock = (props) => {
  let time = new Date(props.time);
  let clockContainer = {
    width: 200,
    height: 200,
    border: "1px solid black",
    borderRadius: "50%",
  };
  let secHand = {
    position: "relative",
    left: 100,
    top: 100,
    height: 1,
    width: "40%",
    backgroundColor: "red",
    transform: `rotate(${((time.getSeconds() / 60) * 360 - 90).toString()}deg)`,
    transformOrigin: "0% 0%",
  };
  let minHand = {
    position: "relative",
    left: 100,
    top: 100,
    height: 5,
    width: "30%",
    backgroundColor: "grey",
    transform: `rotate(${((time.getMinutes() / 60) * 360 - 90).toString()}deg)`,
    transformOrigin: "0% 0%",
    borderRadius: "0 5px 5px 0",
  };
  let hourHand = {
    position: "relative",
    left: 104,
    top: 94,
    height: 7,
    width: "20%",
    backgroundColor: "black",
    transform: `rotate(${((time.getHours() / 12) * 360 - 90).toString()}deg)`,
    transformOrigin: "0% 0%",
    borderRadius: "0 5px 5px 0",
  };
  return (
    <div style={clockContainer}>
      <div style={secHand}></div>
      <div style={minHand}></div>
      <div style={hourHand}></div>
    </div>
  );
};
