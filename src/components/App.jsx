import React from "react";
import { addRow, AVAILABLE_COLORS, pickColor } from "../store";
import Table from "./Table.jsx";
import AddRow from "./AddRow.jsx";
import ColorSelector from "./ColorSelector.jsx";

export default function App(props) {
  return (
    <div id="pixelate">
      <h1>Pixelate</h1>
      <div>
        <AddRow />
        <ColorSelector colors={AVAILABLE_COLORS} />
      </div>
      <Table />
    </div>
  );
}
