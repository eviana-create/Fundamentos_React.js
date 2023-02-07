import './App.css'
import HelloWorld from './components/HelloWorld'
import SayMyName from './components/SayMyName'
import Pessoa from './components/Pessoa'
import Frase from './components/Frase'
import List from './components/List'

  function App() {
    const nome = 'maria'
    return(
    <div className="App">
      <h1>Comunidade Vila Moraes/SBC</h1>
      <Frase/>
      <Frase/>
      <SayMyName nome="Emerson"/>
      <SayMyName nome="josé" />
      <SayMyName nome={nome} />
      <Pessoa nome="Rodrigo" 
      idade="28" 
      profissao="Programador" 
      foto="https://via.placeholder.com/150" 
      />
      <List />
    </div>
  )
}

export default App
