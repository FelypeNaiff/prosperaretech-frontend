import React, { useState } from 'react'

function Certidoes() {
  const [certidoes, setCertidoes] = useState([])
  const [novaCertidao, setNovaCertidao] = useState("")

  const adicionarCertidao = () => {
    if (novaCertidao.trim() === "") return
    setCertidoes(prev => [...prev, { nome: novaCertidao, vencimento: "00/00/0000" }])
    setNovaCertidao("")
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Controle de Certidões e Alvarás</h1>

      <div style={{ marginTop: '20px', display: 'flex', gap: '10px' }}>
        <input
          type="text"
          placeholder="Nome da Certidão"
          value={novaCertidao}
          onChange={e => setNovaCertidao(e.target.value)}
          style={{ padding: '8px' }}
        />
        <button onClick={adicionarCertidao} style={{ padding: '8px', backgroundColor: '#294c60', color: 'white' }}>
          Adicionar
        </button>
      </div>

      <div style={{ marginTop: '30px' }}>
        {certidoes.map((certidao, index) => (
          <div key={index} style={{ marginBottom: '10px', padding: '10px', backgroundColor: '#adb6c5', borderRadius: '4px' }}>
            {certidao.nome} - Vencimento: {certidao.vencimento}
          </div>
        ))}
      </div>
    </div>
  )
}

export default Certidoes
