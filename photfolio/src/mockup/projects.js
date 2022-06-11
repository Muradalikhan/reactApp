//projects imges
import foodAppImg from "../images/projects/foodapp.png";
import creativeDesignImg from "../images/projects/creativeDesign.png";
import hotelManagementImg from "../images/projects/hotelManagement.png";
import yotubeCloneImg from "../images/projects/yotubeClone.png";
import ImgrotatingImg from "../images/projects/Imgrotating.png";

//technologies
import htmlImg from "../images/logo/htmllogo.png";
import cssImg from "../images/logo/csslogo.png";
import jsImg from "../images/logo/jslogo.png";
import firebaseImg from "../images/logo/firebaselogo.png";
import nodjsImg from "../images/logo/nodejslogo.png";
import reactImg from "../images/logo/reactlogo.png";
import reduxImg from "../images/logo/Reduxlogo.png";
import muiImg from "../images/logo/muilogo.png";

//proejects demo
const foodAppLink = "https://food-app-website.vercel.app/";
const hotelManagmentLink = "https://hotel-mangement.vercel.app/dashboard";
const youtubeCloneLink = "https://youtube-clone-two-psi.vercel.app/";
const creativeDesignLink = "https://creative-design-website.vercel.app/";

export const myProjects = [
  {
    img: foodAppImg,
    title: "Food App",
    demoLink: foodAppLink,
    sourceLink: "",
    technologies: [htmlImg, cssImg, jsImg],
  },
  {
    img: creativeDesignImg,
    title: "Creative Design",
    demoLink: creativeDesignLink,
    sourceLink: "",
    technologies: [htmlImg, cssImg, jsImg],
  },
  {
    img: hotelManagementImg,
    title: "Hotel Management",
    demoLink: hotelManagmentLink,
    sourceLink: "",
    technologies: [reactImg, muiImg, firebaseImg],
  },
];
