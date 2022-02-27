import React from "react";
import { Inputprops } from "./Input.type";

const Input = ({ value, style, onChange }: Inputprops) => {
  return <input type="text" value={value} onChange={onChange} style={style} />;
};


const Input2 = ({ value, style, onChange }: Inputprops) => {
  return <input type="text" value={value} onChange={onChange} style={style} />;
};

export  {Input,Input2};
