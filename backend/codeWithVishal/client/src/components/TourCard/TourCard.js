import React from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import { useNavigate } from "react-router-dom";

export const TourCard = ({ title, name, description, imageFile, _id }) => {
  const navigate = useNavigate();
  const goToDetail = (id) => {
    navigate(`/singleTour/${id}`);
  };
  return (
    <MDBCard style={{ maxWidth: "22rem", margin: "20px", padding: "15px" }}>
      <MDBRipple
        rippleColor="light"
        rippleTag="div"
        className="bg-image hover-overlay"
      >
        <MDBCardImage
          src={imageFile}
          fluid
          alt={title}
          style={{ height: "300px", width: "100%" }}
        />
        <a>
          <div
            className="mask"
            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
          ></div>
        </a>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>{description}</MDBCardText>
        <MDBBtn onClick={() => goToDetail(_id)}>View Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};
