import "./App.css";
import SimpleMap from "./component/Gmap";
import UseGeoLocation from "./component/GeoLocatoin";
// import { GeoCode } from "./component/GeoCode";
// import MarkersMap from "./component/LocateMe";

function App() {
  let changHandler = (e) => {
    console.log(e.target.value);
  };

  const getUserLocation = () => {};
  return (
    <div className="App">
      <input
        type="text"
        placeholder="search a location"
        onChange={changHandler}
      />
      <SimpleMap />
      <UseGeoLocation />
      {/* {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet."} */}
      {/* <button onClick={getUserLocation}>Geo Location</button> */}

      {/* <GeoCode /> */}

      {/* <MarkersMap /> */}
    </div>
  );
}

export default App;
