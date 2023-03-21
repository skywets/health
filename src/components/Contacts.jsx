import React  from "react";
import ContactForm from "./ContactForm";
import {Container, Nav, Navbar} from "react-bootstrap";
import styled from "styled-components";


// export default class Contacts extends Component {
//     render() {
//
//         return (
//             <Container >
//                 <h1 className={"text-center"}>Contact us</h1>
//                 <Form>
//                     <Form.Group controlId={"fromBasicEmail"}>
//                         <Form.Label>Email Adress</Form.Label>
//                         <Form.Control type={"email"} placeholder={"Enter email"}/>
//                         <Form.Text className={"text-muted"}>We will never share your email with anyone else</Form.Text>
//                     </Form.Group>
//                     <Button variant={"primary"} ty={"submit"}>Submit</Button>
//                 </Form>
//
//                 {/*<Form>*/}
//                 {/*    <h1 style={{ textAlign:"center", marginTop:"5%"}}>Contact us</h1>*/}
//                 {/*    <input style={{width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}} name={"email"} type={"text"} placeholder={"Enter your email"}*/}
//                 {/*    onChange={e => email.onChange (e)} onBlur={e => email.onBlur (e)} value={email.value}/><br/>*/}
//                 {/*    <input style={{width:"50%", height:"50px", marginTop:"10px", marginLeft:"25%"}} name={"password"} type={"password"} placeholder={"Enter your password"}*/}
//                 {/*    onChange={e => password.onChange (e)} onBlur={e => password.onBlur (e)} value={password.value}/><br/>*/}
//                 {/*    <Button style={{width:"100px", height:"50px", marginTop:"10px", marginLeft:"25%"}}  variant={"primary"} ty={"submit"}>Submit</Button>*/}
//                 {/*</Form>*/}
//             </Container>
//
//         )
//     }
// }

const Styles = styled.div `
.nav-item, .nav-a {
color:#adb1b8;
display:flex;
height:50px;
justify-content:space-between;
font-family: 'Montserrat', Arial, sans-serif;
&:hover {
color:white
}
}
`
export const Contacts = () => (
    <>
        <Styles>
            <section style={{ paddingLeft:"10px", paddingRight:"10px",  marginTop:"50px", textAlign:"center",  fontFamily: 'inherit',
                fontSize:" 20px"}}>
                <h1>Контакты</h1>
                <p>На этой странице доступна наша контактная информация. Чтобы получить бесплатную консультацию,
                    заполните контактную форму.</p>
            </section>
        <div style={{background:"#998016", marginTop:"50px", textAlign:"center",  fontFamily: 'Montserrat',
            fontSize:" 20px"}}>
            <Container >
        <Nav >
            <Nav.Item>
             <a style={{marginTop:"10px"}}><img src={"/images/phone.png"} style={{width:"24px", height:"24px"}}/> 8 999 999 99 99</a>
            </Nav.Item>
            <Nav.Item>
                <a style={{marginTop:"10px"}}><img src={"/images/email.svg"} style={{width:"24px", height:"24px"}}/> mail@mail.ru</a>
            </Nav.Item>
            <Nav.Item>
                <a style={{marginTop:"10px"}}><img src={"/images/web.png"} style={{width:"24px", height:"24px"}}/> health-travel.ru</a>
            </Nav.Item>
            <Nav.Item>
                <a style={{marginTop:"10px"}}><img src={"/images/location.png"} style={{width:"24px", height:"24px"}}/> Samarkand darvoza</a>
            </Nav.Item>
        </Nav>
            </Container>
        </div>

        </Styles>
        <ContactForm/>
    </>


)