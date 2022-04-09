import React, { useEffect, useState } from "react";
import {
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBValidation,
  MDBIcon,
  MDBBtn,
  MDBCardFooter,
  MDBSpinner,
} from "mdb-react-ui-kit";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/features/authSlice";
import { toast } from "react-toastify";

const intialValue = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const Register = () => {
  const [formVal, setFormVal] = useState(intialValue);
  const { firstName, lastName, email, password, confirmPassword } = formVal;

  const { loading, error } = useSelector((state) => ({ ...state.auth }));
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const changeHandler = (e) => {
    const { name, value } = e.target;
    setFormVal({ ...formVal, [name]: value });
  };

  useEffect(() => {
    error && toast.error(error);
  }, [error]);
  const submitHandler = (e) => {
    e.preventDefault();
    // if (email && password) {
    //   dispatch(Register({ formVal, toast, navigate }));
    // }
  };
  return (
    <div
      style={{
        margin: "50px auto",
      }}
      className="col-md-6"
    >
      <MDBCard alignment="center">
        <MDBIcon fas icon="user-circle" className="fa-2x" />
        <h4>Sign In</h4>
        <MDBCardBody>
          <MDBValidation
            onSubmit={submitHandler}
            noValidate
            className="row g-3"
          >
            <div className="col-md-6">
              <MDBInput
                label="First Name"
                type="text"
                name="firstName"
                value={firstName}
                required
                invalid
                autoComplete="firstName"
                validation="please enter valid firstName"
                onChange={changeHandler}
                size="lg"
              />
            </div>
            <div className="col-md-6">
              <MDBInput
                label="Last Name"
                type="text"
                name="lastName"
                value={lastName}
                required
                invalid
                autoComplete="lastName"
                validation="please enter valid lastName"
                onChange={changeHandler}
                size="lg"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Email"
                type="email"
                name="email"
                value={email}
                required
                invalid
                autoComplete="username"
                validation="please enter valid email"
                onChange={changeHandler}
                size="lg"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Password"
                type="password"
                name="password"
                value={password}
                required
                invalid
                autoComplete="current-password"
                validation="please enter valid password"
                onChange={changeHandler}
                size="lg"
              />
            </div>
            <div className="col-md-12">
              <MDBInput
                label="Confirm Password"
                type="password"
                name="confirmPassword"
                value={confirmPassword}
                required
                invalid
                autoComplete="confirmPassword"
                validation="please enter same Password"
                onChange={changeHandler}
                size="lg"
              />
            </div>
            <div className="col-md-12">
              <MDBBtn style={{ width: "100%" }} className="mt-2" size="lg">
                {loading && (
                  <MDBSpinner
                    role="status"
                    size="sm"
                    tag="span"
                    className="me-2"
                  />
                )}
                Sign up
              </MDBBtn>
            </div>
          </MDBValidation>
          <MDBCardFooter>
            <Link to="/login">already have account? Sign In</Link>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Register;
