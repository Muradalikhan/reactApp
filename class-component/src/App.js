import { Component } from "react";
import Clock from "./Component/Digitalclock";
import LifeCycle from "./Component/LifeCycle";
import Welcome from "./Component/Welcome";
import "./App.css";
import Form from "./Component/Form";

class App extends Component {
  render() {
    return (
      <div>
        {/* <Clock />
        <Welcome username="Murad" />
        <LifeCycle /> */}
        <Form/>
      </div>
    );
  }
}

export default App;
