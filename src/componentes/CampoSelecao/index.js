import './CampoSelecao.css'

const CampoSelecao = ({label, opcoes, obrigatorio, valor, aoAlterado}) => {

    return (
        <div className="campoSelecao">
            <label>{label}</label>
            <select required={obrigatorio} value={valor} onChange={evento => aoAlterado(evento.target.value)}>
                {opcoes.map(opcao => (
                    <option key={opcao} value={opcao}>
                        {opcao}
                    </option>
                ))}
            </select>
        </div>
    )
}
export default CampoSelecao;