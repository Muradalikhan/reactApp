import React, { useEffect } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { getTour } from "../redux/features/tourSlice";
import moment from "moment";

const SingleTour = () => {
  const dispatch = useDispatch();
  const { tour, loading } = useSelector((state) => state.tour);
  const { id } = useParams();
  useEffect(() => {
    if (id) {
      dispatch(getTour(id));
    }
  }, [id]);

  return (
    <>
      {loading ? (
        <MDBSpinner className="mt-5" />
      ) : (
        <MDBCard className="mb-3">
          <MDBCardImage
            position="top"
            src={tour?.imageFile}
            alt="img"
            height={450}
          />
          <MDBCardBody>
            <MDBCardTitle>{tour?.title}</MDBCardTitle>
            <div className="d-flex justify-content-center">
              {tour?.tags?.map((tag) => (
                <MDBCardText className="px-2 fw-bold">#{tag}</MDBCardText>
              ))}
            </div>
            <MDBCardText>{tour?.description}</MDBCardText>
            <MDBCardText>
              <small className="text-muted">
                created {moment(tour?.createdAt).fromNow()}
              </small>
            </MDBCardText>
            <MDBCardText className="align-self-right">
              Author : {tour?.name}
            </MDBCardText>
          </MDBCardBody>
        </MDBCard>
      )}
    </>
  );
};

export default SingleTour;
