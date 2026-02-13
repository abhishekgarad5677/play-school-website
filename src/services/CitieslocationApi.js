import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { CitiesList } from "../utils/CitiesList";

export const CitieslocationApi = createApi({
  reducerPath: "CitieslocationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://www.countriesnow.space/api/v0.1/", // ✅ use www
  }),
  endpoints: (builder) => ({
    getCities: builder.query({
      async queryFn(args, _api, _extra, fetchWithBQ) {
        const country = (args?.country || "").trim();
        const state = (args?.state || "").trim();

        if (!country || !state) return { data: [] };

        // ✅ India local
        if (country.toLowerCase() === "india") {
          return { data: CitiesList?.[state] || [] };
        }

        // ✅ API
        const res = await fetchWithBQ({
          url: "countries/state/cities",
          method: "POST",
          body: { country, state },
          headers: { "Content-Type": "application/json" }, // ✅ force JSON
        });

        if (res.error) return { error: res.error };
        return { data: res.data?.data || [] };
      },
      serializeQueryArgs: ({ queryArgs }) =>
        `${queryArgs?.country || ""}__${queryArgs?.state || ""}`,
    }),
  }),
});

export const { useLazyGetCitiesQuery, useGetCitiesQuery } = CitieslocationApi;
