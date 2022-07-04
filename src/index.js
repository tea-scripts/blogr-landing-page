import React from 'react';
import ReactDOM from 'react-dom/client';
import 'normalize.css';
import './index.css';
import App from './App';
import { SidebarProvider } from './context/sidebar-context';
import { ChakraProvider } from '@chakra-ui/react';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <SidebarProvider>
      <ChakraProvider resetCSS>
        <App />
      </ChakraProvider>
    </SidebarProvider>
  </React.StrictMode>
);
