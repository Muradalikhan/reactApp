import { MDBBtn } from "mdb-react-ui-kit";
import React from "react";
import { Link } from "react-router-dom";

const PageNotFound = () => {
  return (
    <div>
      <h1>404! PageNotFound</h1>
      <Link to="/">
        <MDBBtn>go to home</MDBBtn>
      </Link>
    </div>
  );
};

export default PageNotFound;
