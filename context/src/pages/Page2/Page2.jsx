import { useTitleColorContext } from "../../hooks/useTitleColorContext"

const Page2 = () => {
  const { color, dispatch } = useTitleColorContext();

  const setTitleColor = (color) => {
    dispatch({type: color})
  }

  return (
    <>
      <h2 style={{color: color}}>Página Dois</h2>
      <div>
        <button 
          onClick={() => setTitleColor('RED')}
          style={{color: 'white', backgroundColor: 'red'}}>
            Red
        </button>
        <button 
          onClick={() => setTitleColor('GREEN')}
          style={{color: 'white', backgroundColor: 'green'}}>
            Green
        </button>
        <button 
          onClick={() => setTitleColor('BLUE')}
          style={{color: 'white', backgroundColor: 'blue'}}>
            Blue
        </button>
      </div>
    </>
  )
}

export default Page2