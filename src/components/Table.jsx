import React from "react";
import TableRow from "./TableRow.jsx";
import {useSelector} from "react-redux";

export default function Table(props) {
  const grid = useSelector(state => state.grid);

  return (
    <table>
      <tbody>
        {props.grid.map((row, rowIdx) => (
          <TableRow key={rowIdx} rowIdx={rowIdx} row={row} />
        ))}
      </tbody>
    </table>
  );
}
//export default connect(state => ({ grid: state.grid }))(props => {
//  return (
//    <table>
//      <tbody>
//        {props.grid.map((row, rowIdx) => (
//          <TableRow key={rowIdx} rowIdx={rowIdx} row={row} />
//        ))}
//      </tbody>
//    </table>
//  );
//});
