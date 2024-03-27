import { Link, Outlet } from "react-router-dom";
import UseLocalStorage from "../Hooks/UseLocalStorage";
import ListedBooksPage from "./ListedBooksPage";
import { useRef, useState } from "react";

const ListedBooks = () => {
  const tabRef = useRef();
  const { localStorage } = UseLocalStorage();
  const [tabIndex, setTabIndex] = useState(0);
  
  function addButtonHandler() {
    console.log(tabRef.current.innerText);
  
  }
  return (
    <div>
      <h1 className="text-2xl font-bold text-center bg-slate-200 h-20 container mx-auto rounded-2xl flex justify-center items-center ">
        Books
      </h1>

      <div className="">
      <details className="dropdown mt-5 flex justify-center items-center container mx-auto w-32">
        <summary className="m-1 btn bg-[#23BE0A] text-white">
          Sort By{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m19.5 8.25-7.5 7.5-7.5-7.5"
            />
          </svg>
        </summary>

        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-200 rounded-box w-52 " ref={tabRef}>
          <li>
            <a onClick={addButtonHandler}>Rating</a>
          </li>
          <li>
            <a onClick={addButtonHandler}>Number of Pages</a>
          </li>
          <li>
            <a onClick={addButtonHandler}>Publisher Year</a>
          </li>
        </ul>
      </details>
      </div>

      <div className="mt-10 container mx-auto">
        <div className="flex items-center -mx-4 overflow-x-auto overflow-y-hidden sm:justify-start flex-nowrap dark:bg-gray-100 dark:text-gray-800">
          <Link
            to=""
            onClick={() => setTabIndex(0)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 0 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
            <span>Read Books</span>
          </Link>
          <Link
            to={`wishList`}
            onClick={() => setTabIndex(1)}
            className={`flex items-center flex-shrink-0 px-5 py-3 space-x-2 ${
              tabIndex === 1 ? "border border-b-0" : "border-b"
            } rounded-t-lg dark:border-gray-600 dark:text-gray-900`}
          >
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
