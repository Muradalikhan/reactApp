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
  email: "",
  password: "",
};
const Login = () => {
  const [formVal, setFormVal] = useState(intialValue);
  const { email, password } = formVal;

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
    if (email && password) {
      dispatch(login({ formVal, toast, navigate }));
    }
  };
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "50px",
      }}
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
              <MDBBtn style={{ width: "100%" }} className="mt-2" size="lg">
                {loading && (
                  <MDBSpinner
                    role="status"
                    size="sm"
                    tag="span"
                    className="me-2"
                  />
                )}
                Login
              </MDBBtn>
            </div>
          </MDBValidation>
          <MDBCardFooter>
            <Link to="/register">Don't have account? Signup</Link>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Login;
