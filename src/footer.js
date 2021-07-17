import React from "react"
import { Component } from "react";
import {Navbar} from "react-bootstrap";
import "./style.css"

class AppFooter extends Component{
    render() {
        return(
            <div className="absolute-bottom">  
                <Navbar bg="dark" expand="lg" className="navbar-nav mx-auto">
                <Navbar.Brand style={{visibility: "hidden"}} href="#">York GPA calculator</Navbar.Brand>
                </Navbar>
            </div>
        )
    }
}

export default AppFooter;