import "./CampoTexto.css"

const CampoTexto = (props) => {

   

    const aoDigitar = (evento) => {
        props.aoAlterado(evento.target.value);
    }
    return(
        <div className="campoTexto">
            <label>{props.label}</label>
            <input 
                placeholder={props.placeholder} 
                value={props.valor} 
                required={props.obrigatorio}
                onChange={aoDigitar}
               />
        </div>
    )
}

export default CampoTexto;