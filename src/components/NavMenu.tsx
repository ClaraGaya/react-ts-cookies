import React from 'react';
import { MenuItem, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const pages = ['Profile', 'Cookies'];


export const NavMenu = () => {
  const navigate = useNavigate();
  const handleCloseNavMenu = (page: string) =>  navigate(`/${page}`);

  return (
    <>
      {pages.map((page) => (
        <MenuItem key={page} onClick={() => handleCloseNavMenu(page)}>
          <Typography textAlign="center">{page}</Typography>
        </MenuItem>
      ))}
    </>
  )
}
