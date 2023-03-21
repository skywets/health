import React from "react";
import {CDBBox, CDBBtn, CDBIcon } from 'cdbreact';


export default function Footer() {
    return (


          <CDBBox  display="flex" flex="column" className="mx-auto py-5" style={{ width: '100%',
          marginTop:"10%", backgroundColor:"#708090", padding:"10px"}} >
              <CDBBox display="flex" justifyContent="between" className="flex-wrap, mx-3" >
                  <CDBBox>

                      <a href="https://skywets.github.io/health/" className="d-flex align-items-center p-0 text-white text-decoration-none link-dark">
                          {/*<img alt="logo"  width="30px" />*/}
                          <span className="m- h5 font-weight-bold "> SAMARKAND HEALTH-TRAVEL</span>
                      </a>
                      <a href="https://skywets.github.io/home" className="d-flex align-items-center p-0 text-white text-decoration-none link-dark">
                          {/*<img alt="logo"  width="30px" />*/}
                          <span className="m- h5 font-weight-bold "> Home</span>
                      </a>
                      <a href="https://skywets.github.io/treatments" className="d-flex align-items-center p-0 text-white text-decoration-none link-dark">
                          {/*<img alt="logo"  width="30px" />*/}
                          <span className="m- h5 font-weight-bold "> Treatments</span>
                      </a>
                      <a href="../About.jsx" className="d-flex align-items-center p-0 text-white text-decoration-none link-dark">
                          {/*<img alt="logo"  width="30px" />*/}
                          <span className="m- h5 font-weight-bold "> About</span>
                      </a>
                      {/*<p className="my-3" style={{ width: '250px' }}>*/}
                      {/*    We are creating High Quality Resources and tools to Aid developers during the*/}
                      {/*    developement of their projects*/}
                      {/*</p>*/}

                  </CDBBox>
                  <CDBBox>
                      <a href="https://skywets.github.io/health/" className="d-flex align-items-center p-0 text-white me-1 text-decoration-none link-dark">
                          <span className="m- h5 font-weight-bold"> Contacts</span>
                      </a>
                      <p><i className="fas fa-home me-1 "></i> Samarkand Darvoza</p>
                      <p>
                          <i className="fas fa-envelope me-1"></i>
                          info@example.com
                      </p>
                      <p><i className="fas fa-phone me-1"></i> 8 999 999 99 99</p>
                      <p><i className="fas fa-globe me-1 " ></i> <a style={{color:"black", textDecoration:"none"}} href={"https://skywets.github.io/health/"}>helath-travel.ru</a></p>
                      <CDBBox flex="column" style={{ cursor: 'pointer', padding: '0' }}>
                      </CDBBox>
                  </CDBBox>
              </CDBBox >
              <CDBBox display="flex" className="mt-4">
                  <CDBBtn flat color="dark" className="mx-3" >
                      <CDBIcon fab icon="facebook-f" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2">
                      <CDBIcon fab icon="instagram" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="mx-3" href={"https://wa.me/89204052050"}>
                      <CDBIcon fab icon="whatsapp" />
                  </CDBBtn>
                  <CDBBtn flat color="dark" className="p-2" href={"https://t.me/998912125587"}>
                      <CDBIcon fab icon="telegram" />
                  </CDBBtn>
              </CDBBox>
              <small style={{color:"white"}} className="text-center mt-5">&copy; Health-Travel, 2023. All rights reserved.</small>
          </CDBBox>


        )

}