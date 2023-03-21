import React from "react";
import {Nav, Navbar, Button, Container} from "react-bootstrap";
import {Link} from "react-router-dom";
import '../css/navibarCss.css';
import styled from 'styled-components';

const Styles = styled.div `
a, .navbar-nav, .nav-link {
color:#adb1b8;
display:flex;
width:180px;
justify-content:space-between;
margin: 0;
padding: 0;
font-family: 'Montserrat', Arial, sans-serif;
&:hover {
color:white
}
}
`

export default function Navibar() {
    return(
        <Styles >
        <Navbar  collapseOnSelect expand={"lg"} bg={"dark"} variant={"dark"}>
            <Container >
            <Navbar.Toggle aria-controls={"responsive-navbar-nav"}/>
            <Navbar.Collapse id={"responsive-navbar-nav"}>
                <Nav>
                    <Nav.Link ><Link to={"/home"}>HOME</Link></Nav.Link>
                    <Nav.Link><Link to={"/services"}>Services</Link></Nav.Link>
                    <Nav.Link><Link to={"/articles"}>Articles</Link></Nav.Link>
                    <Nav.Link><Link to={"/treatments"}>Treatments</Link></Nav.Link>
                    <Nav.Link><Link to={"/about"}>About</Link></Nav.Link>
                    <Nav.Link><Link to={"/contacts"}>Contacts</Link></Nav.Link>

                    {/*<Nav.Link>HOME</Nav.Link>*/}
                    {/*<Nav.Link>HOME</Nav.Link>*/}
                    {/*<Nav.Link>HOME</Nav.Link>*/}
                    {/*<Nav.Link>HOME</Nav.Link>*/}
                </Nav>
            </Navbar.Collapse>
            </Container>
        </Navbar>
        </Styles>
    )
}