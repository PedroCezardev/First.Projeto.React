
import { Route } from 'react-router-dom'
import { BrowserRouter as Router, Routes } from 'react-router-dom'
import Home from './Page/Home/Home'
import Descricao from './Page/Sobre/Sobre'
import Perfil from './Page/Perfil/Perfil'

function App() {
// App
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/Sobre' element={<Descricao/>} />
        <Route path='/Perfil' element={<Perfil/>} />
      </Routes>
    </Router>
  )
}

export default App
