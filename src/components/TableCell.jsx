import React from 'react'
import store, { colorize, paintStart, paintEnd } from '../store'


export default class TableCell extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      painting: store.getState().painting
    }

    this.handleStoreUpdate = this.handleStoreUpdate.bind(this)
    this.handleMouseDown = this.handleMouseDown.bind(this)
    this.handleMouseEnter = this.handleMouseEnter.bind(this)
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(this.handleStoreUpdate)
  }

  componentWillUnmount() {
    this.unsubscribe()
  }

  handleStoreUpdate() {
    const state = store.getState()
    this.setState({
      painting: state.painting
    })
  }

  handleMouseDown(e) {
    store.dispatch(paintStart())
    store.dispatch(colorize(this.props.rowIdx, this.props.colIdx))
  }

  handleMouseEnter(e) {
    if (this.state.painting) {
      store.dispatch(colorize(this.props.rowIdx, this.props.colIdx))
    }
  }

  render() {
    return <td onMouseDown={this.handleMouseDown} onMouseEnter={this.handleMouseEnter} className={this.props.color}></td>
  }
}
