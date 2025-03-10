import { useState, useCallback } from "react";
import axios from "axios";

const useApi = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const makeRequest = useCallback(
    async (url, method = "GET", body = null, headers = {}) => {
      setLoading(true);
      setError(null);

      try {
        let response;

        if (method === "GET") {
          response = await axios.get(url, { headers });
        } else if (method === "POST") {
          response = await axios.post(url, body, { headers });
        }

        setData(response.data);
        return response.data;
      } catch (err) {
        setError(err.response?.data || "Something went wrong");
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, loading, error, makeRequest };
};

export default useApi;
