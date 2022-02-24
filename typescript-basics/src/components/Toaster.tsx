import React from "react";

type verticalType = "top" | "center" | "bottom";
type horizentalType = "left" | "center" | "right";

type Tposition = {
  position:
    | Exclude<`${verticalType}-${horizentalType}`, "center-center">
    | "center";
};

const Toaster = ({ position }: Tposition) => {
  return <div>Toaster -{position}</div>;
};

export default Toaster;
