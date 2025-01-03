// libraries 
import React from "react";

// routes
import Routes from './routes';

// context
import SettingsProvider from './context/SettingsContext';

// theme
import ThemeProvider from './theme';

function App() {

  return (
    <SettingsProvider>
      <ThemeProvider>
        <Routes />
      </ThemeProvider>
    </SettingsProvider>

  );
}

export default App;
