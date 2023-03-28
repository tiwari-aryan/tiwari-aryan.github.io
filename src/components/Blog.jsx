import React, { Component } from "react";
import "./components.css";
import "./blog.css";

class Blog extends Component {
    render() {
        return (
            <div className="blog-posts">
                <a href="#/kernels-and-image-processing" className="blog-post">
                    <div className="blog-post-header">
                        <h5> Kernels and Image Processing </h5>
                    </div>
                    <p>March 16th, 2023</p>
                </a>
            </div>
        )
    }
}

export default Blog;