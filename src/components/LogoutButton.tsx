import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@mui/material";
import { useEffect } from "react";
import { useCookies } from "react-cookie";

export const LogoutButton = () => {
  const { logout, isAuthenticated, isLoading } = useAuth0();
  const showLoading = () => (isLoading ? <span>Loading...</span> : '');
  const [, , removeCookie ] = useCookies();

  useEffect(() => {
    removeCookie('token');
  }, [isAuthenticated, removeCookie])

  return (
    <Button type="submit" variant="contained" onClick={() => logout({ returnTo: window.location.origin })}>
      Log Out {showLoading()}
    </Button>
  );
};