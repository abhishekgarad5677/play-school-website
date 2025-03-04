import { useEffect, useState } from "react";

export default function useGeoLocation() {
  const [locationData, setLocationData] = useState(null);

  useEffect(() => {
    getLocation();
  }, []);

  async function getLocation() {
    try {
      const response = await fetch("http://ip-api.com/json");
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
      const data = await response.json();
      setLocationData(data);
    } catch (error) {
      console.error("Error fetching location data:", error);
    }
  }

  return {
    locationData: locationData,
    city: locationData?.city,
    lat: locationData?.lat,
    lon: locationData?.lon,
  };
}
