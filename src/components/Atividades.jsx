export default function Atividades(props) {
      
    function prioridadeLabel(param) {
        switch(param) {
          case '1': 
          return 'Alta';
          case '2':
          return 'Média';
          case '3':
          return 'Baixa';
          default:
          return 'Não definida';
        }
      }
      
      function prioridadeStyle(param, icone) {
        switch(param) {
          case '1': 
          return icone ? 'bg-danger': 'danger';
          case '2':
          return icone ? 'bg-warning': 'warning';
          case '3':
          return icone ? 'bg-success': 'success';
          default:
          return 'bg-dark';
        }
      }
    
    return (
        <div className={"card mb-3 shadow-sm border-" + prioridadeStyle(props.ativ.prioridade)}>
        <div className="card-body">
          <div className="d-flex justify-content-between">
            <h5 className="card-title">
            <span className="badge rounded-pill bg-primary me-2">{props.ativ.id}</span>
              {props.ativ.titulo}
            </h5>
            <h6>
                Prioridade:
                <span className="me-1 ms-2 text-black">
                <span className={"badge rounded-pill " + prioridadeStyle(props.ativ.prioridade, true)}> {prioridadeLabel(props.ativ.prioridade)}</span>
                </span>
            </h6>
          </div> 
          <p className="card-text">
            {props.ativ.descricao}
          </p>
          <div className="d-flex justify-content-end pt-0 m-0 border-top">
            <button className="btn me-3 mt-3 btn-outline-primary" onClick={() => props.getAtividade(props.ativ.id)}>
              <i className="ms-1 me-1 fa-solid fa-pencil-alt"></i>
              Editar
            </button>
            <button className="btn mt-3 btn-outline-danger" onClick={() => props.delAtividade(props.ativ.id)}>
              <i className="ms-1 me-1 fa-solid fa-trash-alt"></i>
              Excluir
            </button>
          </div>
        </div>
      </div>
    )
}