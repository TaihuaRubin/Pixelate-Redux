import React from "react";
import { connect, useDispatch } from "react-redux";
import { addRow } from "../store";

export default function AddRow(props) {
  const dispatch = useDispatch();
  return (
    <button id="add-row" onClick={() => dispatch(addRow())}>
      Add a row
    </button>
  );
}

//export default connect(null, dispatch => ({
//  dispatchAddRow: () => dispatch(addRow()),
//}))(props => {
//  return (
//    <button id="add-row" onClick={props.dispatchAddRow}>
//      Add a row
//    </button>
//  );
//});
