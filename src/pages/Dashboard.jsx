import React from 'react'
import { useNavigate } from 'react-router-dom'

function Dashboard() {
  const navigate = useNavigate()

  return (
    <div style={{ padding: '20px' }}>
      <h1>Dashboard - Prosperare Tech</h1>
      <div style={{ marginTop: '30px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <button onClick={() => navigate('/kanban')} style={{ padding: '10px', backgroundColor: '#294c60', color: 'white' }}>
          Gerenciar Tarefas (Kanban)
        </button>
        <button onClick={() => navigate('/certidoes')} style={{ padding: '10px', backgroundColor: '#294c60', color: 'white' }}>
          Controle de Certidões
        </button>
        <button onClick={() => navigate('/pendencias')} style={{ padding: '10px', backgroundColor: '#294c60', color: 'white' }}>
          Pendências Internas
        </button>
      </div>
    </div>
  )
}

export default Dashboard
