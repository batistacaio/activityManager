import { useState, useEffect } from 'react';
import Header from './components/Header'
import Footer from './components/Footer'
import AtividadeForm from './components/AtividadeForm';
import AtividadeLista from './components/AtividadeLista';

let initialState = [
  {
      id: 1,
      titulo: "Titulo exemplo 1",
      prioridade: "1",
      descricao: "Atividade exemplo 1"
  },
  {
      id: 2,
      titulo: "Titulo exemplo 2",
      prioridade: "2",
      descricao: "Atividade exemplo 2"
  }
]

function App() {
const [index, setIndex] = useState(0);
const [atividades, setAtividades] = useState(initialState);
const [atividade, setAtividade] = useState({id: 0});

useEffect(() => {
  atividades.length <= 0 ? setIndex(1) : setIndex(Math.max.apply(Math, atividades.map((item) => item.id)) + 1)
}, [atividades])

function addAtividade(ativ) {
  setAtividades([...atividades, {...ativ , id: index}]);
}

function cancelarAtividade() {
  setAtividade({id: 0})
}

function atualizarAtividade(ativ) {
  setAtividades(atividades.map(item => item.id === ativ.id ? ativ : item));
  setAtividade({id: 0})
}

function delAtividade(id){
  const atividadeFiltrada = atividades.filter(atividade => atividade.id !== id);
  setAtividades([...atividadeFiltrada]);
}

function getAtividade(id){
  const atividade = atividades.filter(atividade => atividade.id === id);
  setAtividade(atividade[0]);
}

  return(

  <div>
   <Header />
    <div className="container">
      <AtividadeForm
        cancelarAtividade={cancelarAtividade}
        ativSelecionada={atividade}
        addAtividade={addAtividade}
        atualizarAtividade={atualizarAtividade}
        atividades={atividades}
      />
      <AtividadeLista 
        delAtividade={delAtividade}
        atividades={atividades}
        getAtividade={getAtividade}  
      />
    </div>
    <br></br>
    <Footer />
  </div>
  )
}

export default App