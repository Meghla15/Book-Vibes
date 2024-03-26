
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useBooksCartData from "./Hooks/useBooksCartData";
import { saveToLocalStorage } from "./Utiles/localStorage";


  

const CardDetail = () => {
   const [singleData, setSingleData] =useState({});
   const {id} = useParams();
   const {cardData,loading} =useBooksCartData();
   

   const handleClick =()=>{
    saveToLocalStorage(singleData);
    console.log(singleData)
   }
   
   useEffect(() =>{
    if (cardData) {
      const singleData = cardData.find((item) => item.id == id)
      setSingleData(singleData)        
    }
   },[cardData,id])

   const  { bookName, author, image, rating, tags, category,review,publication_year,publisher,totalPages } = singleData ||{}
      
    return (
    <section className="dark:bg-gray-100 dark:text-gray-800">
      <div className="container max-w-6xl p-6 mx-auto  sm:space-y-12">
      <a
          rel="noopener noreferrer"
          href="#"
          className="block max-w-sm gap-3 mx-auto sm:max-w-full group hover:no-underline focus:no-underline lg:grid lg:grid-cols-12 dark:bg-gray-50"
        >
          <img
            src={image}
            alt=""
            className="w-full h-full rounded sm:h-96 lg:col-span-6 dark:bg-gray-500"
          />
          <div className="p-6 space-y-2 lg:col-span-5">
            <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
              {bookName}
            </h3>
            <span className="mt-3 dark:text-gray-600">
              By :{author}
            </span>
            <p className="border-[1px] border-dashed border-l-gray-400 mt-4"></p>
            <p>{category}</p>
            <p className="border-[1px] border-dashed border-l-gray-400 mt-4"></p>
            <p><span className="font-bold">Review : </span>
              {review}
            </p>
            <p>Tag {tags}</p>
            <p className="border-[1px] border-dashed border-l-gray-400 mt-4"></p>
            <p>Number of Pages : <span className="font-bold">{totalPages}</span></p>
            <p>Publisher : <span className="font-bold">{publisher}</span></p>
            <p>Year of Publishing : <span className="font-bold">{publication_year}</span></p>
            <p>Rating : <span className="font-bold">{rating}</span></p>
            <button onClick={handleClick} className="btn btn-ghost">Read</button>
            <button  onClick={handleClick} className="btn btn-ghost">WishList</button>
          </div>
        </a>
        
       
        
      </div>
    </section>
  );
};

export default CardDetail;
