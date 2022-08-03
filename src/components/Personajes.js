//import React from "react";
export  default function Personajes(props)
{
    const {personajes,setPersonajes}=props;
    const resetPersonajes=()=>{
        //console.log("reseteando");
        setPersonajes(null);
    }
   // console.log(props);
    return(
    <div className="characters">
        <h1>Desde Personajes Js</h1>
        <span className="back-home" onClick={resetPersonajes}>Volver a la home</span>
        <div className="container-characters">
            {personajes.map((personaje,index)=>(
                <div className="character-container" key={index}>
                     <img src={personaje.image} alt={personaje.name} />
                    <h6>{personaje.name}</h6>
                </div>
            ))}
        </div>
    </div>
    );
}