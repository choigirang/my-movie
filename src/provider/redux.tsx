"use client";

import { persistor, store, wrapper } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>{children}</PersistGate>
    </Provider>
  );
}

// ReduxProvider.propTypes = {
//   Component: PropsType.elementType.isRequired,
// };

// export default wrapper.withRedux(ReduxProvider);
