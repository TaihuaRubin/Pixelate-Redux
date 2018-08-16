import React from 'react'
import TableCell from './TableCell.jsx'

export default (props) => {
  return (
    <tr>
      {props.row.map((cell, key) => <TableCell key={key} cell={cell} />)}
    </tr>
  )
}
