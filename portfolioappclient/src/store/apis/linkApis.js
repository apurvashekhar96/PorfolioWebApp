import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const linkApis = createApi({
  reducerPath: "configLinks",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints(builder) {
    return {
      fetchLinks: builder.query({
        query: () => {
          return {
            url: "/configLinks",
            method: "GET",
          };
        },
      }),
    };
  },
});

export const { useFetchLinksQuery } = linkApis;
export { linkApis };
