// import { useContext } from 'react'
// import { CounterContext } from '../../context/CounterContext'
import ChangeCounter from '../../components/ChangeCounter'
import { useCounterContext } from '../../hooks/useCounterContext'

const Page1 = () => {
    //const {count} = useContext(CounterContext)
    const {count} = useCounterContext()
  return (
    <div>
        <h2>Página Um</h2>
        <p>Contador: {count}</p>
        <ChangeCounter />
    </div>
  )
}

export default Page1