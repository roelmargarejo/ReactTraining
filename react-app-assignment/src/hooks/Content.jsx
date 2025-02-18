import React, { useContext } from "react";
import CardItem from "../components/CardItem";
import loadingImage from "../assets/images/loading.gif";
import { ContentContext } from "../contexts/ContentContext";


const Content = () => {
    const {data, loading, error} = useContext(ContentContext);

    if(loading) {
        <img src={loadingImage} alt="" />  
    }

    if(error) {
        return <p>{error}</p>;
    }    
 
    return ( 
        
        <div className="card-full-width">
        
        {data && data.map((item) => {
                const d = new Date(item.created);
                const dte = d.getFullYear() + "-" + ((d.getMonth() + 1).toString().padStart(2, '0') ) + "-" + d.getDate().toString().padStart(2, '0');
                
                

                return <CardItem
                    key={item.id} 
                    name={item.name} 
                    image={item.image}
                    id={item.id}
                    created={dte}
                    status={item.status}
                    species={item.species}
                    gender={item.gender}
                    origin={item.origin}
                    location={item.location}
                />;
            })}   

        </div>  
    
    );
}


export default Content;