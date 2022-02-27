import React, { useState } from "react";
import { useQuery } from "react-query";
import { Planet } from "./planet";

const fetchPlanets = async (key) => {
  const pageNo = key.queryKey[1];
  const res = await fetch(`https://swapi.dev/api/planets/?page=${pageNo}`);
  return res.json();
};

export const Plantes = () => {
  const [pageno, setPageno] = useState(1);
  const { data, isPreviousData, status } = useQuery(
    ["planets", pageno],
    fetchPlanets,
    {
      keepPreviousData: true,
    }
  );
  console.log(data);
  return (
    <>
      <div>Plantes</div>

      {status === "error" && <div>Error</div>}
      {status === "loading" && <div>Loading...</div>}
      {status === "success" && (
        <div className="my-3">
          <button
            className="btn btn-info text-white"
            onClick={() => setPageno((old) => Math.max(old - 1, 1))}
            disabled={pageno === 1}
          >
            Previous
          </button>
          <span className="p-3 bg-dark text-white">{pageno}</span>
          <button
            className="btn btn-info text-white"
            onClick={() => {
              if (!isPreviousData && data.next) {
                setPageno((old) => old + 1);
              }
            }}
            disabled={!data.next}
          >
            Next
          </button>
          <div className="my-2">
            {data.results.map((planet, ind) => (
              <Planet Planet={planet} key={ind} />
            ))}
          </div>
        </div>
      )}
    </>
  );
};
