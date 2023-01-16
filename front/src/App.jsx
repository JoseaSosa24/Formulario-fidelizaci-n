import { useState } from 'react'
import './App.css'
import { FormularioClientes } from './components/helpers/Formulario/Clientes/FormularioClientes'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <FormularioClientes />
    </div>
  )
}

export default App
