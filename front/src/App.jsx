import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Main } from './components/layouts/Main'
import { Footer } from './components/helpers/Footer/Foter'
import { Header } from './components/helpers/Header/Header'
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
