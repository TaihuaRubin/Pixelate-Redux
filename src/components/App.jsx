import React from 'react'
import Table from './Table.jsx'
import store, { addRow } from '../store'

export default class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    this.unsubscribe = store.subscribe(() => this.setState(store.getState()))

    this.handleAddRowClick = this.handleAddRowClick.bind(this)
  }

  handleAddRowClick() {
    store.dispatch(addRow())
  }

  render() {
    return (<div>
      <h1>Pixelate</h1>
      <div>
        <button id='add-row' onClick={this.handleAddRowClick}>Add a row</button>
        <select>
          <option value="red">Red</option>
          <option value="orange">Orange</option>
          <option value="yellow">Yellow</option>
          <option value="green">Green</option>
          <option value="blue">Blue</option>
          <option value="indigo">Indigo</option>
          <option value="violet">Violet</option>
          <option value="black">Black</option>
          <option value="white">White</option>
          <option value="brown">Brown</option>
        </select>
      </div>
      <Table grid={this.state.grid} />
    </div>)
  }
}
