import { useEffect } from "react";
import LocationItem from "./location-item";

import { useState } from "react";
import LikesProvider from "@/context/likes";

export default function LocationsGrid() {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocations();
  }, []);

  const getLocations = async () => {
    const response = await fetch(`/api/locations`);
    const data = await response.json();
    setLocations(data);
  };

  return (
    <div className="w-full gid grid grid-cols-3 gap-4">
      {locations.map((location, index) => (
        <LikesProvider>
          <LocationItem key={index} location={location}></LocationItem>
        </LikesProvider>
      ))}
    </div>
  );
}
