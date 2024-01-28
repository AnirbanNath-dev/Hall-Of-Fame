import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Admin from './components/Admin.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route  path='/' element={<App/>} />
      <Route  path='/admin' element={<Admin/>} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
