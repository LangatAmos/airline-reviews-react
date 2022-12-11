import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


function Footer(){
    return (
        <FooterWrapper className="footer">
            <FooterItems className="footer-items">
            <Link to="/airlinespage">Airline Reviews App</Link>
            <Link to="/airlinespage">Home</Link>
            <Link to="/signup">Sign Up?</Link>

                <h4>Contact</h4>
            </FooterItems>
            <Copy id="copyright">
                <p className='copy'>@All rights deserved,terms and condition applied.</p>
            </Copy>
        </FooterWrapper>
    )
}

const FooterItems = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
margin: 20px 50px;
`
const  FooterWrapper = styled.div`
height: 100px;
background-color: lavenderblush;
align-items: center;
margin: 20px 50px;
padding: 20px;
`
const Copy = styled.div`
background-color:lavenderblush;
text-align: center;
`

export default Footer;