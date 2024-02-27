import { Dispatch, ReactNode, SetStateAction } from "react";

export type ColorModeContextType = {
  mode: "light" | "dark";
  toggleColorMode: () => void;
};

// 공통 Alert 컴포넌트 props
export interface AlertProps {
  children?: ReactNode;
  setState: Dispatch<SetStateAction<any>>;
}
