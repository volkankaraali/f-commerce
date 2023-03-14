// libraries
import { createContext, useContext, useEffect, useState } from "react";

const SettingsContext = createContext();

export default function SettingsProvider({ children }) {

  const [themeMode, setThemeMode] = useState();

  useEffect(() => localStorage.getItem('themeMode') ? setThemeMode(localStorage.getItem('themeMode')) : setThemeMode("light"), []);

  const changeThemeMode = (mode) => {
    localStorage.setItem('themeMode', mode);
    setThemeMode(mode);
  };

  const values = {
    themeMode,
    changeThemeMode
  };

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
}

export const useSettings = () => useContext(SettingsContext)