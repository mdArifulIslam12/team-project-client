import { authKey } from "@/constants/storageKey";
import { getBaseUrl } from "@/helpers/config/envConfig";
import { getFromLocalStorage } from "@/utils/local-store";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: getBaseUrl(),
    prepareHeaders: async (headers, { getState, endpoint }) => {
      const accessToken = getFromLocalStorage(authKey);
      if (accessToken) {
        headers.set("Authorization", `${accessToken}`);
      }
      // Add Content-Type header
      headers.set("Content-Type", "application/json");
      return headers;
    },
  }),
  endpoints: (builder) => ({}),
  tagTypes: [],
});
