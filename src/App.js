import './App.css';
import Banner from './componentes/banner';
import Formulario from './componentes/formulario';
import { useState } from "react"

function App() {
  const [colaboradores, setColaboradores] = useState([])

  const aoColaboradorCadastrado = (colaborador) => {
    setColaboradores([...colaboradores, colaborador])
    console.log(colaboradores)
  }

  return (
    <div className="App">
      <Banner />
      <Formulario 
        aoColaboradorCadastrado={colaborador => aoColaboradorCadastrado(colaborador)}/>
    </div>
  );
}

export default App;
