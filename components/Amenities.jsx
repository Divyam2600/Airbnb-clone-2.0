import React from "react";
import data from "../data.json";
import WifiIcon from "../assets/icons/WifiIcon";
import TvIcon from "../assets/icons/TvIcon";
import EssentialsIcon from "../assets/icons/EssentialsIcon";
import FireExtinguisherIcon from "../assets/icons/FireExtinguisherIcon";
import FirstAidIcon from "../assets/icons/FirstAidIcon";
import HairDryerIcon from "../assets/icons/HairDryerIcon";
import IronIcon from "../assets/icons/IronIcon";

function Amenities({ amenities }) {
  amenities = amenities?.split(",");
  const filteredAmenities = data.displayAmenities.filter((value) => {
    return amenities?.find((element) => {
      return element === value.key;
    });
  });
  return (
    <div className="pt-6 pb-1">
      <p className="mb-4">What this place offers?</p>
      {filteredAmenities.map((amenity) => (
        <div
          key={amenity.key}
          className="mb-2 flex items-center space-x-2 text-xs font-normal text-gray-600"
        >
          <p>
            {amenity.name === "Wifi" && <WifiIcon className="h-4 w-4" />}
            {amenity.name === "Smart TV" && <TvIcon className="h-4 w-4" />}
            {amenity.name === "Hair Dryer" && (
              <HairDryerIcon className="h-4 w-4" />
            )}
            {amenity.name === "First Aid Kit" && (
              <FirstAidIcon className="h-4 w-4" />
            )}
            {amenity.name === "Fire Extinguisher" && (
              <FireExtinguisherIcon className="h-4 w-4" />
            )}
            {amenity.name === "Iron" && <IronIcon className="h-4 w-4" />}
            {amenity.name === "Essentials" && (
              <EssentialsIcon className="h-4 w-4" />
            )}
          </p>
          <p>{amenity.name}</p>
        </div>
      ))}
    </div>
  );
}

export default Amenities;
