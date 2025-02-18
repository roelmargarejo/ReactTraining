import React, { createContext, useState} from "react";

export const SearchByNameContext = createContext();

export const SearchByNameProvider = ( {children}) => {
    const  [text, setText] = useState("");
    const  [searchText, setSearchText] = useState("");

    const handleInputChange  = (event) => {
        setText(event.target.value);
    };

    const handleSearchClick = () => {
        setSearchText(text);
    }

    return (
        <SearchByNameContext.Provider value={
            {
                text, handleInputChange,
                searchText, handleSearchClick
            }
        } >
            {children}
        </SearchByNameContext.Provider>
    );

};

