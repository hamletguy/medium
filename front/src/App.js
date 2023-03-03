import React from 'react';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import { BrowserRouter } from 'react-router-dom';
import Navbar from './components/Navbar';
import Doctor from './components/Doctor';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  return (
    <div>
      <ChakraProvider theme={theme}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <Register />
      </ChakraProvider>
    </div>
  );
}

export default App;
