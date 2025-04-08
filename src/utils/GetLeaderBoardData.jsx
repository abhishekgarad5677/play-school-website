import { useEffect } from "react";
import useApi from "./api";
import Cookies from "js-cookie";

const useLeaderboardData = (childName) => {
  const { data, makeRequest, loading, error } = useApi();

  useEffect(() => {
    if (!childName) return;

    const formData = new FormData();
    formData.append("StudentName", childName); // removed the trailing space

    const token = Cookies.get("authToken");

    makeRequest(
      "https://api-playschool.tmkocplayschool.com/api/StudentCategory/user/getleaderboard",
      "POST",
      formData,
      {
        "Content-Type": "multipart/form-data",
        Authorization: `Bearer ${token}`,
      }
    );
  }, [childName, makeRequest]);

  return { data, loading, error };
};

export default useLeaderboardData;
