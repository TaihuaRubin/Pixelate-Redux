import { createStore } from 'redux'

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
  grid: [
    ['']
  ],
  selectedColor: AVAILABLE_COLORS[0],
  painting: false
}

// ACTION TYPES
const ADD_ROW    = 'ADD_ROW'
const ADD_COLUMN = 'ADD_COLUMN'
const PICK_COLOR = 'PICK_COLOR'
const COLORIZE   = 'COLORIZE'
const PAINT_START = 'PAINT_START'
const PAINT_END   = 'PAINT_END'

// ACTION CREATORS
export const addRow = () => ({ type: ADD_ROW })
export const addColumn = () => ({ type: ADD_COLUMN })
export const pickColor = (color) => ({ type: PICK_COLOR, color })
export const colorize = (row, column) => ({ type: COLORIZE, row, column })
export const paintStart = () => ({ type: PAINT_START })
export const paintEnd = () => ({ type: PAINT_END })

const reducer = (state=initialState, action) => {
  switch (action.type) {
    case ADD_ROW:
      const numCols = state.grid.length ? state.grid[0].length : 1
      const newRow = Array(numCols).fill('')
      return { ...state, grid: [...state.grid, newRow] }
    case ADD_COLUMN:
      return { ...state, grid: state.grid.map(r => [...r, ''])}
    case PICK_COLOR:
      return { ...state, selectedColor: action.color }
    case COLORIZE:
      const newGrid = [...state.grid]
      newGrid[action.row][action.column] = state.selectedColor
      return { ...state, grid: newGrid}
    case PAINT_START:
      return { ...state, painting: true }
    case PAINT_END:
      return { ...state, painting: false }
    default:
      return state
  }
}

export default createStore(reducer)
