
import './App.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layouts/Main';
import Home from './Pages/Home';
import Second from './Layouts/Second';
import All from './Pages/All';
import Users from './Pages/Users';
import AllCountries from './Pages/AllCountries';
import Error from './Pages/Error';
import Details from './Pages/Details';

function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element:<Main></Main>,
      children:[
        {
          path:"/",
          element:<Home></Home>,
        },
        {
          path:"/users",
          element:<Users></Users>
        },
        {
          path:"/allcountries",
          element:<AllCountries></AllCountries>,
          loader: async () => {
            return fetch("https://restcountries.com/v3.1/all");
          },
        },
        {
          path:'/details/:id',
          element:<Details></Details>,
          loader: async ({params}) => {
            return fetch(`https://restcountries.com/v3.1/alpha/${params.id}`);
          },
        }
      ]
    },
    {
      path:"/second",
      element:<Second></Second>,
      children:[
        {
          path:"/second/all",
          element:<All></All>
        }
      ]
    },
    {
      path:"*",
      element:<Error></Error>
    }
  ])

  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
