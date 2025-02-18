import React, { useContext } from "react";
import { GenderContext } from "../../contexts/GenderContext";

const GenderFilter = () => {

const {
    isMale, toggleMale, 
    isFemale, toggleFemale
 
} = useContext(GenderContext);


    return ( 
        
        <div className="card">  
            <h2 className="filterHeader">Gender</h2>
            <div className="checkbox-container">    

                <input type="checkbox" name="male" id="male" checked={isMale} onChange={toggleMale} /><label for="male">Male</label>
            </div>
            <div className="checkbox-container"> 
                <input type="checkbox" name="female" id="female" checked={isFemale} onChange={toggleFemale}/><label for="female">Female</label>
            </div>    
        </div>  
       
    );
}

export default GenderFilter;