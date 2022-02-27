import React from "react";

type btnType = React.ComponentProps<"button">;

const CusButton = ({ children, ...rest }: btnType) => {
  return <button {...rest}>{children}</button>;
};

export default CusButton;
