import React from "react";
import Navbar from "./components/NavBar";
import { HashRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Projects from "./components/Projects";
import Blog from "./components/Blog";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
    return (
        <div className="App">
            <Navbar />
            <Router basename="/">
                <Routes>
                    <Route path="/" exact element={<Home />}></Route>
                    <Route path="/projects" exact element={<Projects />}></Route>
                    <Route path="/blog" exact element={<Blog />}></Route>
                    <Route path="/resume" exact element={<Resume />}></Route>
                    <Route path="/contact" exact element={<Contact />}></Route>
                </Routes>
            </Router>
        </div>
    );
}

export default App;