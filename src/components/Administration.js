import React, { Component } from 'react';
import { useState } from "react";
import { Accordion, AccordionTab } from 'primereact/accordion';
import { Button } from 'primereact/button';
import './Administration.css';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "primereact/resources/themes/lara-light-indigo/theme.css";  //theme
import "primereact/resources/primereact.min.css";                  //core css
import "primeicons/primeicons.css";                                //icons

export default class administration extends Component {
    render() {

        return (
            <div className='accor'>
                <Accordion multiple>
                    <AccordionTab header="Develop a website for restaurant." headerClassName='color' >
                        <div className='Content'>
                            <Row>
                                <Col>
                                    <b>Project Title:</b> Develop a website for restaurant.
                                    <br></br><br></br>
                                    <b>Project Goal and Objectives:</b> Build the website to meet WCAG 2.1 AA standards to be thoroughly tested against the criteria by June 2021.
                                    <br></br><br></br>
                                    <b>Project Scope:</b> Develop a website that will allow the people to see and order the menu from restaurant.
                                    <br></br><br></br>
                                    <b>Project Plan:</b> First devlop a rough design how the website will look like. Then start developing the frontend along with backend. Focus on bigger pictures first and then go for details.
                                    <br></br><br></br>
                                    </Col>
                                <Col><b>Project Deliverables:</b> Website, Admin access for 3 ids, Customer stack limited to 2000, Database that is developed, access to that database.
                                    <br></br><br></br>
                                    <b>Project Incentives:</b> Current websites are not much friendly with the customers. Also those are slow as compared to our design.
                                    <br></br><br></br>
                                    <b>Project Terms and Conditions:</b> All estimates/quotes are based on our understanding of your requirements and as per given time-frame. Any changes to the functionality including micro-improvements, may incur additional costs accordingly. Please ensure and clarify our understanding in a face to face meeting. By accepting a quote, you agree to and accept the terms and conditions of Synapse Worldwide Pty Ltd. Acceptance can be verbal, by email, payment of Initiation, signing a quote.</Col>
                            </Row>



                        </div>
                        <div className='Button'>
                            <Button label="Approve" icon="pi pi-check" 
                                iconPos="right" className="p-button-success p-button-raised p-button-rounded" />
                        </div>

                    </AccordionTab>
                    <AccordionTab header="App Devlopment" headerClassName='color'>
                        <div className='Content'>
                            Project : Project 2
                        </div>
                        <div className='Button'>
                            <Button label="Approve" icon="pi pi-check" 
                                iconPos="right" className="p-button-success p-button-raised p-button-rounded" />
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Al-ML" headerClassName='color'>
                        <div className='Content'>
                            Project : Project 3
                        </div>
                        <div className='Button'>
                            <Button label="Approve" icon="pi pi-check" 
                                iconPos="right" className="p-button-success p-button-raised p-button-rounded" />
                        </div>
                    </AccordionTab>
                    <AccordionTab header="Data science" headerClassName='color'>
                        <div className='Content'>
                            Project : Project 4
                        </div>
                        <div className='Button'>
                            <Button label="Approve" icon="pi pi-check" 
                                iconPos="right" className="p-button-success p-button-raised p-button-rounded" />
                        </div>
                    </AccordionTab>
                </Accordion>
            </div>
        )
    }
}



