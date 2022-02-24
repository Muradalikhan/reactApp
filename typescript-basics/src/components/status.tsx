import React from "react";
type statusType = {
  status: "error" | "loading" | "success";
};

const Status = ({ status }: statusType) => {
  let msg;
  if (status === "loading") {
    msg = "loading...";
  } else if (status === "error") {
    msg = "error";
  } else if (status === "success") {
    msg = "success";
  }
  return <div>Status - {msg}</div>;
};

export default Status;
