import {BrowserRouter as Router, Routes, Route, Link} from 'react-router-dom';
import Empresa from './pages/Empresa'
import Home from './pages/Home'
import Contato from './pages/Contato'

function App() {
  return( 
    <Router>
      <ul>
        <li><Link to="/">Home</Link></li>
    
        <li><Link to="/Empresa">Empresa</Link></li>
    
        <li><Link to="/Contato">Contato</Link></li>
      </ul>
      <Routes>
        <Route exact path='/' element="Home">
        <Home />
        </Route>
        <Route path='/Empresa' element="Empresa">
        <Empresa />
        </Route>
        <Route path='/Contato' element="Contato">
        <Contato />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
