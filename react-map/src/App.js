import { useEffect, useState } from "react";
import "./App.css";
// import SimpleMap from "./component/Gmap";
// import UseGeoLocation from "./component/GeoLocatoin";
// import { GeoCode } from "./component/GeoCode";
// import MarkersMap from "./component/LocateMe";
import MapAutoComplete from "./component/AutoCompleteSerach/map";
let autocompleteAddress;

function App() {
  const [address, setAddress] = useState("");
  let changHandler = (e) => {
    setAddress(e.target.value);
  };
  console.log(address);
  useEffect(() => {
    autocompleteAddress = new window.google.maps.places.Autocomplete(
      document.getElementById("autocompleteAddress"),
      { types: ["geocode"] }
    );
    autocompleteAddress.addListener("place_changed", () => handlePlaceSelect());
  }, []);

  const handlePlaceSelect = () => {
    let addressObject = autocompleteAddress.getPlace();
    let address = addressObject.formatted_address;
    setAddress(address);
  };

  return (
    <div className="App">
      <input
        type="text"
        placeholder="search a location"
        value={address}
        onChange={changHandler}
        id="autocompleteAddress"
      />
      {/* <SimpleMap /> */}
      {/* <UseGeoLocation /> */}
      {/* {location.loaded
        ? JSON.stringify(location)
        : "Location data not available yet."} */}
      {/* <button onClick={getUserLocation}>Geo Location</button> */}

      {/* <GeoCode /> */}

      {/* <MarkersMap /> */}

      <MapAutoComplete />
    </div>
  );
}

export default App;
