"use client";

import { Provider } from "react-redux";
import appStore from "./appStore";

export function Providers({ children }) {
  return <Provider store={appStore}>{children}</Provider>;
}
