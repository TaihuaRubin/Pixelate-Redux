import { createStore } from 'redux'

const NUM_COLUMNS = 20
export const AVAILABLE_COLORS = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "indigo",
  "violet",
  "black",
  "white",
  "brown",
]

const initialState = {
  grid: [],
  selectedColor: AVAILABLE_COLORS[0]
}

// ACTION TYPES
const ADD_ROW    = 'ADD_ROW'
const PICK_COLOR  = 'PICK_COLOR'

// ACTION CREATORS
export const addRow = () => ({ type: ADD_ROW })
export const pickColor = (color) => ({ type: PICK_COLOR, color })

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      const newRow = Array(NUM_COLUMNS).fill('')
      const newGrid = [...state.grid, newRow]
      return { ...state, grid: newGrid }
    case PICK_COLOR:
      return { ...state, selectedColor: action.color }
    default:
      return state
  }
}

export default createStore(reducer)
