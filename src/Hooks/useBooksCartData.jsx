import { useEffect, useState } from "react";


const useBooksCartData = () => {
    const [cardData, setCardData] =useState([]);
    const[loading, setLoading] = useState(true)
    
    useEffect(()=>{
        const fetchData = async()=>{
            setLoading(true)
            const res =await fetch('./FakeData.json')
            const data = await res.json();
            setCardData(data);
            setLoading(false)
            
        }
        fetchData()
    },[])
   return {cardData,loading}
};

export default useBooksCartData;