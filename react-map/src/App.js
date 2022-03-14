import "./App.css";
import SimpleMap from "./Gmap";
function App() {
  let changHandler = (e) => {
    console.log(e.target.value);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search a location"
        onChange={changHandler}
      />
      <SimpleMap />
    </div>
  );
}

export default App;
