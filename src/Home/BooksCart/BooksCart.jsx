import useBooksCartData from "../../Hooks/useBooksCartData";
import BookCart from "./BookCart";


const BooksCart = () => {
    const {cardData, loading} =useBooksCartData()
    
    return (
        <div>
            <h1 className="lg:text-4xl text-3xl font-bold text-center lg:mt-10 mt-6">Books</h1>
            

            <div className="cards-container grid lg:grid-cols-3 grid-cols-1 gap-6 p-2  ">
               {
                 cardData.map((item) =><BookCart key={item.id} item={item}></BookCart>)
               }

            </div>
        </div>
    );
};

export default BooksCart;