import './App.css';
import freeCodeCampLogo from './Imagenes/freecodecamp-logo.png'
import Boton from './Componentes/boton.jsx'
import Contador from './Componentes/contador.jsx';
import { useState } from 'react'

function App() {

  const [numClics, setNumClics] = useState(0);

  const manejarClic = () => {
    setNumClics(numClics + 1) ;
  }

  const reiniciarContador = () => {
    setNumClics(0);
  }

  return (
    <div className="App">
     <div className='freecodecamp-logo-contenedor'>
      <img className='freecodecamp-logo'
      src={freeCodeCampLogo}
      alt='logo de freecodecamp'/>
     </div>
     <div className='contenedor-principal'>
     <Contador numClics={numClics} />
      <Boton 
      texto='Clic' 
      esBotonDeClick={true}
      manejarClic={manejarClic} />
      <Boton 
      texto='Reiniciar'
      esBotonDeClick={false}
      manejarClic={reiniciarContador} />
     </div>
    </div>
  );
}

export default App;
