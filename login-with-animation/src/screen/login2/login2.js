import "./login2.css";
import user2 from "../../images/user2.svg";
import person2 from "../../images/person2.svg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function Login2() {
  return (
    <div className="Login-2-section">
      <div className="Content-wrapper">
        <div className="form2-container" data-aos="fade-up">
          <img src={user2} alt="img" className="form2-img" />
          <h1>Login</h1>
          <div className="input-container">
            <i className="icon">
              <PersonIcon sx={{ color: "#50514f" }} />
            </i>
            <input type="text" placeholder="Username" className="form2-input" />
          </div>
          <div className="input-container">
            <i className="icon">
              <LockIcon sx={{ color: "#50514f" }} />
            </i>
            <input
              type="password"
              placeholder="Password"
              className="form2-input"
            />
          </div>
          <p className="forgot-password">forgot password</p>
          <button className="form2-btn">login</button>
        </div>
        <div>
          <img src={person2} width="300px" className="person2" />
        </div>
      </div>
    </div>
  );
}

export default Login2;
