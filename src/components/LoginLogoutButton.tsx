import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";

export default function LoginLogoutButton() {
  const { logout, loginWithRedirect, isLoading, getAccessTokenSilently, isAuthenticated, error } = useAuth0();
  const showLoading = () => (isLoading ? <span>Loading...</span> : '');
  const showError = () => (error ? <span>Oops... {error.message}</span> : '');

  const [, setCookie, removeCookie ] = useCookies();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently();
      setCookie('token', token, { path: '/' })
    };
    getToken();
  }, [getAccessTokenSilently, isAuthenticated, setCookie])

  useEffect(() => {
    removeCookie('token');
  }, [isAuthenticated, removeCookie])

  const toogleLogin = () => {
    isAuthenticated ? logout({ returnTo: window.location.origin }) : loginWithRedirect();
  }

  return (
    <>
    {showError()}
    <Button color="inherit" type="submit" variant="outlined" onClick={() => toogleLogin()}>
      {isAuthenticated ? 'Log Out' : 'Log In'} {showLoading()}
    </Button>
    </>
  );
}
