const CardItem = (props) => {
    return ( 
        
        <div className="card-item">
            <img src={props.image} alt="" />  
            <h2 className="lightColor">{props.name}</h2>
            <p className="lightColor">Id: {props.id} Created: {props.created}</p>
            <p className="lightColor">Status: {props.status}</p> 
            <p className="lightColor">Species: {props.species}</p> 
            <p className="lightColor">Gender: {props.gender}</p> 
            <p className="lightColor">Origin: {props.origin.name}</p>
            <p className="lightColor">Last location: {props.location.name}</p>
        </div>  
       
    );
}

export default CardItem;