import React, { useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBTypography } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { getTours } from "../redux/features/tourSlice";
import { TourCard } from "../components/TourCard/TourCard";

const Home = () => {
  const { tours, loading } = useSelector((state) => ({ ...state.tour }));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTours());
  }, []);

  if (loading) {
    return <h2>Loading...</h2>;
  }
  return (
    <div
      style={{
        alignContent: "center",
        margin: "auto",
        padding: "15px",
        maxWidth: "1000px",
      }}
    >
      <MDBContainer>
        <MDBRow>{tours.length === 0 && <h2>No data found</h2>}</MDBRow>

        <MDBRow>
          {tours &&
            tours.map((item, index) => <TourCard key={index} {...item} />)}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Home;
