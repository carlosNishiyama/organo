import './Botao.css';   

const Botao = ({children, text}) => {
    
    
    return (
        <button className="botao">
            {text}
        </button>
    )
}

export default Botao;