import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Cookies from "js-cookie";

export const registrationApi = createApi({
  reducerPath: "registrationApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://3.111.148.23/api/",
    // baseUrl: "http://10.1.1.138:7177/api/",
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
      query: (body) => ({
        url: "Auth/user/registerOrloginUserEmail",
        method: "POST",
        body,
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
  }),
});

export const {
  useRegisterOrloginUserEmailMutation,
  useAddChildMutation,
  useAddPhoneNumberMutation,
  useGetPricingDetailsMutation,
  useCreateSubscriptionMutation,
  usePaymentStatusMutation,
  useStudentAudioAndTextMutation,
} = registrationApi;
