import React, { useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { getTours } from "../redux/features/tourSlice";
import { TourCard } from "../components/TourCard/TourCard";

const Home = () => {
  const { tours, loading } = useSelector((state) => ({ ...state.tour }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTours());
  }, []);

  if (loading) {
    return <MDBSpinner className="mt-5" />;
  }
  return (
    <div
      style={{
        alignContent: "center",
        margin: "auto",
        padding: "15px",
        maxWidth: "90%",
      }}
    >
      <MDBContainer>
        <MDBRow>{tours.length === 0 && <h2>No data found</h2>}</MDBRow>

        <MDBRow>
          {tours &&
            tours.map((item, index) => (
              <MDBCol>
                <TourCard key={index} {...item} />
              </MDBCol>
            ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
