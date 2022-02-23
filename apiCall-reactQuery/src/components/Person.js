import React from "react";

export const Person = ({ Person }) => {
  return (
    <div className="card py-2">
      <h3>{Person.name}</h3>
      <p>gender- {Person.gender}</p>
      <p>birth year- {Person.birth_year}</p>
    </div>
  );
};
