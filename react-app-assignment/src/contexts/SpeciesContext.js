import React, { createContext, useState} from "react";

export const SpeciesContext = createContext();

export const SpeciesProvider = ( {children}) => {
    const  [isHuman, setIsHuman] = useState(false);
    const  [isAlien, setIsAlien] = useState(false);
    const  [isOthers, setIsOthers] = useState(false);  
 
    const toggleHuman  = () => {
        setIsHuman((prev) => !prev);
    };
    const toggleAlien  = () => {
        setIsAlien((prev) => !prev);
    };
    const toggleOthers  = () => {
        setIsOthers((prev) => !prev);
    };

    return (
        <SpeciesContext.Provider value={
            {
                isHuman, toggleHuman,
                isAlien, toggleAlien,
                isOthers, toggleOthers
            }
        } >
            {children}
        </SpeciesContext.Provider>
    );

};

