import { createContext } from "react";
import type { Dispatch, SetStateAction } from "react";

type ThemeContextType = {
  themeClass: string | null;
  setThemeClass: Dispatch<SetStateAction<string>> | null;
};

const ThemeContext = createContext<ThemeContextType>({
  themeClass: null,
  setThemeClass: null,
});

export default ThemeContext;