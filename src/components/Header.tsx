import React from 'react';
import { Box, AppBar, Toolbar, Container } from '@mui/material';
import LoginLogoutButton from './LoginLogoutButton';
import { NavMenu } from './NavMenu';
import { CookieRounded } from '@mui/icons-material';

export const Header = () => {
  return (
    <AppBar position="static" enableColorOnDark >
      <Container maxWidth="xl">
        <Toolbar disableGutters>

          <Box sx={{ flexGrow: 1,display: 'flex', alignItems: 'center'}}>
            <CookieRounded fontSize="large" color="secondary"/>
            <NavMenu /> 
          </Box>

          <Box sx={{ flexGrow: 0,display: 'flex'}}>
            <LoginLogoutButton/>
          </Box>
          
        </Toolbar>
      </Container>
    </AppBar>
  )
}
