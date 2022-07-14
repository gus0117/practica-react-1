import React, { useEffect, useState } from 'react'

function Juego() {

  const [palabra, setPalabra] = useState('');
  const [vidas, setVidas] = useState(5);
  const [palabras, setPalabras] = useState([]);
  const [botones, setBotones] = useState([]);

  const cargarPalabras = () => {
    let auxPalabras = ["Lionel Messi", "Meg Thomas", "Topacio"];

    setPalabras(auxPalabras);
  }

  const cargarBotones = () => {
    //Se puede obtener las letras con su codigo ascii
    let auxBotones = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    setBotones(auxBotones);
  }

  useEffect(()=>{
    cargarPalabras()
  },[]);

  useEffect(()=>{
    cargarBotones()
  },[]);

  const verificarLetra = (letra) => {
    console.log(letra);
  }
  return (
    <div className='container'>
        <div className='row'>
          <div className='col-6'>
            <img src='./assets/ahorcado/0.png' alt='...' />
          </div>
          <div className='col-6'>
            UI info
          </div>
        </div>
        <div className='container'>
          {
            botones.map( (boton) => (
              <button type='button' className='btn btn-primary m-3' onClick={() => verificarLetra(boton)} key={boton}>{ boton }</button>
            ))
          }
        </div>
    </div>
  )
}

export default Juego