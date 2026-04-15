import { useState, useRef, useEffect } from 'react'
import './App.css'
import Keyboard from './components/Keyboard'
import Surpresa from './components/Surpresa'
import musicaFundo from './assets/audio/musica.m4a'

const frequencias = {
  'C': 261.63, 'C#': 277.18, 'D': 293.66, 'D#': 311.13,
  'E': 329.63, 'F': 349.23, 'F#': 369.99, 'G': 392.00,
  'G#': 415.30, 'A': 440.00, 'A#': 466.16, 'B': 493.88
}

let contextoDeAudio = null;

function tocarSomDaNota(nota) {
  if (!contextoDeAudio) {
    contextoDeAudio = new (window.AudioContext || window.webkitAudioContext)()
  }
  if (contextoDeAudio.state === 'suspended') {
    contextoDeAudio.resume();
  }
  const oscilador = contextoDeAudio.createOscillator()
  const volume = contextoDeAudio.createGain()
  oscilador.type = 'triangle'
  oscilador.frequency.value = frequencias[nota]
  oscilador.connect(volume)
  volume.connect(contextoDeAudio.destination)
  oscilador.start()
  volume.gain.setValueAtTime(1, contextoDeAudio.currentTime)
  volume.gain.exponentialRampToValueAtTime(0.001, contextoDeAudio.currentTime + 1.5)
  oscilador.stop(contextoDeAudio.currentTime + 1.5)
}

function App() {
  const [notasTocadas, setNotasTocadas] = useState([])
  const [taDesbloqueado, setTaDesbloqueado] = useState(false)
  const audioPreloadRef = useRef(null)

  // Pré-carrega o áudio da surpresa em background
  useEffect(() => {
    if (audioPreloadRef.current) {
      audioPreloadRef.current.load()
    }
  }, [])

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

    const senhasValidas = ['CDEFG', 'CCDE', 'CBCG'] // Lista de possibilidades para desbloquear a surpresa
    const acertou = senhasValidas.some(senhaSecreta => palavraTocada.includes(senhaSecreta))

    // Confere se o padrao de notas está no meio das notas tocadas
    if (acertou) {
      setTaDesbloqueado(true)
    }
  }

  return (
    <div>
      {/* Áudio pré-carregado em background (invisível) */}
      <audio
        ref={audioPreloadRef}
        src={musicaFundo}
        preload="auto"
        style={{ display: 'none' }}
      />
      
      {taDesbloqueado ? <Surpresa /> : <Keyboard avisarClique={receberClique} />}
    </div>
  )
}

export default App