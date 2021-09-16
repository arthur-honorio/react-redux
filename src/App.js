import { useState } from "react"
import { useSelector, useDispatch } from "react-redux"

function App() {
  const [inputTask, setInputTask] = useState()

  const tasks = useSelector(state => state.tasks)
  const dispatch = useDispatch()


  function handleInput(e) {
    setInputTask(e.target.value)
  }

  function handleSubmit() {
    dispatch({
      type: "ADD_TASK",
      payload: inputTask,
    })

  }

  function handleRemove(task) {
    dispatch({
      type: "DELETE_TASK",
      payload: task
    })
  }

  return (
    <>
      <ul>
        {
          tasks.map( task =>
            <li key={task}>
              <span>{task}</span>
              <button onClick={() => handleRemove(task)}>Remover</button>
            </li>
          )
        }
      </ul>
      <br />
      <input type="text" onChange={handleInput} placeholder="Insira uma tarefa"/>
      <button onClick={handleSubmit}>Adicionar</button>
    </>
  )
}

export default App
