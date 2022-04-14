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

export const TourCard = ({ title, name, description, imageFile }) => {
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
        <MDBBtn href="#">View Details</MDBBtn>
      </MDBCardBody>
    </MDBCard>
  );
};
