import React, { createContext, useState} from "react";

export const GenderContext = createContext();

export const GenderProvider = ( {children}) => {
    const  [isMale, setIsMale] = useState(false);
    const  [isFemale, setIsFemale] = useState(false);    
 

    const toggleMale  = () => {
        setIsMale((prev) => !prev);
    };

    const toggleFemale  = () => {
        setIsFemale((prev) => !prev);
    };

    return (
        <GenderContext.Provider value={
            {
                isMale, toggleMale,
                isFemale, toggleFemale
            }
        } >
            {children}
        </GenderContext.Provider>
    );

};

