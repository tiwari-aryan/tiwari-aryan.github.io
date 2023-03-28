import React, { Component } from "react";
import "./components.css";
import "./contact.css";
import githublogo from "../img/github_logo.png";
import gmaillogo from "../img/gmail_logo.png";
import linkedinlogo from "../img/linkedin_logo.png";

class Contact extends Component {

    render() {
        return (
            <div className="contact">
                <div className="contact-button">
                    <a href="https://github.com/tiwari-aryan/">
                        <img className="github-logo" src={githublogo} alt="github-logo"></img>
                    </a>
                    <p> GitHub </p>
                </div>
                <div className="contact-button">
                    <a href="mailto: aryan.tiwari0204@gmail.com">
                        <img className="gmail-logo" src={gmaillogo} alt="gmail-logo"></img>
                    </a>
                    <p> Gmail </p>
                </div>
                <div className="contact-button">
                    <a href="https://www.linkedin.com/in/aryan-tiwari-a945bb234/">
                        <img className="linkedin-logo" src={linkedinlogo} alt="linkedin-logo"></img>
                    </a>
                    <p> LinkedIn </p>
                </div>
            </div>
        )
    }
}

export default Contact;