import { createStore } from "redux"

const INITIAL_STATE = {
  tasks: [],
}

//REDUCER
function todo(state = INITIAL_STATE, action) {
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      }

    case "DELETE_TASK":
      const newState = state.tasks.filter((task) => task !== action.payload)
      return {
        tasks: newState
      }

    default:
      return state
  }
}

const store = createStore(todo)

export default store
