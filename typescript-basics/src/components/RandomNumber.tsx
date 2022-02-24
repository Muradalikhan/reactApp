import React from "react";
type TRandomNumber = {
  value: number;
};

type TpositiveNum = TRandomNumber & {
  isPositive?: boolean;
  isNegative?: never;
  isZero?: never;
};
type TnegativeNum = TRandomNumber & {
  isPositive?: never;
  isNegative?: boolean;
  isZero?: never;
};
type TzeroNum = TRandomNumber & {
  isPositive?: never;
  isNegative?: never;
  isZero?: boolean;
};

type Tprops = TpositiveNum | TnegativeNum | TzeroNum;

const RandomNumber = ({ value, isPositive, isNegative, isZero }: Tprops) => {
  return (
    <>
      <div>RandomNumber</div>
      {value} is {isPositive && "positive"}
      {isNegative && "negative"}
      {isZero && "zero"}
    </>
  );
};

export default RandomNumber;
