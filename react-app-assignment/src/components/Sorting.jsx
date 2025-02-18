import React, { useContext } from "react";
import { SortingContext } from "../contexts/SortingContext";

const Sorting = () => {

const {
    fieldSort, toggleField,
    orderSort, toggleOrder
 
} = useContext(SortingContext);

    return ( 
        
        <div id="dv-sorting">  
            <select id="field-select" onChange={toggleField} value={fieldSort} >
                <option value={"Id"}>Sort by Id</option>
                <option value={"Name"} >Sort by Name</option>
                <option value={"Status"} >Sort by Status</option>
            </select>
            <select id="order-select" onChange={toggleOrder} value={orderSort}>
                <option value={"Ascending"}>Ascending</option>
                <option value={"Descending"}>Descending</option>
            </select>            
        </div>  
       
    );
}

export default Sorting;