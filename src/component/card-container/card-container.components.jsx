import "./card-container.css";

const CardContainer = ({ id, name, email }) => {


        return(
<div className="card-container" key={id}>
                        <img src={`https://robohash.org/${id}?set=set2`} alt={`Monster ${name}`} />
                        <h1>{name}</h1>
                        <p>{email}</p>
                        </div>
        )
    }


export default CardContainer;