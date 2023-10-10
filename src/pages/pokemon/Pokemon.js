import React from "react";

import PokemonBrowser from "../../components/pokemon/PokemonBrowser";
import Footer from "../../components/footer/Footer";

export default function Pokemon() {
    return (
        <div className="Pokemon">
            <h1>Pokemon</h1>
            <PokemonBrowser />
            <Footer />
        </div>
    );
}