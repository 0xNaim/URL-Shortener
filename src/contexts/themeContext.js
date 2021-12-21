import {
  createTheme,
  CssBaseline,
  ThemeProvider
} from '@mui/material';
import {
  createContext,
  useContext,
  useMemo,
  useState
} from 'react';


const ColorModeContext = createContext({
  toggleColorMode: () => { }
});

const ColorModeContextProvider = ({ children }) => {
  const themeMode = localStorage.getItem('themeMode');
  const [mode, setMode] = useState(themeMode || 'light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        if (mode === 'light') {
          setMode('dark');
          localStorage.setItem('themeMode', 'dark');
        } else if (mode === 'dark') {
          setMode('light');
          localStorage.setItem('themeMode', 'light');
        } else {
          setMode('light');
          localStorage.setItem('themeMode', 'light');
        }
      }
    }),
    [mode]
  );

  const theme = useMemo(
    () => createTheme({
      palette: {
        mode
      }
    }),
    [mode]
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
};

const useColorMode = () => useContext(ColorModeContext);

export {
  ColorModeContext,
  ColorModeContextProvider,
  useColorMode
};
