import React, { createContext, useState} from "react";

export const SortingContext = createContext();

export const SortingProvider = ( {children}) => {
    const  [fieldSort, setFieldSort] = useState("Id");
    const  [orderSort, setOrderSort] = useState("Ascending");
 
    const toggleField  = (event) => {
        setFieldSort(event.target.value);
     };

    const toggleOrder  = (event) => {
        setOrderSort(event.target.value);
    };   

    return (
        <SortingContext.Provider value={
            {
                fieldSort, toggleField,
                orderSort, toggleOrder
            }
        } >
            {children}
        </SortingContext.Provider>
    );

};

