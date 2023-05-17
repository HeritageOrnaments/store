import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from '@chakra-ui/react'
import { createHashRouter, RouterProvider } from "react-router-dom";
import AOS from 'aos';
import 'aos/dist/aos.css';
import PLP from './components/PLP/PLP';
import PDP from './components/PDP/PDP';
import Cart from './components/cart/Cart.js';
import Checkout from './components/checkout/checkout';

import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from 'react-redux';
import { store } from './redux/store';

const queryClient = new QueryClient();
AOS.init({
  once: true
});

window.onhashchange = function () {
  window.location.reload();
}
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
  {
    path:"/cart",
    element: <Cart/>
  },
  {
    path:"/checkout",
    element: <Checkout/>
  }
]);

root.render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <RouterProvider router={router} />
        </QueryClientProvider>
      </Provider>
    </ChakraProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
