import React from "react";

export default function Hero() {
    return (
        <div className="hero-container">
            <h1 className="name-title">Cecily Toro</h1>
            <div className="float-container">
                <img className="portrait" src={process.env.PUBLIC_URL + "/images/bw.jpg"}/>
                <p className="hero-description">A military veteran taking the skills learned from ten years in the medical field 
                    and applying them to become a web developer.</p>
            </div>
            <div className="hr"></div> 
        </div>
    )
}