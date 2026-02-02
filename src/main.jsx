import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './cssfolder/index.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Home from './pages/Home.jsx'
import Order from './pages/Order.jsx'  
import Pizzas from './pages/pizzas.jsx'
import Animatronics from './pages/Animatronics.jsx'
import BookaParty from './pages/BookaParty.jsx'
import Parties  from './pages/Parties.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/order' element={<Order />} />
        <Route path='/pizzas' element={<Pizzas/>}/>
        <Route path='/Animatronics' element={<Animatronics/>}/>
        <Route path='/BookaParty' element={<BookaParty/>}/>
        <Route path='/Parties' element={<Parties/>}/>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)