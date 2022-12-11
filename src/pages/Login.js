import { useState } from "react";
import styled from "styled-components";
import LoginForm from "../components/LoginForm";
import SignUpForm from "../components/SignUpForm";
import { Button } from "../styles";

function Login({ onLogin }) {
    const [showLogin, setShowLogin] = useState(true);

    return (
        <Wrapper>
        <Logo>Airline Reviews App</Logo>
        {showLogin ? (
            <>
            <LoginForm onLogin={onLogin} />
            <Divider />
            <p>
                Not registered? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(false)}>
                Sign Up
                </Button>
            </p>
            </>
        ) : (
            <>
            <SignUpForm onLogin={onLogin} />
            <Divider />
            <p>
                Not registered? &nbsp;
                <Button color="secondary" onClick={() => setShowLogin(true)}>
                Log In
                </Button>
            </p>
            </>
        )}
        </Wrapper>
    );
}

const Logo = styled.h1`
    font-family: "Audiowide", cursive;
    font-size: 2.5rem;
    color: blue;
    margin: 8px 0 16px;
`;

const Wrapper = styled.section`
    max-width: 40rem;
    margin: 50px auto;
    padding: 20px;
    `;

const Divider = styled.hr`
    border: none;
    border-bottom: 1px solid #ccc;
    margin: 16px 0;
    `;

export default Login;