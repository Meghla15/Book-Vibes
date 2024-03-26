import { createBrowserRouter } from "react-router-dom";
import ErrorPages from "../ErrorPages/ErrorPages";
import Root from "../Root";
import Home from "../Home/Home";
import ListedBooks from "../ListedBooks/ListedBooks";
import PagesToLoad from "../PagesToLoad/PagesToLoad";
import ReadBook from "../Components/ReadBook";
import WishList from "../Components/WishList";
import CartDetails from "../Components/CartDetails";
import Contact from "../Home/Contact";





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
            children :[
              {
                index:true,
                element:<ReadBook></ReadBook>
              },
              {
                path:"wishList",
                element:<WishList></WishList>
              }
            ]
        },
        {
            path: "/pagesToRead",
            element: <PagesToLoad></PagesToLoad>,
        },
        {
           path:"/contact",
           element:<Contact></Contact>
        },
        {
           path:"/cart-details/:id",
           element:<CartDetails></CartDetails> 
        }
      ],
    },
  ]);

export default router;