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
      "http://ip-api.com/json/?fields=status,message,continent,continentCode,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,currency,isp,org,as,asname,reverse,mobile,proxy,hosting,query",
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
