import { useState } from "react"
import Formulario from "./components/Formulario"
import Tabela from "./components/Tabela"

function App() {
  const [imc, setImc] = useState(0);

  return (
    <>
      <Formulario valorImc={imc} setValorImc={setImc}/>
      <Tabela valorImc={imc} setValorImc={setImc}/>
    </>
  )
}

export default App
