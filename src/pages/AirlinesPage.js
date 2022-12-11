import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";
import AirlineCard from "../components/AirlineCard"

function AirlinesPage(props) {
    const [airlines, setAirlines] = useState([]);

    useEffect(() => {
        fetch("/airlines")
        .then((res) => res.json())
        .then(setAirlines);
    }, []);


    
    return (
        <Wrapper id="airlinespage">
            <h1 id="login-title">Honest, Unbiased airline reviews. Share your experience</h1>
        {airlines.length > 0 ? (
            <ul className="cards">
            {airlines.map((airline) => {

                const {id, name, image_url ,description} = airline

                return <AirlineCard key={id} 
                id={id}
                name={name}
                image_url={image_url}
                />;
            })}
            </ul>
            ) : (
            <>
            <h2>No airlines Found</h2>
            <Button as={Link} to={`/airlines/${props.id}`}>
                Add a New Airline
            </Button>
            </>
        )}
        </Wrapper>
    );
    }

    const Wrapper = styled.section`
    max-width: 100%;
    margin: 30px;
    flex-wrap: wrap;
    `;

    const Airline = styled.article`
    margin-bottom: 25px;
`;

export default AirlinesPage;