import Classes from "./section1.module.css";
import bgColor from "../../images/background-blob.svg";
import UserImg from "../../images/userImg.png";
import { useState } from "react";
import { IconButton } from "@mui/material";
//icons
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import ArticleIcon from "@mui/icons-material/Article";
function Section1() {
  const [showHead, setShowHead] = useState(false);
  return (
    <div className={Classes.profile1Section} id="sec-1">
      <div className={showHead ? Classes.showHeader : Classes.header}>
        <a className={Classes.name} href="#sec-1">
          Portfolio
        </a>
        <div className={Classes.links}>
          <a className={Classes.link} href="#sec-1">
            Home
          </a>
          <a className={Classes.link} href="#sec-2">
            About
          </a>
          <a className={Classes.link} href="#sec-3">
            Skills
          </a>
          <a className={Classes.link} href="#sec-4">
            Projects
          </a>
          <a className={Classes.link}>Contact</a>
        </div>
      </div>
      <div
        className={showHead ? Classes.Menu : Classes.MenuShort}
        onClick={() => setShowHead(!showHead)}
      ></div>
      <div className={Classes.intro}>
        <div className={Classes.imgSection}>
          <img src={bgColor} className={Classes.bgColor} />
          <img src={UserImg} className={Classes.userImg} />
        </div>
        <div className={Classes.introSection}>
          <h1>I AM</h1>
          <h1 className={Classes.userName}>MURAD KHAN</h1>
          <p className={Classes.designation}>Front end web developer</p>
          <p className={Classes.para}>
            Hi There, I’m Front-End Web Developer. It's been 2 years, I’m
            working as web developer.I have developed many website and also
            provided my services to college students by getting their projects
            ready ASAP as a freelancer I have been part of some very good web
            design projects.I'm also learning Back-End Development and looking
            forward to be a Full Stack Web Developer.
          </p>
          <button className={Classes.profileBtn}>Download Cv</button>
          <div>
            <IconButton>
              <a href="https://github.com/muradalikhan" target="_blank">
                <GitHubIcon sx={{ color: "#fff" }} />
              </a>
            </IconButton>
            <IconButton>
              <a
                href="https://www.linkedin.com/in/murad-khan-dev/"
                target="_blank"
              >
                <LinkedInIcon sx={{ color: "#fff" }} />{" "}
              </a>
            </IconButton>
            <IconButton>
              <a href="https://twitter.com/MuradKh53217145" target="_blank">
                <TwitterIcon sx={{ color: "#fff" }} />
              </a>
            </IconButton>
            <IconButton>
              <a href="https://web.facebook.com/murad.khan.8/" target="_blank">
                <FacebookIcon sx={{ color: "#fff" }} />
              </a>
            </IconButton>
            <IconButton>
              <a href="https://medium.com/@murad.jaddoon/" target="_blank">
                <ArticleIcon sx={{ color: "#fff" }} />
              </a>
            </IconButton>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
