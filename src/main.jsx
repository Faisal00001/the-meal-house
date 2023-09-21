import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './components/Home/Home';
import ProductDetails from './components/ProductDetails/ProductDetails';
import Products from './components/Products/Products';
import SearchResults from './components/SearchResults/SearchResults';
import './index.css';
const router = createBrowserRouter([
  {
    path: "/",
    loader: () => fetch(`https://www.themealdb.com/api/json/v1/1/categories.php`),
    element: <Home></Home>,
    children: [
      {
        path: '/:inputText',
        loader: ({ params }) => fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${params.inputText}`),
        element: <SearchResults></SearchResults>
      },
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
  {
    path: '/about',
    element: <div className='text-3xl mt-40 text-center'>Content will be added soon</div>
  },
  {
    path: '/contact',
    element: <div className='text-3xl mt-10 text-center'> <p> Content will be added soon.</p> <br /> <p>For more information contact</p> <br /><small> <a className='text-blue-600'>faisal.osman@northsouth.edu</a></small></div>
  }

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
