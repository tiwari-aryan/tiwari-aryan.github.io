import React, { Component } from "react";
import "./projects.css";

class Projects extends Component {
    render() {
        return (
            <div className="projects">
                <a href="/" className="project">
                    <div className="project-header">
                        <h5> Kernels and Image Processing </h5>
                        <small>JAN 2023 - PRESENT</small>
                    </div>
                    <p> Exploring kernels and image processing using NumPy, while developing convolutional neural networks </p>
                </a>
                <a href="https://github.com/tiwari-aryan/Neural-Network" className="project">
                    <div className="project-header">
                        <h5> Neural Network </h5>
                        <small>JAN 2023 - PRESENT</small>
                    </div>
                    <p> Implementing a feed-forward neural network with backpropogation from scratch using NumPy </p>
                </a>
                <a href="https://purplehydrogen.notion.site/purplehydrogen/Purple-Hydrogen-13803900f41b49c78ff7027affdf8e54" className="project">
                    <div className="project-header">
                        <h5> Purple Hydrogen </h5>
                        <small>DEC 2022 - PRESENT</small>
                    </div>
                    <p> Using Purple Sulfur Bacteria to innovate clean hydrogen production </p>
                </a>
                <a href="/" className="project">
                    <div className="project-header">
                        <h5> AA Streetball </h5>
                        <small>MAR 2022 - JUN 2022</small>
                    </div>
                    <p> Developed a simple 2D basketball with a simple GUI using PyGame </p>
                </a>
            </div>
        )
    }
}

export default Projects;