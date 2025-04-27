import React, { useState } from 'react'

function Pendencias() {
  const [pendencias, setPendencias] = useState([])
  const [novaPendencia, setNovaPendencia] = useState("")

  const adicionarPendencia = () => {
    if (novaPendencia.trim() === "") return
    setPendencias(prev => [...prev, novaPendencia])
    setNovaPendencia("")
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Pendências Internas</h1>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Descrição da Pendência"
          value={novaPendencia}
          onChange={e => setNovaPendencia(e.target.value)}
          style={{ padding: '8px' }}
        />
        <button onClick={adicionarPendencia} style={{ padding: '8px', backgroundColor: '#294c60', color: 'white' }}>
          Adicionar
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        {pendencias.map((pendencia, index) => (
          <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#adb6c5', borderRadius: '4px' }}>
            {pendencia}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Pendencias
