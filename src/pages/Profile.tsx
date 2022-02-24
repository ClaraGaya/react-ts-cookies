import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom'

export const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    <main>
    {isAuthenticated && (
      
        <>
          <img src={user?.picture} alt={user?.name} /><h2>{user?.name}</h2><p>{user?.email}</p>
          <nav>
            <Link to="/cookies">Cookies</Link>
          </nav>
        </>
    )}
      {!isAuthenticated && <p>user not signed in</p>}
      <nav>
        <Link to="/">Home</Link>
      </nav>
    </main>
  )
}