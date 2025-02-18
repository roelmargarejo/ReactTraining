import React, { useContext } from "react";
import { SpeciesContext } from "../contexts/SpeciesContext";
import { GenderContext } from "../contexts/GenderContext";
import { OriginContext } from "../contexts/OriginContext";

const SelectedFilters = () => {
    const isHuman = useContext(SpeciesContext);
    const isAlien = useContext(SpeciesContext);
    const isOthers = useContext(SpeciesContext);

    const isMale = useContext(GenderContext);
    const isFemale = useContext(GenderContext);

    const isUnknown = useContext(OriginContext);
    const isEarth = useContext(OriginContext);
    const isAbadango = useContext(OriginContext);

    return ( 
        
        <div>  
            <h2 className="filterHeader">Selected Filters</h2>
            {isHuman.isHuman && (
                <button>Human</button>
            )}
            {isAlien.isAlien && (
                <button>Alien</button>
            )}
            {isOthers.isOthers && (
                <button>Others</button>
            )}
            {isMale.isMale && (
                <button>Male</button>
            )}
            {isFemale.isFemale && (
                <button>Female</button>
            )}

            {isUnknown.isUnknown && (
                <button>Unknown</button>
            )}
            {isEarth.isEarth && (
                <button>Earth</button>
            )}
            {isAbadango.isAbadango && (
                <button>Abadango</button>
            )}            


        </div>  
       
    );
}

export default SelectedFilters;