import { useState } from 'react'
import './App.css'
import Keyboard from  './components/Keyboard'
import Surpresa from './components/Surpresa'

function App() {

  const [notasTocadas, setNotasTocadas] = useState([])
  const [taDesbloqueado, setTaDesbloqueado] = useState(false)

  function receberClique(notaQueChegou) {
    // Cria lista com nota que acabou de chegar
    const novaListaDeNotas = [...notasTocadas, notaQueChegou]

    // Guarda a nota na memoria
    setNotasTocadas(novaListaDeNotas)

    // Junta todas as notas numa string só
    const palavraTocada = novaListaDeNotas.join('')
    console.log("Senha que está sendo formada: ", palavraTocada)

    // Confere se o padrao de notas está no meio das notas tocadas
    if (palavraTocada.includes('CDEFG')) {
      setTaDesbloqueado(true) 
    }
  }


  return (
    <div>
      {taDesbloqueado ? <Surpresa /> : <Keyboard avisarClique={receberClique} />}
    </div>
  )
}

export default App
