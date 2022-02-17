import "./login3.css";
import user3 from "../../images/user3.svg";
import person3 from "../../images/person3.svg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function Login3() {
  return (
    <div className="Login-3-section">
      <div className="Content-wrapper">
        <div className="form3-container" data-aos="fade-right">
          <img src={user3} alt="img" className="form3-img" />
          <h1>Login</h1>
          <div className="input-container">
            <i className="icon">
              <PersonIcon sx={{ color: "#50514f" }} />
            </i>
            <input type="text" placeholder="Username" className="form3-input" />
          </div>
          <div className="input-container">
            <i className="icon">
              <LockIcon sx={{ color: "#50514f" }} />
            </i>
            <input
              type="password"
              placeholder="Password"
              className="form3-input"
            />
          </div>
          <p className="forgot-password">forgot password</p>
          <button className="form3-btn">login</button>
        </div>
        <div data-aos="fade-left">
          <img src={person3} width="300px" className="person3" />
        </div>
      </div>
    </div>
  );
}

export default Login3;
