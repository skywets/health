import React from "react";
import {Accordion} from "react-bootstrap";
import styled from "styled-components";
const Styles = styled.div `
a, .accordion, accordion-item, .accordion-body {
color:#adb1b8;
width:auto;
margin-top:10px;
margin-bootom:10px;
padding-left:10px;
padding-right:10px;
color:#DEB887;
}
`
 function ListArticles () {
     return (
         <>
             <Styles>
                 <Accordion defaultActiveKey="0">
                     <Accordion.Item eventKey="0">
                         <Accordion.Header><h1>Articles Item </h1></Accordion.Header>
                         <Accordion.Body>
                         <h3>    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                             aliquip ex ea commodo consequat. Duis aute irure dolor in
                             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                             culpa qui officia deserunt mollit anim id est laborum.</h3>
                         </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="1">
                         <Accordion.Header>Articles Item #2</Accordion.Header>
                         <Accordion.Body>
                             <h3>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                             eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                             minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                             aliquip ex ea commodo consequat. Duis aute irure dolor in
                             reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                             pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                             culpa qui officia deserunt mollit anim id est laborum.</h3>
                         </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="2">
                         <Accordion.Header>Articles Item #2</Accordion.Header>
                         <Accordion.Body>
                          <h3>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                              minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                              aliquip ex ea commodo consequat. Duis aute irure dolor in
                              reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                              pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                              culpa qui officia deserunt mollit anim id est laborum.</h3>
                         </Accordion.Body>
                     </Accordion.Item>
                     <Accordion.Item eventKey="3">
                         <Accordion.Header>Articles Item #2</Accordion.Header>
                         <Accordion.Body>
                             <h3>   Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                 eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                                 minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                 aliquip ex ea commodo consequat. Duis aute irure dolor in
                                 reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                                 pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                 culpa qui officia deserunt mollit anim id est laborum.</h3>
                         </Accordion.Body>
                     </Accordion.Item>
                 </Accordion>
             </Styles>
         </>
     );
 }
export const Articles = () => (
    <ListArticles/>
)