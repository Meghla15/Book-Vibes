import { Link } from "react-router-dom";


const BookCart = ({ item }) => {
  const { id, bookName, author, image, rating, tags, category } =
    item || {};
  return (
    <Link to={`/cart-details/${id}`}>
    <div className="max-w-[370px] p-6 rounded-md border-[1px] dark:bg-gray-50 dark:text-gray-900 container mx-auto">
        <img
          src={image}
          alt=""
          className="object-cover object-center w-full rounded-md h-72 bg-gray-200 p-3"
        />
        <div className="mt-6 mb-2">
        {
                tags.map(tag =>( <a className="text-[#23BE0A] mr-3 bg-slate-200 px-2 py-1 rounded-3xl" key={tag}>{tag}</a>)
                 
                )
              }
          <h2 className="text-xl font-bold tracking-wide">{bookName}</h2>
        </div>
        <p className="dark:text-gray-800">By:{author}</p>
        <p className="border-[1px] border-dashed border-l-gray-400 mt-4"></p>
        <div className="flex justify-between mt-2">
          <p>{category}</p>
          <div className="flex gap-1">
            <p>{rating}</p>
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
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCart;
