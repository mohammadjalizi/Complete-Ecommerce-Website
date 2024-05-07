import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import ShopCactgorey from './pages/ShopCactgorey.jsx';
import Product from './pages/Product.jsx';
import Cart from './pages/Cart.jsx';
import LoginSingup from './pages/LoginSingup.jsx';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="/mens" element={<ShopCactgorey   category="men" />} />
      <Route path="/womens" element={<ShopCactgorey   category="whomen" />} />
      <Route path="/kids" element={<ShopCactgorey   category="kid" />} />
      <Route path="/product" element={<Product />}> </Route>
      <Route path=":productId" element={<Product />}></Route>
      <Route path="/cart" element={<Cart />}></Route>
      <Route path="/login" element={<LoginSingup />}></Route>
    </Route>
  )
);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
