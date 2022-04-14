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
import { googleSignIn, login } from "../redux/features/authSlice";
import { toast } from "react-toastify";
import GoogleLogin from "react-google-login";

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

  const googleSuccess = (resp) => {
    const email = resp?.profileObj?.email;
    const name = resp?.profileObj?.name;
    const token = resp?.tokenId;
    const googleId = resp?.googleId;
    const result = { email, name, token, googleId };
    dispatch(googleSignIn({ result, navigate, toast }));
  };
  const googleFailure = (error) => {
    toast.error(error);
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
      <MDBCard alignment="center" className="p-5">
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
          <br />
          <GoogleLogin
            clientId="177884607149-i2sm9dulji6u4orpjp6qbaj8vlrm0f5l.apps.googleusercontent.com"
            render={(renderProps) => (
              <MDBBtn
                style={{ width: "100%" }}
                color="danger"
                size="lg"
                onClick={renderProps.onClick}
                disabled={renderProps.disabled}
              >
                <MDBIcon className="me-2" fab icon="google" />
                Login with Google
              </MDBBtn>
            )}
            onSuccess={googleSuccess}
            onFailure={googleFailure}
            cookiePolicy="single_host_origin"
          />
          <MDBCardFooter>
            <Link to="/register">Don't have account? Signup</Link>
          </MDBCardFooter>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};

export default Login;
