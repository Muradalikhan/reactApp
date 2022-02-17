import "./login1.css";
import user1 from "../../images/user1.svg";
import person from "../../images/person.svg";
import wave from "../../images/wave.svg";
import PersonIcon from "@mui/icons-material/Person";
import LockIcon from "@mui/icons-material/Lock";

function Login1() {
  return (
    <div className="App">
      <div className="wave-container">
        <img src={wave} alt="blob" className="blob" />
        <img src={person} alt="person" className="person" />
      </div>
      <div className="form-container">
        <img src={user1} alt="img" className="form-img" />
        <h1>Login</h1>
        <div className="input-container">
          <i className="icon">
            <PersonIcon sx={{ color: "#50514f" }} />
          </i>
          <input type="text" placeholder="Username" className="form-input" />
        </div>
        <div className="input-container">
          <i className="icon">
            <LockIcon sx={{ color: "#50514f" }} />
          </i>
          <input
            type="password"
            placeholder="Password"
            className="form-input"
          />
        </div>
        <p className="forgot-password">forgot password</p>
        <button className="form-btn">login</button>
      </div>
    </div>
  );
}

export default Login1;
