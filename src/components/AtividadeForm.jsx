import { useState, useEffect } from "react";

const atividadeInicial = {
    id: 0,
    titulo: '',
    prioridade: 0,
    descricao: ''
}

export default function AtividadeForm(props) {
    
    const [atividade, setAtividade] = useState(atividadeAtual);

    useEffect(() => {
        if (props.ativSelecionada !== 0) {
            setAtividade(props.ativSelecionada);
        }
    }, [props.ativSelecionada]);

    const inputTextHandler = (e) => {
        const {name, value} = e.target;

        setAtividade({...atividade, [name]: value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        if (props.ativSelecionada.id !== 0) {
            props.atualizarAtividade(atividade);
        } else {
            props.addAtividade(atividade);
        }
        setAtividade(atividadeInicial);
    }

    const handleCancelar = (e) => {
        e.preventDefault();

        props.cancelarAtividade();
        setAtividade(atividadeInicial);
    }

    function atividadeAtual(){
        if (props.ativSelecionada.id !== 0) {
            return props.ativSelecionada;
        } else {
            return atividadeInicial;
        }
    }

    return(
        <>
        <h1 className="mt-3">Atividade {atividade.id !== 0 ? atividade.id : ''}</h1>
        <form className="mt-4 row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label className="form-label">Título</label><br/>
          <input name="titulo" value={atividade.titulo} onChange={inputTextHandler} id="titulo" type="text" placeholder="Título" />
        </div>
        <div className="col-md-2">
          <label className="form-label">Prioridade</label>
          <select name="prioridade" value={atividade.prioridade} onChange={inputTextHandler} id="prioridade" className="form-select">
            <option defaultValue="0">Escolher</option>
            <option value="1">Alta</option>
            <option value="2">Média</option>
            <option value="3">Baixa</option>
          </select>
        </div>
        <div className="col-md-12">
          <label className="form-label">Descrição</label><br/>
          <textarea name="descricao" value={atividade.descricao} onChange={inputTextHandler} id="descricao" type="text" placeholder="Descrição" />
        </div>
        <hr />
        <div className="col-md-12 mt-0">
          {
              atividade.id == 0 ?
              <button 
                 className="btn btn-outline-success" type="submit">Adicionar Atividade
              </button>
              :
              <>
              <button 
                 className="btn btn-outline-success" type="submit">Salvar
              </button>
              <button 
                 className="btn btn-outline-danger ms-3" onClick={handleCancelar}>Cancelar
              </button>
              </>
          }
        </div>
      </form>
      </>
    )
}