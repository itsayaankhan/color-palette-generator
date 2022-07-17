
import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Header from './components/Header';
import Palette from './components/Palette';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="10vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
        </Grid>
        <Header />
        <Palette />
      </Box>
    </ChakraProvider>
  );
}

export default App;