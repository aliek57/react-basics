import './App.css'
import paisagem from './assets/paisagem.jpg' 
import ConditionalRender from './components/ConditionalRender'
import Container from './components/Container'
import Desafio from './components/Desafio'
import DestructingProps from './components/DestructingProps'
import ExecuteFunction from './components/ExecuteFunction'
import Hooks  from './components/Hooks' 
import ListRender from './components/ListRender'
import ShowName from './components/ShowName'
import ShowProf from './components/ShowProf'

function App() {
  const professores = [
    { id: 1, nome: 'Fulano', disciplina: 'História' },
    { id: 2, nome: 'Ciclano', disciplina: 'Português' },
    { id: 3, nome: 'Beltrano', disciplina: 'Matemática' }
  ]

  const showMessage = () => {
    console.log('Fui ativada por uma prop!')
  }

  const desafio = [
    { id: 1, name: 'João', age: 20, job: 'Matemático' },
    { id: 2, name: 'Maria', age: 84, job: 'Física' },
    { id: 3, name: 'Ana', age: 16, job: 'Estudante' }
  ]

  return (
    <>
      <h1>Avançando Conceitos</h1>
      {/* imagem em public */}
      {/* <div>
        <img src="/casa.jpg" alt="Casa" />
      </div> */}
      {/* imagem em assets */}
      {/* <div>
        <img src={paisagem} alt="Casa" />
      </div> */}
      <Hooks />
      <ListRender/>
      <ConditionalRender/>
      {/* props */}
      <ShowName name="Keila" city="Toledo"/>
      <ShowName name="João" city="Curitiba"/>
      <ShowName name="Karina" city="Presidente Prudente"/>
      {/* destructing */}
      <DestructingProps nome="Fulano" idade={28} curso="tsi"/>
      {/* loop em array de objetos  */}
      {professores.map((professor) => (
        <ShowProf 
          key={professor.id} 
          nome={professor.nome} 
          disciplina={professor.disciplina} 
        />
      ))}
      {/* prop children */}
      <Container>
        <p>Texto do componente pai</p>
      </Container>
      {/* executar funcao  */}
      <ExecuteFunction minhaFuncao={showMessage} />
      {/* desafio  */}
      {desafio.map((user) => (
        <Desafio
          key={user.id}
          name={user.name}
          age={user.age}
          job={user.job}
        />
      ))}
    </>
  )
}

export default App
