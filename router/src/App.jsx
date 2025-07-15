import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import About from './pages/About/About'
import User from './pages/User/User'
import Edit from './pages/Edit/Edit'
import NotFound from './pages/NotFound/NotFound'

function App() {

  return (
    <>
      <h1>React Router</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/usuarios/:id' element={<User />} />
          <Route path='/usuarios/:id/editar' element={<Edit />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
