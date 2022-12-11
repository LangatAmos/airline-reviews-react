import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Button } from "../styles";

function NavBar({ user, setUser }) {
    function handleLogoutClick() {
        fetch("/logout", { method: "DELETE" }).then((r) => {
        if (r.ok) {
            setUser(null);
        }
        });
    }

    return (
        <Wrapper>
        <Logo>
            <Link to="/airlinespage">Airline Reviews App</Link>
        </Logo>
        <Nav>
            <Button as={Link} to="/airlinespage">
                Home
            </Button>
        <Button variant="outline" onClick={handleLogoutClick}>
            Logout
            </Button>
        </Nav>
        </Wrapper>
    );
    }

    const Wrapper = styled.header`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 10px;
    box-shadow: 0px 2.98256px 7.4564px rgba(0, 0, 0, 0.1);
    `;

    const Logo = styled.h1`
    font-family: "Audiowide", cursive;
    font-size: 2.5rem;
    color: #5618f5;
    margin: 0;
    line-height: 1;

    a {
        color: inherit;
        text-decoration: none;
    }
    `;

    const Nav = styled.nav`
    display: flex;
    gap: 10px;
    position: absolute;
    right: 8px;
`;

export default NavBar;