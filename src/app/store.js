import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { registrationApi } from "../services/registrationApi";
import { geoApi } from "../services/geoApi";
import { CitieslocationApi } from "../services/CitieslocationApi";

export const store = configureStore({
  reducer: {
    [registrationApi.reducerPath]: registrationApi.reducer,
    [geoApi.reducerPath]: geoApi.reducer,
    [CitieslocationApi.reducerPath]: CitieslocationApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      registrationApi.middleware,
      geoApi.middleware,
      CitieslocationApi.middleware,
    ),
});

setupListeners(store.dispatch);
