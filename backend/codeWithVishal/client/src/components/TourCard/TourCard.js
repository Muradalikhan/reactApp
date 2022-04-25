import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRipple,
} from "mdb-react-ui-kit";
import "./TourCard.css";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

export const TourCard = ({ title, name, description, imageFile, _id }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const [writeAccess, setWriteAccess] = useState(false);

  useEffect(() => {
    console.log(location.pathname);
    if (location.pathname === "/dashboard") {
      setWriteAccess(true);
    } else {
      setWriteAccess(false);
    }
  }, []);
  const goToDetail = (id) => {
    navigate(`/singleTour/${id}`);
  };
  const goToEdit = (id) => {
    navigate(`/editTour/${id}`);
  };
  const goToDelete = (id) => {};
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
        <div className="name">{name}</div>
      </MDBRipple>
      <MDBCardBody>
        <MDBCardTitle>{title}</MDBCardTitle>
        <MDBCardText>
          {description.length > 45
            ? description.slice(0, 45) + "..."
            : description}
        </MDBCardText>
        <MDBBtn onClick={() => goToDetail(_id)}>View Details</MDBBtn>
        {writeAccess && (
          <div>
            <MDBBtn className="m-2" onClick={() => goToEdit(_id)}>
              Edit
            </MDBBtn>
            <MDBBtn className="m-2" onClick={() => goToDelete(_id)}>
              Delete
            </MDBBtn>
          </div>
        )}
      </MDBCardBody>
    </MDBCard>
  );
};
