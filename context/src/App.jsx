import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar/Navbar'

import Home from './pages/Home/Home'
import NotFound from './pages/NotFound/NotFound'
import Page1 from './pages/Page1/Page1'
import Page2 from './pages/Page2/Page2'
import Page3 from './pages/Page3/Page3'

function App() {
  

  return (
    <>
      <h1>Context</h1>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
            <Route path='/page1' element={<Page1 />} />
          <Route path='/page2' element={<Page2 />} />
          <Route path='/page3' element={<Page3 />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
