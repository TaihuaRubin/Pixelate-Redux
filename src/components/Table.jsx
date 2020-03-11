import React from "react";
import TableRow from "./TableRow.jsx";
import { connect } from "react-redux";

export default connect(state => ({ grid: state.grid }))(props => {
  return (
    <table>
      <tbody>
        {props.grid.map((row, rowIdx) => (
          <TableRow key={rowIdx} rowIdx={rowIdx} row={row} />
        ))}
      </tbody>
    </table>
  );
});
