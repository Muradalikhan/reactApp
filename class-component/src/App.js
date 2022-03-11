import { Component } from "react";
import Counter from "./Component/Counter";
// import Clock from "./Component/Digitalclock";
// import LifeCycle from "./Component/LifeCycle";
// import Welcome from "./Component/Welcome";
// import Form from "./Component/Form";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Clock />
        <Welcome username="Murad" />
        <LifeCycle /> */}
        {/* <Form/> */}

        <Counter />
      </div>
    );
  }
}

export default App;
