import React, { useContext } from "react";
import { SpeciesContext } from "../../contexts/SpeciesContext";


const SpeciesFilter = () => {

const {
    isHuman, toggleHuman, 
    isAlien, toggleAlien,
    isOthers, toggleOthers
  

} = useContext(SpeciesContext);


    return ( 
        
        <div className="card">  
            <h2 className="filterHeader">Species</h2>
            <div className="checkbox-container">    
                <input type="checkbox" name="human" id="human"  checked={isHuman} onChange={toggleHuman} /><label for="human">Human</label>
            </div>

            <div className="checkbox-container"> 
                <input type="checkbox" name="alien" id="alien"  checked={isAlien} onChange={toggleAlien} /><label for="alien">Alien</label>
            </div>    
            <div className="checkbox-container">     
                <input type="checkbox" name="others" id="others" checked={isOthers} onChange={toggleOthers} /><label for="others">Other Species</label>
            </div>
        </div>  
       
    );
}

export default SpeciesFilter;