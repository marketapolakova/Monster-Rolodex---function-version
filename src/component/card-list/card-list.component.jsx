import "./card-list.css";
import CardContainer from "../card-container/card-container.components";

const CardList = ({ monsters }) => {

        return(
            <div className="card-list">
                {monsters.map((monster)=>{
                    const {id, name, email} = monster;
                    return (
                        <CardContainer key={id} id={id} name={name} email={email}/>
                    )
                })}
            </div>
        )
    }


export default CardList;