import React from "react";
import { ResponsiveContainer, PieChart, Tooltip, Pie, Cell } from "recharts";
import { PieColors, renderCustomizedLabel, TooltipStyles } from "../utils/helpers";

/**
 *
 ** 📋 component summary
 * @export
 * @param {*} { data, Xdata , Ydata }
 * @return {*} 
 */

export default function HouseholdPieChartComponent({ data, Xdata , Ydata }) {
  return (
    <>
      <ResponsiveContainer width="50%" height={300} >
        <PieChart fontSize={14}>
          <Tooltip
            cursor={false}
            contentStyle={TooltipStyles}
            formatter={(value, name) => [`${value} people`, `${name}`]}
          />
  
          <Pie
            dataKey= {Ydata}
            data={data}
            outerRadius={100}
            innerRadius={40}
            name= {Ydata}
            nameKey= {Xdata}
            unit="deaths"
            label={renderCustomizedLabel}
            labelLine={false}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`} 
                fill={PieColors[index % PieColors.length]}
              />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </>
  )
}
