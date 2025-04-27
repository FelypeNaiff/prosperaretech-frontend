import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  const navigate = useNavigate()

  const handleLogin = (e) => {
    e.preventDefault()
    // Simulação de login
    navigate('/dashboard')
  }

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '100px' }}>
      <h1>Prosperare Tech</h1>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <input type="email" placeholder="E-mail" required style={{ marginBottom: '10px', padding: '8px' }} />
        <input type="password" placeholder="Senha" required style={{ marginBottom: '10px', padding: '8px' }} />
        <button type="submit" style={{ padding: '10px', backgroundColor: '#294c60', color: 'white' }}>
          Entrar
        </button>
      </form>
      <p style={{ marginTop: '20px', color: '#404d50' }}>Contabilidade que impulsiona negócios</p>
    </div>
  )
}

export default Login
