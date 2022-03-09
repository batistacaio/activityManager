import Atividades from './Atividades';

export default function AtividadeLista(props) {
    return (
        <div className="mt-3 mb-5">
        {props.atividades.map((ativ) => (
          <Atividades 
             key={ativ.id}
             ativ={ativ}
             delAtividade={props.delAtividade}
             getAtividade={props.getAtividade}
          />
        ))}
      </div>
    )
}