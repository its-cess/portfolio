import React from "react";

export default function Hero(props) {
    return (
        <div className="hero-container">
            <h1 className="name-title">Cecily Toro</h1>
            <div className="float-container">
                <img className="portrait" src={process.env.PUBLIC_URL + "/images/bw.jpg"}/>
                <p className="hero-description">
                    I'm a military veteran that is hardworking, dependable,
                    and detail oriented. Naturally creative, I have a passion
                    for frontend web development creating clean, beautiful, 
                    and responsive webpages. You can see samples of my work 
                    by clicking on the screenshots below.
                </p>       
            </div> 
        </div>
    )
}