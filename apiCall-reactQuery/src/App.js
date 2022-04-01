import { useState } from "react";
import { Plantes } from "./components/Plantes";
import { People } from "./components/People";
import "./App.css";
import { Header } from "./components/Header";
import UserComp from "./components/user";

const App = () => {
  const [page, setPage] = useState("planets");
  return (
    <div className="App m-3">
      {/* <Header setPage={setPage} />
      {page === "planets" ? <Plantes /> : <People />} */}
      <UserComp/>
    </div>
  );
};

export default App;
