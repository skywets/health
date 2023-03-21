import React, {useState} from "react";
import {Button, Container, Form, Modal, Nav, Navbar, NavLink} from "react-bootstrap";
import '../css/navibarCss.css';
import styled from 'styled-components';

const Styles = styled.div `
a, .navbar-nav, .nav-link, nav-button {
color:#adb1b8;
display:flex;
height:auto;
margin-left:10px;
margin-right:10px;
justify-content:space-between;
font-family: 'Montserrat', Arial, sans-serif;
padding:0px;
&:hover {
color:white
}
}
`

export default function NavHeader() {

    const [show, setShow] = useState(false);
    const handleShow = () => setShow(true);
    const handleClose = () => setShow(false);

    return (

        <>
        <Styles>
        <Navbar collapseOnSelect expand={"lg"} bg={"light"}>
            {/*логотип*/}
            <Container>
            <Navbar.Brand className={"mx-5"} href={"https://skywets.github.io/health/"}>
                <img
                    alt=""
                    src="https://skywets.github.io/health/s11.png"

                    width="170"
                    height="120"
                    className="d-inline-block align-top"
                />{' '}</Navbar.Brand>
                <Navbar.Brand href={"https://skywets.github.io/health/"} className={"m-auto"}  style={{fontFamily:"cursive", color:"black",}} >SAMARKAND HEALTH-TRAVEL</Navbar.Brand>
            </Container>
            {/*кнопка которая будет сворачивать меню*/}
            <Navbar.Toggle aria-controls={"responsive-navbar-navHeader"}/>
            <Navbar.Collapse id={"responsive-navbar-navHeader"}>
                <Nav className={"me-auto"}>
                </Nav>
                <Nav className={"mx-2"} >
                    <Button href={"https://wa.me/79204052050"} variant={"light"}  type={"button"}>
                        <img src={"https://skywets.github.io/health/images/whatsapp.svg"} /></Button>
                    <Button href={"https://t.me/998912125587"} variant={"light"}  type={"button"}>
                        <img src={"https://skywets.github.io/health/images/telegram-app.svg"}/> </Button>
                    <Button variant={"danger"} href={"https://skywets.github.io/health/contacts"}  type={"button"}>Send an application </Button>
                </Nav>
                {/*<Nav className={"m-3"} >*/}
                {/*    <Button   variant={"light"} onClick={handleShow} >Log In</Button>*/}
                {/*    <Button variant={"light"} onClick={handleShow} >Sign Out</Button>*/}
                {/*</Nav>*/}
            </Navbar.Collapse>
        </Navbar>
        </Styles>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Log In</Modal.Title>
                </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <Form.Group controlId={"fromBasicEmail"}>
                                <Form.Label>Email Adress</Form.Label>
                                <Form.Control type={"email"} placeholder={"Enter email"}/>
                                <Form.Text className={"text-muted"}>We will never share your email with anyone else</Form.Text>
                            </Form.Group>
                            <Form.Group controlId={"fromBasicPassword"}>
                                <Form.Label>Password</Form.Label>
                                <Form.Control type={"email"} placeholder={"Enter email"}/>
                            </Form.Group>
                            <Form.Group controlId={"fromBasicCheckbox"}>
                                <Form.Check type={"checkbox"} label={"Remember me"}/>
                            </Form.Group>
                        </Form>
                    </Modal.Body>

            </Modal>
        </>
    )
}