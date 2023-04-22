import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { createHashRouter, RouterProvider} from "react-router-dom";
import PLP from './components/PLP/PLP';
import PDP from './components/PDP/PDP';

const root = ReactDOM.createRoot(document.getElementById('root'));

const router = createHashRouter([
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/home",
        element: <App />,
      },
      {
        path: "/category",
        element: <PLP />,
      },
      {
        path: "/product",
        element: <PDP />,
      },
]);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <RouterProvider router={router} />
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
