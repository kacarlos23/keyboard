export default function Key({ nota, tipo, avisarClique }) {
    return (
        <button 
            className={`tecla ${tipo}`} 
            onClick={() => avisarClique(nota)}
        >
            {tipo === 'branca' ? nota : ''}
        </button>
    )
}