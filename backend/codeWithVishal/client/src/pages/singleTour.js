import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTour } from "../redux/features/tourSlice";

const SingleTour = () => {
  const dispatch = useDispatch();
  const { tour } = useSelector((state) => state.tour);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
  }, [id]);

  console.log(tour);
  return (
    <>
      <MDBCard className="mb-3">
        <MDBCardImage position="top" src={tour?.imageFile} alt="img" />
        <MDBCardBody>
          <MDBCardTitle>Card title</MDBCardTitle>
          <MDBCardText>
            This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer.
          </MDBCardText>
          <MDBCardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </MDBCardText>
        </MDBCardBody>
      </MDBCard>
    </>
  );
};

export default SingleTour;
