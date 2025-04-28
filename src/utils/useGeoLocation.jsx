import { useEffect, useState } from "react";
import useApi from "./api";

const useGeoLocation = () => {
  const {
    data: countryData,
    loading: loadingUserLocation,
    error,
    makeRequest: getUserLocation,
  } = useApi();

  const [countryCode, setCountryCode] = useState("IN");

  useEffect(() => {
    getUserLocation(
      `https://pro.ip-api.com/json/?fields=status,message,country,regionName,countryCode,query&key=${
        import.meta.env.VITE_AI_API_KEY
      }`,
      "GET",
      null
    );
  }, [getUserLocation]);

  useEffect(() => {
    if (countryData?.status === "success") {
      setCountryCode(countryData?.countryCode);
    }
  }, [countryData]);

  return {
    countryData,
    countryCode,
    loading: loadingUserLocation,
    error,
  };
};

export default useGeoLocation;
