import Classes from "./section1.module.css";
import bgColor from "../../images/background-blob.svg";
import UserImg from "../../images/userImg.png";
import { useState } from "react";

function Section1() {
  const [showHead, setShowHead] = useState(false);
  return (
    <div className={Classes.profile1Section}>
      <div className={showHead ? Classes.showHeader : Classes.header}>
        <div className={Classes.name}>Portfolio</div>
        <div className={Classes.links}>
          <div className={Classes.link}>Home</div>
          <div className={Classes.link}>About</div>
          <div className={Classes.link}>Services</div>
          <div className={Classes.link}>Skills</div>
          <div className={Classes.link}>Contact</div>
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
          <p>Front end web developer</p>
          <p>
            Officia exercitation laboris non velit.Ut velit in eu incididunt
            anim ex anim ullamco magna dolore eu irure.Excepteur aute dolore
            enim ex aliquip labore ea est ipsum id laboris proident aliquip
            quis.Irure veniam in consectetur Lorem qui esse Lorem
            adipisicing.Est elit consectetur nostrud ex commodo esse ut aliquip
            reprehenderit ex deserunt.Incididunt anim sunt cupidatat qui anim
            non dolore non magna ea labore cillum ex.
          </p>
          <button className={Classes.profileBtn}>Download Cv</button>
        </div>
      </div>
    </div>
  );
}

export default Section1;
