import React from "react";


export default function Portfolio(props) {

    return (
        <div className="project-item">
            <h1 className="project-name">{props.title}</h1>
            <a href={props.url}>
                <img src={process.env.PUBLIC_URL + `/images/${props.image}`} 
                    className="thumbnail"
                />
            </a>
            <p className="project-description">{props.description}</p>
        </div>
    )
}