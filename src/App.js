// libraries 

// routes
import Routes from './routes';

// context
import SettingsProvider from './context/SettingsContext';

// theme
import ThemeProvider from './theme';

// redux

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
