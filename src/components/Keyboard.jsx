import Key from './Key'

export default function Keyboard({ avisarClique }) {
    return (
        <div className='teclado' translate='no'>
            <Key nota='C'  tipo='branca' avisarClique={avisarClique}/>
            <Key nota='C#' tipo='preta'  avisarClique={avisarClique}/>
            <Key nota='D'  tipo='branca' avisarClique={avisarClique}/>
            <Key nota='D#' tipo='preta'  avisarClique={avisarClique}/>
            <Key nota='E'  tipo='branca' avisarClique={avisarClique}/>
            <Key nota='F'  tipo='branca' avisarClique={avisarClique}/>
            <Key nota='F#' tipo='preta'  avisarClique={avisarClique}/>
            <Key nota='G'  tipo='branca' avisarClique={avisarClique}/>
            <Key nota='G#' tipo='preta'  avisarClique={avisarClique}/>
            <Key nota='A'  tipo='branca' avisarClique={avisarClique}/>
            <Key nota='A#' tipo='preta'  avisarClique={avisarClique}/>
            <Key nota='B'  tipo='branca' avisarClique={avisarClique}/>
        </div>
    )
}