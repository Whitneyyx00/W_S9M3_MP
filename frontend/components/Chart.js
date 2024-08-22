import React from "react"
import moment from "moment"
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip
} from "recharts"

const Chart = ({ sparklineData, darkMode }) => {
  const formattedData = sparklineData
    .map((price, idx) => {
      if (idx % 6 === 0) {
        const timeToSubtract = 168 - idx
        const date = moment()
          .subtract(timeToSubtract, "hours")
          .format("ddd h:mma");
        return { value: price, date };
      } else if (idx === sparklineData.length - 1) {
        const date = moment().format("ddd h:mma");
        return { value: price, date };
      }
      return null
    })
    .filter(data => data);

    // Set color scheme based on darkMode
    const lineColor = darkMode ? "#ffffff" : "#8884d8";
    const gridColor = darkMode ? "#555555" : "#ccc";
    const tooltipBackgroundColor = darkMode ? "#333333" : "#ffffff";
    const textColor = darkMode ? "#ffffff" : "#000000";

  return (
    <LineChart width={1100} height={300} data={formattedData}>
      <Line type="monotone" dataKey="value" stroke={lineColor} />
      <CartesianGrid stroke={gridColor} strokeDasharray="5 5" />
      <XAxis dataKey="date" interval={3} tick={{ fill: textColor }} />
      <YAxis tick={{ fill: textColor }} />
      <Tooltip contentStyle={{ backgroundColor: tooltipBackgroundColor, color: textColor }} />
    </LineChart>
  );
};

export default Chart;
