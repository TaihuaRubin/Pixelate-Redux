import React from "react";
import {colorize} from "../store";
import {useDispatch} from "react-redux";

export default function TableCell(props) {
  const dispatch = useDispatch();

  function colorize(event) {
    event.preventDefault();
    dispatch(colorize(props.rowIdx, props.colIdx));
  }

  return <td onClick={colorize} className={props.color}></td>;
}
