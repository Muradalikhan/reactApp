import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import img from "../images/marker.webp";

const AnyReactComponent = () => (
  <div style={{ backgroundColor: "white" }}>
    <img src={img} alt="img" width={50} height={50} />
  </div>
);

const MarkerInfo = ({ text }) => (
  <div style={{ backgroundColor: "white", width: "200px" }}>
    <p>{text}</p>
  </div>
);

class SimpleMap extends Component {
  constructor(props) {
    super(props);
    this.marker = "";
    this.state = {
      position: {
        lat: "",
        lng: "",
      },
      zoom: 14,
    };
  }

  static getDerivedStateFromProps({ MarkerPosition }, state) {
    return {
      position: { lat: MarkerPosition.lat, lng: MarkerPosition.lng },
    };
  }

  getMapOptions = (maps) => {
    return {
      streetViewControl: true,
      scaleControl: true,
      fullscreenControl: false,
      styles: [
        {
          featureType: "poi.business",
          elementType: "labels",
          stylers: [
            {
              visibility: "on",
            },
          ],
        },
      ],
      gestureHandling: "greedy",
      disableDoubleClickZoom: true,
      minZoom: 11,
      maxZoom: 19,

      mapTypeControl: true,
      mapTypeId: maps.MapTypeId.SATELLITE,
      mapTypeControlOptions: {
        style: maps.MapTypeControlStyle.HORIZONTAL_BAR,
        position: maps.ControlPosition.BOTTOM_CENTER,
        mapTypeIds: [
          maps.MapTypeId.ROADMAP,
          maps.MapTypeId.SATELLITE,
          maps.MapTypeId.HYBRID,
        ],
      },

      zoomControl: true,
      clickableIcons: true,
    };
  };

  renderMarker(map, maps) {
    this.marker = new maps.Marker({
      position: { lat: this.state.position.lat, lng: this.state.position.lng },
      map,
      draggable: true,
    });
  }
  render() {
    console.log(this.state);
    return (
      <div style={{ height: "50vh", width: "50%" }}>
        <GoogleMapReact
          options={this.getMapOptions}
          bootstrapURLKeys={{
            key: "key",
          }}
          center={this.state.position}
          defaultZoom={this.state.zoom}
          yesIWantToUseGoogleMapApiInternals
          onGoogleApiLoaded={({ map, maps }) => this.renderMarker(map, maps)}
        >
          {/* <AnyReactComponent
            lat={this.state.position.lat}
            lng={this.state.position.lng}
          /> */}
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
