import React, { createContext, useState } from "react";
import Counter from "../counter/Counter";
import EpisodeBrowser from "../episode/EpisodeBrowser";
import PokemonBrowser from "../pokemon/PokemonBrowser";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Hello from "../hello/Hello";
import Pokemon from "../../pages/pokemon/Pokemon";
import SearchPokemon from "../../pages/pokemon/SearchPokemon";
import MainLayout from "../../layouts/MainLayout";
import Todolist from "../../pages/todolist/Todolist";
import TodoEdit from "../../pages/todolist/TodoEdit";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainLayout />} >
                    <Route index element={<Todolist />} />
                </Route>
                <Route path="/pokemon" element={<MainLayout />} >
                    <Route path=":name" element={<SearchPokemon />} />
                </Route>
                <Route path="/todolist/edit" element={<MainLayout />} >
                    <Route path=":id" element={<TodoEdit />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}