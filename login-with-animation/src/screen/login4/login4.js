import "./login4.css";
import user4 from "../../images/user4.svg";
import person4 from "../../images/person4.svg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function Login4() {
  return (
    <div className="Login-4-section">
      <div className="Content-wrapper-4">
        <div className="form4-container" data-aos="fade-right">
          <img src={user4} alt="img" className="form4-img" />
          <h1>Login</h1>
          <div className="input-container">
            <i className="icon">
              <PersonIcon sx={{ color: "#50514f" }} />
            </i>
            <input type="text" placeholder="Username" className="form4-input" />
          </div>
          <div className="input-container">
            <i className="icon">
              <LockIcon sx={{ color: "#50514f" }} />
            </i>
            <input
              type="password"
              placeholder="Password"
              className="form4-input"
            />
          </div>
          <p className="forgot-password">forgot password</p>
          <button className="form4-btn">login</button>
        </div>
        <div data-aos="fade-left">
          <img src={person4} width="400px" className="person4" />
        </div>
      </div>
    </div>
  );
}

export default Login4;
