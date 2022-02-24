import React from "react";
type Tprops = React.ComponentProps<"input">;

const CustomInput = ({ ...props }: Tprops) => {
  return <input type="text" {...props} />;
};

export default CustomInput;
