import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const registrationApi = createApi({
  reducerPath: "registrationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BASE_URL,
    prepareHeaders: (headers) => {
      const token = Cookies.get("auth_token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  // tagTypes: ["Registration", "Profile"],
  endpoints: (builder) => ({
    // ✅ Add endpoints later, examples:
    registerOrloginUserEmail: builder.mutation({
      query: (formData) => ({
        // url: "Auth/user/registerOrloginUserEmail",
        url: "AuthUser/email",
        method: "POST",
        body: formData,
      }),
    }),
    resgisterUserLocation: builder.mutation({
      query: (formData) => ({
        url: "/AuthUser/registration",
        method: "POST",
        body: formData,
      }),
    }),
    addChild: builder.mutation({
      query: (body) => ({
        url: "Students/user/addstudentfreetrail",
        method: "POST",
        body,
      }),
    }),
    addPhoneNumber: builder.mutation({
      query: (body) => ({
        url: "Auth/user/addphoneNumberuser",
        method: "POST",
        body,
      }),
    }),
    getPricingDetails: builder.mutation({
      query: (body) => ({
        url: "Razorpay/get-countryby-currency",
        method: "POST",
        body,
      }),
    }),
    createSubscription: builder.mutation({
      query: (body) => ({
        url: "Razorpay/createsubcription",
        method: "POST",
        body,
      }),
    }),
    paymentStatus: builder.mutation({
      query: (body) => ({
        url: "Razorpay/check-payment-status",
        method: "POST",
        body,
      }),
    }),
    studentAudioAndText: builder.mutation({
      query: (body) => ({
        url: "Students/user/updatestudentspeakandtext",
        method: "POST",
        body,
      }),
    }),
    getCities: builder.mutation({
      query: (body) => ({
        url: "Auth/cities",
        method: "POST",
        body,
      }),
    }),
    getProfile: builder.mutation({
      query: (body) => ({
        url: "Auth/user/profile",
        method: "POST",
        body,
      }),
    }),
  }),
});

export const {
  useRegisterOrloginUserEmailMutation,
  useResgisterUserLocationMutation,
  useAddChildMutation,
  useAddPhoneNumberMutation,
  useGetPricingDetailsMutation,
  useCreateSubscriptionMutation,
  usePaymentStatusMutation,
  useStudentAudioAndTextMutation,
  useGetCitiesMutation,
  useGetProfileMutation,
} = registrationApi;
