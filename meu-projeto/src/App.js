// eslint-disable-next-line no-unused-vars
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Empresa from './pages/Empresa'
import Home from './pages/Home'
import Contato from './pages/Contato'
import NavBar from './components/Layout/NavBar';
import Footer from './components/Layout/Footer';

  function App() {
  return( 
    <Routes>
      <NavBar />
        <Route exact path='/' element={<Home />}>
        <Home />
        </Route>
        <Route path='/Empresa' element={<Empresa />}>
        <Empresa />
        </Route>
        <Route path='/Contato' element={<Contato/>}>
        <Contato />
        </Route>
      <Footer />
      </Routes>
  )
}

export default App
