import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const loginApi = createApi({
  reducerPath: "login",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints(builder) {
    return {
      postLogin: builder.mutation({
        query: (data) => {
          return {
            url: "/login",
            method: "POST",
            body: {
              email: data.email,
              password: data.password,
            },
            headers: {
              "Content-Type": "application/json",
            },
          };
        },
      }),
    };
  },
});

export const { usePostLoginMutation } = loginApi;
export { loginApi };
