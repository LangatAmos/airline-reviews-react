import React from 'react';
import { Button } from "../styles";
import { Link } from "react-router-dom";

export default function AirlineCard ({id, name, image_url, description, handleClick, ...props }){

    // const [airline, setAirline] = useState([]);
    // const [reviews, setReviews] = useState([]);


    // console.log(props.airline.image_url)
    return (
        <div className="airline-card">
            <div className='card-item'>
                <h1>{name}</h1>
            </div>
            <div className='card-item'>
                <img src={image_url} alt={name} height="300" width={300}/>
            </div>
            <div className='card-item'>
                <Button as={Link} to={`/airlines/${id}`} onClick = {handleClick}>
                    View Airline
                </Button>
            </div>
        </div>
    )
}