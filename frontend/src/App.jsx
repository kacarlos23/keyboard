import { useState } from 'react'
import './App.css'
import Keyboard from  './components/Keyboard'
import Surpresa from './components/Surpresa'

const frequencias = {
  'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13, 
  'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00, 
  'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88
}

function tocarSomDaNota(nota) {
  const contexto = new (window.AudioContext || window.webkitAudioContext) ()

  const oscilador = contexto.createOscillator()
  const volume = contexto.createGain()

  oscilador.type = 'triangle'
  oscilador.frequency.value = frequencias[nota]

  oscilador.connect(volume)
  volume.connect(contexto.destination)

  oscilador.start()
  volume.gain.setValueAtTime(1, contexto.currentTime)
  volume.gain.exponentialRampToValueAtTime(0.001, contexto.currentTime + 1.5)
  oscilador.stop(contexto.currentTime + 1.5)
}

function App() {

  const [notasTocadas, setNotasTocadas] = useState([])
  const [taDesbloqueado, setTaDesbloqueado] = useState(false)

  function receberClique(notaQueChegou) {
    // Chama o sintetizador
    tocarSomDaNota(notaQueChegou)

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
