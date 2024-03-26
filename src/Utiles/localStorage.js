import { toast } from "react-toastify";


export const saveToLocalStorage = (cardData) => {
   
       
        const savedData = JSON.parse(localStorage.getItem("listedBooks") || "[]");
        const existedData = savedData.find((item) => item.id === cardData.id);

        if (!existedData) {
            savedData.push(cardData);
            localStorage.setItem("listedBooks", JSON.stringify(savedData));
            toast.success("It's Already Added");
        } else {
            toast.warning("Already Exists!");
        }
   
};
export const getFromLocalStorage = () =>{
    const cardData =JSON.parse(localStorage.getItem("listedBooks")) || [];
    return cardData;
}
