import React, { Component } from "react";
import "./navbar.css";
import "bootstrap/dist/css/bootstrap.css";

class NavBar extends Component {
    render() {
        return (
            <div>
                <div className="navbar navbar-dark navbar-expand-lg bg-body-tertiary">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="/#/"> <b>AT</b> </a>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/projectsgoat">Projects</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/blog">Blog</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/resume">Resume</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/#/contact">Contact</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default NavBar;