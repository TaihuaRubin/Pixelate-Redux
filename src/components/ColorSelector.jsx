import React from "react";
import { connect, useSelector, useDispatch } from "react-redux";
import { pickColor } from "../store";

export default function ColorSelector(props) {
  const selectedColor = useSelector(state => state.selectedColor);
  const dispatch = useDispatch();
  return (
    <select
      onChange={event => dispatch(pickColor(event.target.value))}
      value={selectedColor}
    >
      {props.colors.map(color => (
        <option key={color} value={color}>
          {color}
        </option>
      ))}
    </select>
  );
}
//export default connect(
//  (state) => ({ selectedColor: state.selectedColor }),
//  (dispatch) => ({
//    dispatchPickColor: color => dispatch(pickColor(color)),
//  })
//)((props) => {
//  return (
//    <select onChange={(event) => props.dispatchPickColor(event.target.value)} value={props.selectedColor}>
//      { props.colors.map(color => (
//        <option key={color} value={color}>{color}</option>
//      ))}
//    </select>
//  )
//})
