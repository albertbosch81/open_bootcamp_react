import React, { useState, useEffect } from 'react'

export const Clock = () => {

    const initialState = {
       fecha: new Date(),
       edad: 0,
       nombre: 'Nombre',
       apellidos: 'Apellido',
    }
 
    const [state, setState] = useState(initialState);
 
    function tick(){
       return setState({
          fecha: new Date(),
          edad: state.edad + 1,
          nombre: state.nombre,
          apellidos: state.apellidos,
       })
    }
 
    useEffect(() => {
       const timerID = setInterval(() => {
          tick();
       }, 1000);
       return () => {
          clearInterval(timerID)
       };
    },);
 
    return (
       <div>
           <h2>
             Hora Actual:
             {state.fecha.toLocaleTimeString()}
          </h2>
          <h3>{state.nombre} {state.apellidos}</h3>
          <h1>Edad: {state.edad}</h1>
       </div>
    );
 }