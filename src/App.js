
import imageRickMorty from "./img/rick-morty.png";
import './App.css';
import { useState } from "react";
import Personajes from "./components/Personajes";

function App() {
  //https://rickandmortyapi.com/
  const[personajes,setPersonajes]=useState(null);
  const reqApi= async()=>{
    const api=await fetch('https://rickandmortyapi.com/api/character');
    const personajesApi=await api.json();
    setPersonajes(personajesApi.results);
    //console.log(personajesApi);
  };
 // console.log(personajes);
  return (
    <div className="App">
      <header className="App-header">
        <h1 className='title'> Rick & Morty</h1>
        {personajes? (
        <Personajes personajes={personajes} setPersonajes={setPersonajes}/>
        ):(
        <>
        <img src={imageRickMorty} alt="Rick & Morty" className="img-home"/>
        <button onClick={reqApi} className="btn-search">Buscar Personajes</button>
        </>
        )}
      </header>
    </div>
  );
}

export default App;
