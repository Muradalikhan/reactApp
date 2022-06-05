import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./App.css";
import Dashboard from "./screen/dashboard";
import ThemeConfig from "./theme";

const App = () => {
  return (
    <>
      <ThemeConfig>
        <Dashboard />
      </ThemeConfig>
    </>
  );
};

export default App;
