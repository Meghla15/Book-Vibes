const ListedBooksPage = ({ cardData }) => {
  const {
    bookName,
    author,
    image,
    rating,
    tags,
    category,
    publication_year,
    publisher,
    totalPages,
  } = cardData || {};
  return (
    <div className="card card-side bg-base-100 container mx-auto border-[1px] flex gap-12 mt-3 p-4">
      
      <figure><img className="max-w-lg w-44 h-48 shadow-2xl bg-base-300 p-4 rounded-lg "  src={image} alt=""/></figure>
      
        <div>
          <h1 className="text-2xl font-bold">{bookName}</h1>
          <p className="py-1 font-medium">By : {author}</p>
          <div className="flex justify-between">
            <div className="flex gap-2">Tags
              {
                tags.map(tag =>( <a className="text-[#23BE0A] bg-slate-200 px-2 rounded-3xl" key={tag}>#{tag}</a>)
                 
                )
              }
            </div>
            <div className="flex">
              <div>
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
                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                  />
                </svg>
              </div>
              Year of Publishing : {publication_year}
            </div>
          </div>
          <div className="flex justify-between mt-2 opacity-70">
            <div className="flex">
              <div className="">
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
                    d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                  />
                </svg>
              </div>
              Publisher :{publisher},
            </div>
            <div className="flex">
              <div>
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
                    d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z"
                  />
                </svg>
              </div>
              Page :{totalPages}
            </div>
          </div>
          <p className="border-[1px] border-dashed border-l-gray-400 mt-4"></p>
          <div className="flex gap-2 mt-3">
            <button className="btn rounded-3xl bg-emerald-100 text-[#328EFF] sm:btn-sm btn-md ">
              Category : {category}
            </button>
            <button className="btn rounded-3xl bg-orange-100 text-orange-400 sm:btn-sm btn-md ">
              Rating : {rating}
            </button>
            <button className="btn rounded-3xl bg-[#23BE0A] text-white sm:btn-sm btn-md ">
              View Details
            </button>
          </div>
        </div>
      
    </div>
  );
};

export default ListedBooksPage;
