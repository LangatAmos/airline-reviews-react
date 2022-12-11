import React from 'react';
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import ReviewForm from '../components/ReviewForm';
import styled from "styled-components";



function AirlineDetails(props){

    const [airline, setAirline] = useState([]);
    const [review, setReview] = useState({});

    const [errors, setErrors] = useState([]);


    const {id} = useParams()


    useEffect(() =>{
        fetch(`/airlines/${id}`)
        .then(response => response.json())
        .then((airline) => setAirline(airline))
        // .then((airline) => console.log(airline.reviews))
    },[id, airline])
    
    function handleChange(e){
        e.preventDefault()
        // console.log('name:', e.target.name, 'comment:', e.target.value)
        setReview(Object.assign({}, review, {[e.target.name]: e.target.value}))

        // console.log("review:", review)
    }

    function handleSubmit(e){
        e.preventDefault()

        const airline_id = airline.id
        const user_id = props.user.id

        fetch("/reviews", {
            method: 'POST',  
            headers:{
                'Content-Type': 'application/json'
                },
                body: JSON.stringify({...review, airline_id, user_id})
            })
        .then((response) => {
            if (response.ok){
            response.json().then((data)=> setAirline(data))
            } else {
                response.json().then((err) => setErrors(Object.entries(err.errors).flat()));
            }
            })
            review.reset({})
        }
    function handleDelete(id){
        // console.log(id)
        fetch(`/reviews/${id}`,{
            method: 'DELETE'
        })
        // .then(response => response.json())
        .then(()=>alert("review deleted successfully"))
        .catch(err => console.log(err))

    }


    return (
        <Wrapper id='airlinedetail'>
            {/* <h1>This is the the details of each Airline</h1> */}
            <DetailsTtitle>{airline.name}</DetailsTtitle>
            <DetailsImage src={airline.image_url} alt={airline.name}/>
            <AirlineDescription>{airline.description}</AirlineDescription>

            <ReviewListTitle>Reviews for {airline.name}</ReviewListTitle>
            
            <ReviewList>{  airline.reviews?.map((rev, index)=>{
                    return (
                        <ReviewItem key={index}>
                            <h5>{rev.title}</h5>
                            <p>{rev.comment}</p>
                            <User>By: {rev.user.username}</User>
                            <span><DeleteBtn onClick={()=>handleDelete(rev.id)}>delete</DeleteBtn></span>
                        </ReviewItem>
                    )
                })
                }
                {/* <Review reviews = {reviews}/> */}
            </ReviewList>


            <div>
                <ReviewForm
                handleChange={handleChange}
                handleSubmit={handleSubmit}
                name={airline.name}
                errors={errors}
                />
            </div>
            
        </Wrapper>
    )
}

const Wrapper = styled.div`
max-width: 80%;
margin: 30px auto;
flex-wrap: wrap;
`;

const ReviewList = styled.div`
display: flex;
flex-direction: column;
align-items: left;
line-height: 1.5em;
font-size: 1em;
`;

const ReviewListTitle = styled.h4`
font-size: 1.5em;
color: #5618f5;
`;

const AirlineDescription = styled.p`
font-size: 1.5em;
line-height: 1.5em;
`
const DetailsImage = styled.img`
border-radius: 10px;
display: flex;
flex-direction: column;
align-items: center;
width: 50%
`
const DetailsTtitle = styled.h1`
text-align: center;
font-size: 2em;
color: #5618f5;
padding: 0.5em;
`

const User = styled.p`
color: #5618f5;
font-style: italic;
`

const DeleteBtn = styled.button`
border-radius: 3px;
background-color: red;
color: #fff;
cursor: pointer;
border: 0px solid;
font-size: 15px;
`
const ReviewItem = styled.div`
margin: 10px;
padding: 10px;
line-height: 1.5em;
`



export default AirlineDetails;