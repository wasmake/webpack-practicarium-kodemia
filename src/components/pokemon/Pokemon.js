import React from "react";

import "./pokemon.css";

export default function Pokemon(props) {
    return (
        <div className="pokemon">
            <h1>Pokemon</h1>
            <span className="id">{props.id}</span>
            <p>Name: {props.name}</p>
            <p>Types: {props.types} </p>
            <img src={props.sprite} alt={props.name} width={100}  />
        </div>
    );
}