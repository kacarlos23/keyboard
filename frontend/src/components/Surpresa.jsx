import foto1 from '../assets/img/1.jfif'
import foto2 from '../assets/img/2.jfif'
import foto3 from '../assets/img/3.jfif'
import musicaFundo from '../assets/audio/musica.m4a'

export default function Surpresa() {
    return (
        <div className='mural'>
            <audio src={musicaFundo} autoPlay loop></audio>
            <div className='polaroid'>
                <img src={foto1} alt="Nós dois" />
                <p>Nois dois</p>
            </div>
            <div className='polaroid'>
                <img src={foto2} alt="" />
                <p>Eu te amo! ❤️</p>
            </div>
            <div className='polaroid'>
                <img src={foto3} alt="" />
                <p>Minha ceguinha S2</p>
            </div>
        </div>
    )
}