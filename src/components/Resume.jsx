import React, { Component } from "react";
import "./components.css";
import "./resume.css";
import resume from "../img/resume.pdf"

class Resume extends Component {
    render() {
        return (
            <div className="resume">
                <h4> Feel free to check out my resume! It can be downloaded <a href={resume} download="Aryan Tiwari - Resume">here.</a></h4>
            </div>
        )
    }
}

export default Resume;