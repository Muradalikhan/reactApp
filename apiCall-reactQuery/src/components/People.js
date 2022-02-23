import React from "react";
import { useQuery } from "react-query";
import { Person } from "./Person";

const fetchPeople = async () => {
  const res = await fetch("https://swapi.dev/api/people/");
  return res.json();
};

export const People = () => {
  const { data, status } = useQuery("people", fetchPeople);
  return (
    <>
      <div>People</div>
      {status === "error" && <div>Error</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <div>
          {data.results.map((person, ind) => (
            <Person Person={person} key={ind} />
          ))}
        </div>
      )}
    </>
  );
};
