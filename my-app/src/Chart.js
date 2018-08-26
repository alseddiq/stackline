import React from "react";
import { Chart, Axis, Series, Tooltip, Cursor, Line } from "react-charts";

function SimpleChart(props) {
return (
    <Chart data={props.data}>
  <Axis primary type="time" position="bottom"  />
  <Axis type="linear" position="left"  />
  <Series type={Line} />
  <Cursor primary />
  <Cursor />
  <Tooltip />
</Chart>
);
}

export default (SimpleChart);