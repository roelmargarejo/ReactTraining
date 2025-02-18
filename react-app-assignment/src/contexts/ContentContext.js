import React, { createContext, useState, useEffect, useContext} from "react";

import { SpeciesContext } from "./SpeciesContext";
import { GenderContext } from "./GenderContext";
import { OriginContext } from "./OriginContext";
import { SearchByNameContext } from "./SearchByNameContext";
import { SortingContext } from "./SortingContext";


export const ContentContext = createContext();

export const ContentProvider = ( {children}) => {
    const isHuman = useContext(SpeciesContext);
    const isAlien = useContext(SpeciesContext);
    const isOthers = useContext(SpeciesContext);

    const isMale = useContext(GenderContext);
    const isFemale = useContext(GenderContext);

    const isUnknown = useContext(OriginContext);
    const isEarth = useContext(OriginContext);
    const isAbadango = useContext(OriginContext);

    const [data, setData] = useState(null);  
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const text = useContext(SearchByNameContext);
    const searchText = useContext(SearchByNameContext);

    const fieldSort = useContext(SortingContext);
    const orderSort = useContext(SortingContext);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch("https://rickandmortyapi.com/api/character/");
                const result = await response.json();

                const speciesFilter = [];
                const genderFilter = [];
                const originFilter = [];

                if(isHuman.isHuman) {
                    speciesFilter.push("Human".toLowerCase());
                }

                if(isHuman.isAlien) {
                    speciesFilter.push("Alien".toLowerCase());
                }

                if(isHuman.isOthers) {
                    speciesFilter.push("Other".toLowerCase());
                }

                if(isMale.isMale) {
                    genderFilter.push("Male".toLowerCase());
                }

                if(isFemale.isFemale) {
                    genderFilter.push("Female".toLowerCase());
                }

                if(isEarth.isEarth) {
                    originFilter.push("Earth".toLowerCase());
                }

                if(isUnknown.isUnknown) {
                    originFilter.push("Unkno".toLowerCase());
                }

                if(isAbadango.isAbadango) {
                    originFilter.push("Abada".toLowerCase());
                }

                let tempArray = [];
                
                if (speciesFilter.length === 0 && genderFilter.length === 0 && originFilter.length === 0 ) {
                    tempArray = result.results;  
                } else {
                    
                    if(speciesFilter.length > 0) {
                        tempArray = result.results.filter(item => speciesFilter.includes(item.species.toLowerCase().substr(0,5)));
                    } else {
                        tempArray = result.results;
                    }

                    if(genderFilter.length > 0) {
                        tempArray = tempArray.filter(item => genderFilter.includes(item.gender.toLowerCase()));
                    }

                    if(originFilter.length > 0) {
                        tempArray = tempArray.filter(item => originFilter.includes(item.origin.name.toLowerCase().substr(0,5)));
                    }

                }
                tempArray = tempArray.filter(item => item.name.toLowerCase().includes(searchText.searchText.toLowerCase()));
    
                if (fieldSort.fieldSort === "Id" && orderSort.orderSort === "Ascending" ) {
                    tempArray = [...tempArray].sort((a,b) => a.id - b.id);   
                } else if(fieldSort.fieldSort === "Id" && orderSort.orderSort === "Descending" ) {
                    tempArray = [...tempArray].sort((a,b) => b.id - a.id); 
                } else if(fieldSort.fieldSort === "Name" && orderSort.orderSort === "Descending" ) {
                    tempArray = [...tempArray].sort((a,b) => b.name.localeCompare(a.name));  
                } else if(fieldSort.fieldSort === "Name" && orderSort.orderSort === "Ascending" ) {
                    tempArray = [...tempArray].sort((a,b) => a.name.localeCompare(b.name)); 
                }else if(fieldSort.fieldSort === "Status" && orderSort.orderSort === "Descending" ) {
                    tempArray = [...tempArray].sort((a,b) => b.status.localeCompare(a.status));  
                } else if(fieldSort.fieldSort === "Status" && orderSort.orderSort === "Ascending" ) {
                    tempArray = [...tempArray].sort((a,b) => a.status.localeCompare(b.status)); 
                }

                setData(tempArray);


            } catch (error) {
                setError("Failed to fetch data");                
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [isHuman, isAlien,isOthers, isMale, isFemale, isUnknown, isEarth, isAbadango, text, searchText,fieldSort,orderSort]);

    return (
        <ContentContext.Provider value={
            {
                data, loading, error
            }
        } >
            {children}
        </ContentContext.Provider>
    );

};

