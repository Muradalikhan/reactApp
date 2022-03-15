import React, { Component } from "react";
import GoogleMapReact from "google-map-react";
import img from "../images/marker.webp";

const AnyReactComponent = ({ text }) => (
  <div style={{ backgroundColor: "white" }}>
    <img src={img} alt="img" width={50} height={50} />
    <div>{text}</div>
  </div>
);

class SimpleMap extends Component {
  static defaultProps = {
    center: {
      lat: 24.860735,
      lng: 67.001137,
    },
    zoom: 11,
  };

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
              visibility: "off",
            },
          ],
        },
      ],
      gestureHandling: "greedy",
      disableDoubleClickZoom: true,
      minZoom: 11,
      maxZoom: 18,

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
  render() {
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: "50vh", width: "50%" }}>
        <GoogleMapReact
          options={this.getMapOptions}
          bootstrapURLKeys={{
            key: "AIzaSyDvQVehnjgS7mM96rUAPH7zng1Z3ggcZPY",
            // key: "AIzaSyAj-cAEEVHfEJ9arnny-8VT7x4f8f0nIO8",
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={24.860735} lng={67.001137} text="My Marker" />
        </GoogleMapReact>
      </div>
    );
  }
}

export default SimpleMap;
