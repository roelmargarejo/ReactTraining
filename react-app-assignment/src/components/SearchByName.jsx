import React, { useContext } from "react";
import { SearchByNameContext } from "../contexts/SearchByNameContext";

const SearchByName = () => {

const {
    text, handleInputChange,
    handleSearchClick
 
} = useContext(SearchByNameContext);


    return ( 
        
        <div className="inline">  
            <label for="searchByName">Search By Name</label><br />
            <input type="text" id="searchByName" onChange={handleInputChange} value={text} />
            <button id="btn-search" onClick={handleSearchClick}>Search</button>
        </div>  
       
    );
}

export default SearchByName;