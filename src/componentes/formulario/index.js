import "./formulario.css"
import CampoTexto from "../CampoTexto";
import CampoSelecao from "../CampoSelecao";
import Botao from "../Botao";
import { useState } from "react"

const Formulario = (props) => {
    const opcoes = [' ','Programação', 'Front-End', 'Data Science', 'DevOps', 'UX e Design', 'Mobile', 'Inovação e Gestão'];
    const [nome, setValorNome] = useState('')
    const [cargo, setValorCargo] = useState('')
    const [imagem, setValorImagem] = useState('')
    const [time, setValorTime] = useState('')

    const aoSalvar = (evento) => {
        evento.preventDefault();
        props.aoColaboradorCadastrado({ nome, cargo, imagem, time });
        
    };
    return(
        <div className="cardFormulario">
            <h2>Preencha os dados para criar o card do colaborador.</h2>
            <form className="formulario" onSubmit={aoSalvar}>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Nome" 
                    placeholder="Digite seu nome"
                    valor={nome} 
                    aoAlterado={valor => setValorNome(valor)}/>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Cargo" 
                    placeholder="Digite seu cargo" 
                    valor={cargo} 
                    aoAlterado={valor => setValorCargo(valor)}/>
                <CampoTexto 
                    obrigatorio={true} 
                    label="Imagem" 
                    placeholder="Informe o endereço da imagem" 
                    valor={imagem} 
                    aoAlterado={valor => setValorImagem(valor)}/> 
                <CampoSelecao  
                    obrigatorio={true} 
                    label="Time" 
                    valor={time} 
                    opcoes={opcoes} 
                    aoAlterado={valor => setValorTime(valor)}/>
                <Botao type="submit" text="Criar Card"/>
            </form>
        </div>
    )
}

export default Formulario;