import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../ErrorPages/ErrorPages";
import Root from "../Root";
import Home from "../Home/Home";
import ListedBooks from "../ListedBooks/ListedBooks";
import PagesToLoad from "../PagesToLoad/PagesToLoad";
import CardDetail from "../CardDetail";





const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPages></ErrorPages>,
      children: [
        {
          path: "/",
          element:<Home></Home>,
        },
        {
            path: "/listedBooks",
            element: <ListedBooks></ListedBooks>,
        },
        {
            path: "/pagesToRead",
            element: <PagesToLoad></PagesToLoad>,
        },
        {
           path:"/card-details/:id",
           element:<CardDetail></CardDetail>
        }
      ],
    },
  ]);

export default router;