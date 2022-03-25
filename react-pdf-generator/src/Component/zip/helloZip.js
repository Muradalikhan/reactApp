import React, { Component } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";

// import userImg from "../../images/user.jpg";

export default class HelloZip extends Component {
  generateZipFile = () => {
    var zip = new JSZip();
    zip.file("Hello.txt", "Hello World\n");
    // var img = zip.folder("images");
    // img.file("user.jpg", userImg, { base64: true });
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      saveAs(content, "example.zip");
    });
  };
  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={this.generateZipFile}>
          Generate Zip File
        </button>
      </div>
    );
  }
}
