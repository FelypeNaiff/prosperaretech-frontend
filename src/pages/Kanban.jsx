import React, { useState } from 'react'

function Kanban() {
  const [tasks, setTasks] = useState({
    "A Fazer": [],
    "Fazendo": [],
    "Concluído": []
  })

  const [newTask, setNewTask] = useState("")

  const addTask = () => {
    if (newTask.trim() === "") return
    setTasks(prev => ({
      ...prev,
      "A Fazer": [...prev["A Fazer"], newTask]
    }))
    setNewTask("")
  }

  const moveTask = (task, from, to) => {
    setTasks(prev => ({
      ...prev,
      [from]: prev[from].filter(t => t !== task),
      [to]: [...prev[to], task]
    }))
  }

  return (
    <div style={{ padding: '20px' }}>
      <h1>Kanban - Tarefas</h1>
      <div style={{ marginTop: '20px', display: 'flex', gap: '20px' }}>
        {Object.keys(tasks).map(list => (
          <div key={list} style={{ flex: 1 }}>
            <h2>{list}</h2>
            <div style={{ minHeight: '150px', padding: '10px', backgroundColor: '#f4f4f4', borderRadius: '8px' }}>
              {tasks[list].map(task => (
                <div key={task} style={{ marginBottom: '8px', padding: '8px', backgroundColor: '#adb6c5', borderRadius: '4px' }}>
                  {task}
                  <div style={{ marginTop: '5px' }}>
                    {list !== "A Fazer" && (
                      <button onClick={() => moveTask(task, list, "A Fazer")} style={{ marginRight: '5px' }}>← A Fazer</button>
                    )}
                    {list !== "Fazendo" && (
                      <button onClick={() => moveTask(task, list, "Fazendo")} style={{ marginRight: '5px' }}>→ Fazendo</button>
                    )}
                    {list !== "Concluído" && (
                      <button onClick={() => moveTask(task, list, "Concluído")}>✓ Concluído</button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '30px' }}>
        <input
          type="text"
          placeholder="Nova tarefa"
          value={newTask}
          onChange={e => setNewTask(e.target.value)}
          style={{ padding: '8px', marginRight: '10px' }}
        />
        <button onClick={addTask} style={{ padding: '8px', backgroundColor: '#294c60', color: 'white' }}>
          Adicionar Tarefa
        </button>
      </div>
    </div>
  )
}

export default Kanban
