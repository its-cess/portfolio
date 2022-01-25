import React from "react";


export default function Portfolio(props) {

    return (
        <div className="project-item">
            <h1>{props.title}</h1>
            <a href={props.url}>
                <img src={process.env.PUBLIC_URL + `/images/${props.image}`} 
                    className="thumbnail"
                />
            </a>
            <p>{props.description}</p>
        </div>
    )
}