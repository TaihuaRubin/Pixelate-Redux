import React from 'react'
import TableRow from './TableRow.jsx'

export default (props) => {
  return (
    <table>
      <tbody>
        { props.grid.map((row, key) => <TableRow key={key} row={row} />) }
      </tbody>
    </table>
  )
}
