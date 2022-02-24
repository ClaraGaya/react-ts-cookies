import React, { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { useCookies } from "react-cookie";

export const LoginButton = () => {
  const { loginWithRedirect, isLoading, getAccessTokenSilently, isAuthenticated } = useAuth0();
  const showLoading = () => (isLoading ? <span>Loading...</span> : '');
  const [, setCookie ] = useCookies();

  useEffect(() => {
    const getToken = async () => {
      const token = await getAccessTokenSilently();
      setCookie('token', token, { path: '/' })
    };
    getToken();
  }, [getAccessTokenSilently, isAuthenticated, setCookie])
  

  return <Button type="submit" variant="contained" onClick={() => loginWithRedirect()}>Log In {showLoading()}</Button>
};
