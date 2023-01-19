import { configureStore } from "@reduxjs/toolkit";

import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { linkApis } from "./apis/linkApis";
import { formDataApi } from "./apis/formDataApi";

export const store = configureStore({
  reducer: {
    [linkApis.reducerPath]: linkApis.reducer,
    [formDataApi.reducerPath]: formDataApi.reducer,
  },
  middleware: (getDefaultMiddleware) => {
    return getDefaultMiddleware()
      .concat(linkApis.middleware)
      .concat(formDataApi.middleware);
  },
});

setupListeners(store.dispatch);

export { useFetchLinksQuery } from "./apis/linkApis";
export { useSendFormDataMutation } from "./apis/formDataApi";
