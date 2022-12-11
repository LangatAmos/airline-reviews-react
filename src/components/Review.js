import React from 'react';
// import { useEffect, useState } from "react";
// import { NavLink, Link } from "react-router-dom";

function Review({id, title, comment, user}){
    return (
        <div>
            <h5>{title}</h5>
            <p>{comment}</p>
            <p>By: {user}</p>
        </div>
    )
}

export default Review;