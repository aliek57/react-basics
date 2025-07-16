import './Navbar.css'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
      <NavLink to='/'>Home</NavLink>
      <NavLink to='/page1'>Página 1</NavLink>
      <NavLink to='/page2'>Página 2</NavLink>
      <NavLink to='/page3'>Página 3</NavLink>
    </nav>
  )
}

export default Navbar