import "./App.css";
// import SimpleMap from "./component/Gmap";
import useGeoLocation from "./component/GeoLocatoin";

function App() {
  const location = useGeoLocation();
  let changHandler = (e) => {
    console.log(e.target.value);
  };

  const getUserLocation = () => {
    console.log(location.coordinates);
  };
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search a location"
        onChange={changHandler}
      />
      {/* <SimpleMap /> */}
      {/* {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet."} */}
      <button onClick={getUserLocation}>Geo Location</button>
    </div>
  );
}

export default App;
