import React from "react";
type Iprops = {
  children: React.ReactNode;
};

const Parent = (props: Iprops) => {
  return <h1>{props.children}</h1>;
};

export default Parent;
