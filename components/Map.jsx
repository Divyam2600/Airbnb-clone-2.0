import React, { useState } from "react";
import Map, { Marker, Popup } from "react-map-gl";
import { getCenter } from "geolib";
import "mapbox-gl/dist/mapbox-gl.css";
import LocationPinIcon from "../assets/icons/LocationPinIcon";
import Image from "next/image";

function MapBox({ filteredResults }) {
  const coordinates = filteredResults.map((item) => ({
    latitude: item.fields.latitude,
    longitude: item.fields.longitude,
  }));
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    zoom: 15,
    latitude: center.latitude,
    longitude: center.longitude,
    pitch: 55, // pitch in degrees
    bearing: -50, // bearing in degrees
    width: "100%",
    height: "100%",
  });
  const [selectedLocation, setSelectedLocation] = useState({});
  return (
    <Map
      mapStyle="mapbox://styles/divyam2600/cl60qo9ra001814mrznkstp3p"
      mapboxAccessToken={process.env.mapbox_token}
      initialViewState={{ ...viewport }}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    >
      {filteredResults?.map((item) => (
        <div key={item.fields.longitude}>
          <Marker
            key={item.fields.latitude}
            longitude={item.fields.longitude}
            latitude={item.fields.latitude}
            offsetLeft={-20}
            offsetTop={-10}
          >
            <p
              onMouseEnter={() => setSelectedLocation(item.fields)}
              onMouseLeave={() => setSelectedLocation({})}
              aria-label="push-pin"
            >
              <LocationPinIcon className="h-8 w-8 animate-bounce cursor-pointer text-airbnb drop-shadow-sm" />
            </p>
          </Marker>
          {selectedLocation.longitude === item.fields.longitude ? (
            <Popup
              closeButton={false}
              latitude={item.fields.latitude}
              longitude={item.fields.longitude}
              className="bg-opacity-0 pb-4 drop-shadow-xl "
            >
              <div className="relative -m-3 -mb-[15px] text-xs capitalize">
                <div className="opacity-85 relative h-32 w-44">
                  <Image
                    alt="place"
                    src={`https://public.opendatasoft.com/explore/dataset/airbnb-listings/files/${item.fields.picture_url?.id}/300/`}
                    layout="fill"
                    className="rounded-lg"
                    objectFit="cover"
                  />
                </div>
                <div className="absolute bottom-0 w-full rounded-b-md bg-white bg-opacity-70 bg-clip-padding py-1 px-3 font-sans backdrop-blur-sm ">
                  <p className="font-semibold">{item.fields.name}</p>
                  <p className="text-[10px] font-light leading-4 text-gray-700">
                    {item.fields.smart_location}
                  </p>
                </div>
              </div>
            </Popup>
          ) : null}
        </div>
      ))}
    </Map>
  );
}

export default MapBox;
