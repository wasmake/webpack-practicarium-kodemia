import React, { useEffect, useState } from "react";
import Pokemon from "../../components/pokemon/Pokemon";
import { useParams } from "react-router-dom";

export default function SearchPokemon() {

    const [activePokemon, setActivePokemon] = useState({});

    const {name} = useParams();

    console.log(name);

    useEffect(() => {
        fetch(`https://pokeapi.co/api/v2/pokemon/${name.toLowerCase()}`)
            .then(response => response.json())
            .then(data => {
                const pokemon = {
                    id: data.id,
                    name: data.name,
                    sprite: data.sprites.front_default
                }
                console.log(pokemon);

                setActivePokemon(pokemon);
            });
    }, [name]);


    return (
        <>
            <Pokemon id={activePokemon.id} name={activePokemon.name} sprite={activePokemon.sprite} />
        </>
    )
}