/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react';
import './App.css';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { ThemeProvider } from '@emotion/react';
import { grey, indigo, brown, teal } from '@mui/material/colors';
import { createTheme, PaletteMode, CssBaseline } from '@mui/material';
import { useCookies } from "react-cookie";
import { Auth0Provider } from "@auth0/auth0-react";
import { Router } from './router/Router';


const AUTH0_DOMAIN = process.env.REACT_APP_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = process.env.REACT_APP_AUTH0_CLIENT_ID;

function App() {
  const [cookies] = useCookies(['themeMode']);
  const [mode, setMode] = React.useState<PaletteMode>('light');

  const getTheme = (mode: string) => {
    return mode === 'dark' ? darkTheme : lightTheme
  }

  console.log('cookies.themeMode', cookies.themeMode)
  
  const theme = React.useMemo(() => getTheme(cookies.themeMode), [cookies.themeMode]);
  
  return (
    <Auth0Provider
      domain={AUTH0_DOMAIN as string}
      clientId={AUTH0_CLIENT_ID as string}
      redirectUri={window.location.origin}
      useRefreshTokens={true}
    >
      <ThemeProvider theme={theme}> 
      <CssBaseline />
          <Router />
      </ThemeProvider>
    </Auth0Provider>
  );
}


const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#203239',
      contrastText: '#E0DDAA',
    },
    divider: '#E0DDAA',
    background: {
      default: '#141E27',
      paper:'#203239',
    },
    text: {
      primary:'#EEEDDE',
      secondary: '#E0DDAA',
    },
  }
});

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: indigo[500],
      contrastText: brown[50],
    },
    secondary: teal,
    divider: indigo[700],
    background: {
      default: brown[50],
      paper: brown[50],
    },
    text: {
      primary: grey[800],
      secondary: grey[500],
    },
  }
});

export default App;
