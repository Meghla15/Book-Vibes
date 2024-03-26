import React, { useEffect, useState } from 'react';
import { getFromLocalStorage } from '../Utiles/localStorage';

const UseLocalStorage = () => {
    const [localStorage, setLocalStorage] = useState([]);
    // console.log(localStorage)

    useEffect (()=>{
        setLocalStorage(getFromLocalStorage());
    },[])
    return {localStorage} ;
};

export default UseLocalStorage;