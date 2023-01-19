import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const formDataApi = createApi({
  reducerPath: "form",
  baseQuery: fetchBaseQuery({
    baseUrl: "",
  }),
  endpoints(builder) {
    return {
      sendFormData: builder.mutation({
        query: (data) => {
          console.log(data);
          return {
            url: "/formData",
            method: "POST",
            body: {
              name: data.name,
              emailAdd: data.email,
              mobile: data.mobile,
              desc: data.desc,
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

export const { useSendFormDataMutation } = formDataApi;
export { formDataApi };
