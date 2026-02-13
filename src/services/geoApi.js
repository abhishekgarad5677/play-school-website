import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const geoApi = createApi({
  reducerPath: "geoApi",
  baseQuery: fetchBaseQuery({
    // ip-api needs base URL, endpoint is "json/"
    baseUrl: "https://pro.ip-api.com/",
  }),
  endpoints: (builder) => ({
    getUserLocation: builder.query({
      // We'll pass the API key from component so it stays configurable
      query: ({ key }) => ({
        url: "json/",
        method: "GET",
        params: {
          fields: "status,message,country,regionName,countryCode,query,currency",
          key,
        },
      }),
    }),
  }),
});

export const { useGetUserLocationQuery, useLazyGetUserLocationQuery } = geoApi;
