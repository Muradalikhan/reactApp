import React from "react";

export const Header = ({ setPage }) => {
  return (
    <div className="m-3">
      <button className="btn btn-dark" onClick={() => setPage("planets")}>
        Planets
      </button>
      <button className="btn btn-dark mx-2" onClick={() => setPage("people")}>
        People
      </button>
    </div>
  );
};
