import { Component } from "react";
// import Counter from "./Component/Counter";
// import Clock from "./Component/Digitalclock";
// import LifeCycle from "./Component/LifeCycle";
// import Welcome from "./Component/Welcome";
// import Form from "./Component/Form";
import "./App.css";
import Students from "./Component/StdList";

class App extends Component {
  render() {
    return (
      <div className="App">
        {/* <Welcome username="Murad" /> */}
        {/* {<Form />} */}

        {/* <LifeCycle /> */}
        {/* <Counter /> */}

        {/* <Clock /> */}

        <Students />
      </div>
    );
  }
}

export default App;
