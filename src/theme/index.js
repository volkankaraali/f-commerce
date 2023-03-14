// libraries
import React, { useMemo } from 'react';
import { createTheme, ThemeProvider as MUIThemeProvider } from '@mui/material/styles';
import { CssBaseline } from '@mui/material';

// palette
import palette from './palette';

// context
import { useSettings } from '../context/SettingsContext';

export default function ThemeProvider({ children }) {

  const { themeMode } = useSettings();

  const themeOptions = useMemo(
    () => ({
      palette: themeMode === 'dark' ? palette.dark : palette.light,
      typography: {
        fontFamily: 'Poppins'
      },
    }),
    [themeMode]
  )
  const theme = createTheme(themeOptions);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  )
}
