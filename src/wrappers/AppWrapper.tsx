import React from 'react';
import { Container } from '@mui/material';
import { Header } from '../components/Header';
import { ToogleTheme } from '../components/ToogleTheme';

export const AppWrapper: React.FC<{}> = props => {
  return (
    <>
      <Header />
      <Container maxWidth="xl">
        <ToogleTheme /> 
      </Container>
      <Container maxWidth="md">
        {props.children}
      </Container>
    </>
  )
}