import React, { Component } from "react";
import "./home.css";
import trebleclef from "../img/treble_clef.png";

class Home extends Component {
    render() {
        return (
            <div>
                <div className="header">
                    <h1> Hey! I'm Aryan Tiwari, an aspiring software developer who is passionate about making change! </h1>
                </div>
                {/* <div className="flip-panels">
                    <div className="flip-panel">
                        <div className="flip-panel-inner">
                            <div className="flip-panel-front">
                                <img src={trebleclef} alt="treble-clef"></img>
                            </div>
                            <div className="flip-panel-back">
                                <p> I love playing music, and have been playing the flute for 6 years, and the piano for 7 years! </p>
                            </div>
                        </div>
                    </div>
                </div> */}
            </div>
        )
    }
}

export default Home;