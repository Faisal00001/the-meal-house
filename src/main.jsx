import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
    element: <Home></Home>,
    children: [
      {
        path: "/:item",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${params?.item}`),
        element: <Products></Products>
      },
      {
        path: "/:item/:id",
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${params.id}`),
        element: <ProductDetails></ProductDetails>
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
