import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
// -----------------------------------------------
//----------- All component-----------------------
import CustomPdfDesign from "./Component/pdf/customPdfDesign";
import HelloZip from "./Component/zip/helloZip";
import Sample from "./Component/pdf/sample";
import Input from "./Component/input/Input";
import TextEditor from "./Component/Editor/EditorInput";
import TextEditor2 from "./Component/TextEditor/TextEditor";
// -----------------------------------------------

function App() {
  return (
    <div className="App">
      <h1 className="m-5">React Pdf and Zip generator</h1>
      <Sample />
      <div className="m-5"></div>
      <CustomPdfDesign />
      <div className="m-5"></div>
      <HelloZip />
      <div className="m-5"></div>
      <Input />
      <div className="m-5"></div>
      <TextEditor/>
      <div className="m-5"></div>
      <TextEditor2/>
    </div>
  );
}

export default App;
