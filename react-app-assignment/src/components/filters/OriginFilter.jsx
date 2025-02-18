import React, { useContext } from "react";
import { OriginContext } from "../../contexts/OriginContext";

const OriginFilter = () => {

const {
    isUnknown, toggleUnknown, 
    isEarth, toggleEarth,
    isAbadango, toggleAbadango
 
} = useContext(OriginContext);

    return ( 
        
        <div className="card">  
            <h2 className="filterHeader">Origin</h2>
            <div className="checkbox-container">    

                <input type="checkbox" name="unknown" id="unknown"  checked={isUnknown} onChange={toggleUnknown} /><label for="unknown">Unknown</label>
            </div>

            <div className="checkbox-container"> 
                <input type="checkbox" name="earth" id="earth" checked={isEarth} onChange={toggleEarth} /><label for="earth">Earth</label>
            </div>    
            <div className="checkbox-container">     
                <input type="checkbox" name="abadango" id="abadango" checked={isAbadango} onChange={toggleAbadango} /><label for="abadango">Abadango</label>
            </div>
        </div>  
       
    );
}

export default OriginFilter;