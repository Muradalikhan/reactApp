import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import Child from "./components/Child";
import CusButton from "./components/CusButton";
import CustomInput from "./components/CustomInput";
import { Input, Input2 } from "./components/Input";
import Login from "./components/Login";
import Parent from "./components/Parent";
import RandomNumber from "./components/RandomNumber";
import Reducer from "./components/Reducer";
import Status from "./components/status";
import Toaster from "./components/Toaster";
import UseRefComp from "./components/UseRef";

function App() {
  // let name: string;
  // name = "murad";

  // let age: number;
  // age = 26;

  // let isLoggedIn: boolean;
  // isLoggedIn = true;

  // let array1: string[];
  // array1 = ["a", "b", "c"];

  // let array2: number[];
  // array2 = [1, 2, 3];

  // let mixArr: (string | number)[];
  // mixArr = [1, 2, 3, "a", "b", "c"];

  // let array3: string[] = [];
  // array3.push("a");

  // let obj: { name: string; age: number };
  // obj = { name: "murad", age: 26 };

  // let greet: (name: string) => void;
  // greet = (name) => {
  //   console.log(name);
  // };
  // greet("murad");

  // let add: (a: number, b: number) => number;
  // let result;
  // add = (a, b) => (result = a + b);
  // add(2, 4);
  // console.log(result);

  const [msg, setMsg] = useState<string>("");
  const [msg2, setMsg2] = useState<string>("");
  return (
    <div className="App">
      <h1> Welcome! to typescript</h1>
      <Status status="success" />

      <Parent>
        <Child />
      </Parent>

      <Button
        handleClick={(event, id) => {
          console.log(event, id);
        }}
        style={{ border: "none", backgroundColor: "tomato", padding: "10px" }}
      />
      {/* -------------------------------------------------------------------------------- */}
      <Input
        value={msg}
        onChange={(e) => {
          setMsg(e.target.value);
        }}
        style={{ padding: "10px" }}
      />
      <Input2
        value={msg2}
        onChange={(e) => {
          setMsg2(e.target.value);
        }}
        style={{ padding: "10px", width: "50%" }}
      />
      <p>{msg}</p>
      <p>{msg2}</p>
      {/* -------------------------------------------------------------------------------- */}

      <Login Component={Child} />

      <Reducer />

      <UseRefComp />

      <RandomNumber value={10} isPositive />
      <RandomNumber value={-10} isNegative />
      <RandomNumber value={0} isZero />

      {/* -------------------------------------------------------------------------------- */}
      <hr />
      <Toaster position="top-center" />

      <CusButton
        style={{
          backgroundColor: "black",
          color: "white",
          padding: "10px",
          border: "none",
        }}
      >
        primary
      </CusButton>

      <CustomInput
        onChange={(e) => {
          console.log(e.target.value);
        }}
      />
    </div>
  );
}

export default App;
