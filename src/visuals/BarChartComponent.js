import {
  ResponsiveContainer,
  BarChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Bar
} from "recharts";
import {getMonthNameByOrder, TooltipStyles } from "../utils/helpers";

/**
 *
 ** 📋 component summary
 * @export
 * @param {*} { data, Xdata, Ydata, Format }
 * @return {*} 
 */

export default function BarChartComponent({ data, Xdata, Ydata, Format }) {
  
  return (
    <>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data} fontSize={14}>
          <defs>
            <linearGradient id="chartGradient" x1="0" y1="1" x2="0" y2="0">
              <stop offset="0%" stopColor="#3b82f6" />
              <stop offset="100%" stopColor="#93c5fd" />
            </linearGradient>
          </defs>
          <CartesianGrid
            vertical={false}
            stroke="#d6d9da"
            strokeDasharray="3 3"
          />
          <XAxis
            dataKey={Xdata}
            tickLine={false}
            tickFormatter={Format ? getMonthNameByOrder : false}
          />
          <YAxis unit="" width={35} axisLine={false} tickLine={false} />
          <Tooltip
            cursor={false}
            contentStyle={TooltipStyles}
            labelFormatter={Format ? getMonthNameByOrder : false}
          />
          <Bar
            dataKey={Ydata}
            unit=" deaths"
            name="Deaths"
            fill="url(#chartGradient)"
          />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};