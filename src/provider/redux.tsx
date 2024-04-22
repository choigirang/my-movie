"use client";

import { store } from "@/store/store";
import React from "react";
import { Provider } from "react-redux";

export default function ReduxProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Provider store={store}>{children}</Provider>;
}

// ReduxProvider.propTypes = {
//   Component: PropsType.elementType.isRequired,
// };

// export default wrapper.withRedux(ReduxProvider);
