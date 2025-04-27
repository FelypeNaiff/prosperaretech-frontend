import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Kanban from './pages/Kanban'
import Certidoes from './pages/Certidoes'
import Pendencias from './pages/Pendencias'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/kanban" element={<Kanban />} />
      <Route path="/certidoes" element={<Certidoes />} />
      <Route path="/pendencias" element={<Pendencias />} />
    </Routes>
  )
}

export default App
