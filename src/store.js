import { createStore } from 'redux'

const NUM_COLUMNS = 20
const initialState = {
  grid: []
}

// ACTION TYPES
const ADD_ROW    = 'ADD_ROW'

// ACTION CREATORS
export const addRow = () => ({ type: ADD_ROW })

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      console.log(ADD_ROW)
      const newRow = Array(NUM_COLUMNS).fill('')
      const newGrid = [...state.grid, newRow]
      return { ...state, grid: newGrid }
    default:
      return state
  }
}

export default createStore(reducer)
