import { useState } from "react";

function Card({id , name , info , image , price , removeTour} ){
    const [readmore , setReadMore] = useState(false);
    const description = readmore ? info :`${info.substring(0,200)}....`;

    function readMoreHandler(){
        setReadMore(!readmore);
    }
    return(
        <div className = "card">
            <img className = "image" src = {image}></img>
            <div className="tour-info">
            <div className="tours-details">
                <h4 className="tour-price"  > ₹ {price} </h4>
                <h4 className="tour-name" > {name} </h4>
            </div>
            <div className="tour-description">
                {description}
                <span className="readmore" onClick={readMoreHandler}>
                    {readmore ? `Show Less`: `Read More`};
                </span>
            </div>
            </div>
            <button className="btn-red" onClick={() => removeTour(id)}>
                Not Intrested
            </button>
        </div>
    );
}

export default Card;