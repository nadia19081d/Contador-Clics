import { useState } from 'react'
import './App.css'
import freecodecamplogo from './imagenes/FreeCodeCamp_logo.png'
import Boton from './componentes/boton'
import Contador from './componentes/contador'

function App() {
  const [numClic, setNumClics] = useState(0); // esto son los hooks, le pasamos el valor inicial del estado
 
 
  const manejarClic = () => {
    setNumClics(numClic +1); 

  }
  
  const reiniciarContador = () => {
    setNumClics(0); 
  }
  

  return (
      <div className='App'>
        <div className='freecodecamp-logo-contenedor'>
          <img className='frecodecamp-logo' src={freecodecamplogo} alt='logo de freeCodeCamp'/>

        </div>

        <div className='contenedor-principal'>
          <Contador numClic={numClic} />
          <Boton
          texto= "click"
          esBotonDeClic = {true}
          manejarClic={manejarClic }
          />
          <Boton
          texto= "Reiniciar"
          esBotonDeClic = {false}
          manejarClic={reiniciarContador}
          />

        </div>
        
    </div>
  )
}

export default App
