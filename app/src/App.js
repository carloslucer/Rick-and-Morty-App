import axios from "axios";
import "./App.css";
import Cards from "./components/Cards.jsx";
import Nav from "./components/Nav";
import { useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import About from "./components/About.jsx";
import Detail from "./components/Detail";
import 'bootstrap/dist/css/bootstrap.min.css';
import Form from "./components/Form";
import Favorites from "./components/Favorites";


function App() {
  const [characters, setCharacters] = useState([]);
  const locacion = useLocation() 

  console.log(locacion)

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
      .then(({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      })
      .catch((err) => {
        window.alert("¡No hay personajes con este ID!");
      });
  };

  const onClose = (id) => {
    setCharacters(characters.filter((character) => character.id !== id));
  };

  return (
    <div>
      {locacion.pathname !== "/" ? <Nav onSearch={onSearch}/> : null}
      <Routes>
        <Route path="/about" element={<About />} />
        <Route path="" element={<Form />} />
        <Route path="/favorites" element={<Favorites/>} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
         <Route path="/detail/:id" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
