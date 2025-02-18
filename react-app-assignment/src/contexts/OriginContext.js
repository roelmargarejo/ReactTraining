import React, { createContext, useState} from "react";

export const OriginContext = createContext();

export const OrginProvider = ( {children}) => {
    const  [isUnknown, setIsUnknown] = useState(false);
    const  [isEarth, setIsEarth] = useState(false);
    const  [isAbadango, setIsAbadango] = useState(false);  
 
    const toggleUnknown  = () => {
        setIsUnknown((prev) => !prev);
    };
    const toggleEarth  = () => {
        setIsEarth((prev) => !prev);
    };
    const toggleAbadango  = () => {
        setIsAbadango((prev) => !prev);
    };

    return (
        <OriginContext.Provider value={
            {
                isUnknown, toggleUnknown,
                isEarth, toggleEarth,
                isAbadango, toggleAbadango
            }
        } >
            {children}
        </OriginContext.Provider>
    );

};

