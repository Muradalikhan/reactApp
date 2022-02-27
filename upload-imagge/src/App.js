import { useState } from "react";
import "./App.css";
import styled from "styled-components";

const ImageWrapper = styled.div`
  border: 1px dashed lightgrey;
  width: 402px;
  height: 402px;
  border-radius: 10px;
  img {
    width: 400px;
    height: 400px;
    border-radius: 10px;
  }
`;

const Label = styled.label`
  padding: 10px;
  background-color: lightgrey;
  border-radius: 10px;
  width: 400px;
  margin-top: 10px;
`;

const Button = styled.button`
  padding: 10px;
  background-color: green;
  color: white;
  border-radius: 10px;
  width: 400px;
  margin-top: 10px;
`;

function App() {
  const [profileImage, setProfileImage] = useState(
    "https://www.pngall.com/wp-content/uploads/5/User-Profile-PNG.png"
  );
  const [bucket, setBucket] = useState([]);

  const imgHandler = (e) => {
    const reader = new FileReader();
    reader.onload = () => {
      if (reader.readyState === 2) {
        setProfileImage(reader.result);
      }
    };
    reader.readAsDataURL(e.target.files[0]);
  };

  const sendToBucket = () => {
    const obj = {
      id: 1,
      title: "image",
      img: profileImage,
    };

    setBucket([obj, ...bucket]);
  };

  return (
    <div className="App">
      <div className="img-upload">
        <h1>Add your Img</h1>
        <ImageWrapper>
          <img src={profileImage} alt="user" />
        </ImageWrapper>
        <input
          type="file"
          name="upload image"
          id="input"
          accept="image/*"
          style={{ display: "none" }}
          onChange={imgHandler}
        />
        <Label htmlFor="input">upload image</Label>
        <Button onClick={sendToBucket}>Send to bucket</Button>
      </div>
      <div className="bucket">
        {bucket.map((v, k) => {
          return (
            <div className="card" key={k}>
              <p>{v.id}</p>
              <img src={v.img} alt="img" />
              <h3>{v.title}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
