import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "base/url",
  }),
  endpoints: () => ({}),
  tagTypes: ["addBook"],
});

export default api;
