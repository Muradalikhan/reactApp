import { MDBIcon, MDBNavbarToggler } from "mdb-react-ui-kit";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { setLogout } from "../../redux/features/authSlice";
import "./Header.css";

const Header = () => {
  const [show, setShow] = useState(false);
  const { user } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(setLogout());
  };
  return (
    <div className="header">
      <div className="logo">Tourism</div>
      <div className="links">
        <Link to="/">Home</Link>
        {user?.result?._id && (
          <>
            <Link to="/addTour">AddTour</Link>
            <Link to="/dashboard">Dashboard</Link>
          </>
        )}
        {user?.result?._id ? (
          <Link to="/login" onClick={handleLogout}>
            Logout
          </Link>
        ) : (
          <Link to="/login">Login</Link>
        )}
        {user?.result?._id && (
          <h5>
            {user.result.name} <MDBIcon icon="user-circle" />
          </h5>
        )}
        {show && (
          <MDBNavbarToggler
            type="button"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <MDBIcon icon="bars" fas color="white" />
          </MDBNavbarToggler>
        )}
      </div>
    </div>
  );
};

export default Header;
