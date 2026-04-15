import { useRef, useState, useEffect } from 'react'
import foto1 from '../assets/img/1.jfif'
import foto2 from '../assets/img/2.jfif'
import foto3 from '../assets/img/3.jfif'
import foto4 from '../assets/img/4.jfif'
import musicaFundo from '../assets/audio/musica.m4a'

export default function Surpresa() {
  const audioRef = useRef(null)
  const [tocando, setTocando] = useState(true)
  const [audioPronto, setAudioPronto] = useState(false)

  // Garante que o áudio está pronto para tocar
  useEffect(() => {
    if (audioRef.current) {
      // Se já estiver carregado, marca como pronto
      if (audioRef.current.readyState >= 3) {
        setAudioPronto(true)
      }
    }
  }, [])

  function pausarOuTocar() {
    if (!audioPronto || !audioRef.current) return
    
    if (tocando) {
      audioRef.current.pause()
      setTocando(false)
    } else {
      audioRef.current.play().catch(err => {
        console.error('Erro ao reproduzir áudio:', err)
      })
      setTocando(true)
    }
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <audio
        ref={audioRef}
        src={musicaFundo}
        autoPlay
        loop
        preload="auto"
        onCanPlay={() => setAudioPronto(true)}
        onError={(e) => {
          console.error('Erro ao carregar áudio:', e)
          setAudioPronto(false)
        }}
      />
      
      <button className="btn-musica" onClick={pausarOuTocar} disabled={!audioPronto}>
        {!audioPronto ? '🔄 Carregando...' : (tocando ? '⏸️ Pausar Música' : '▶️ Tocar Música')}
      </button>
      
      <div className='mural' translate='no'>
        <div className='polaroid'>
          <img src={foto1} alt="Nós dois"/>
          <p>Nois dois</p>
        </div>
        <div className='polaroid'>
          <img src={foto2} alt=""/>
          <p>Eu te amo! ❤️</p>
        </div>
        <div className='polaroid'>
          <img src={foto3} alt=""/>
          <p>Minha ceguinha S2</p>
        </div>
        <div className='polaroid'>
          <img src={foto4} alt=""/>
          <p>👅</p>
        </div>
      </div>
    </div>
  )
}