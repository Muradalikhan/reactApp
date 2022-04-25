import React, { useEffect } from "react";
import { MDBContainer, MDBCol, MDBRow, MDBSpinner } from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { getTourByUserId } from "../redux/features/tourSlice";
import { TourCard } from "../components/TourCard/TourCard";

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => ({ ...state.auth }));
  const { userTours, loading } = useSelector((state) => ({ ...state.tour }));
  const userId = user?.result._id;
  useEffect(() => {
    if (userId) {
      dispatch(getTourByUserId(userId));
    }
  }, [userId]);

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
        <MDBRow>{userTours.length === 0 && <h2>No data found</h2>}</MDBRow>

        <MDBRow>
          {userTours &&
            userTours.map((item, index) => (
              <MDBCol>
                <TourCard key={index} {...item} />
              </MDBCol>
            ))}
        </MDBRow>
      </MDBContainer>
    </div>
  );
};

export default Dashboard;
