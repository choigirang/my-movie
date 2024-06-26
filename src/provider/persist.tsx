import OpenMoviePopup from "@/app/(movie)/openMoviePopup";
import { persistor } from "@/store/store";
import { PersistGate } from "redux-persist/integration/react";

export default function PesistProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <PersistGate persistor={persistor}>
      {children}
      <OpenMoviePopup />
    </PersistGate>
  );
}
