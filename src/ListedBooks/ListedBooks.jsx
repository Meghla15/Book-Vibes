import { Link, Outlet } from "react-router-dom";
import UseLocalStorage from "../Hooks/UseLocalStorage";
import ListedBooksPage from "./ListedBooksPage";
import { useState } from "react";

const ListedBooks = () => {
  const { localStorage } = UseLocalStorage();
  const [tabIndex, setTabIndex] = useState(0)
 

  return (
    <div>
      <h1 className="text-2xl font-bold text-center bg-slate-200 h-20 container mx-auto rounded-2xl flex justify-center items-center ">
        Books
      </h1>
      <div className="mt-10 container mx-auto">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link to =""
           onClick={()=>setTabIndex(0)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 0 ? "border border-b-0" : 'border-b' } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
           
            <span>Read Books</span>
          </Link>
          <Link to={`wishList`}
          onClick={()=>setTabIndex(1)} className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${tabIndex === 1 ? "border border-b-0" : 'border-b' } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}>
            
            <span>WishList</span>
          </Link>
         
        </div>
        <Outlet></Outlet>
      </div>
      {localStorage.map((cardData) => (
        <ListedBooksPage
          key={cardData.id}
          cardData={cardData}
        ></ListedBooksPage>
      ))}
    </div>
  );
};

export default ListedBooks;
