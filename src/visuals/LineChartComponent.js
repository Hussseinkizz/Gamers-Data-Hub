import {
  ResponsiveContainer,
  LineChart,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Line,
} from "recharts";
import { getMonthNameByOrder, TooltipStyles } from "../utils/helpers";

/**
 *
 ** 📋 component summary
 * @export
 * @param {*} { data, Xdata, Ydata, Format }
 * @return {*} 
 */

export default function LineChartComponent({ data, Xdata, Ydata, Format }) {
  return (
    <>
      <ResponsiveContainer width="100%" height={200}>
        <LineChart data={data} fontSize={14}>
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
          <YAxis
            unit="%"
            width={35}
            axisLine={false}
            tickLine={false}
            domain={["auto", "auto"]}
          />
          <Tooltip
            cursor={false}
            contentStyle={TooltipStyles}
            labelFormatter={Format ? getMonthNameByOrder : false}
          />
          <Line
            dataKey={Ydata}
            stroke="#6c7ee3"
            unit="%"
            name="Rate"
            type="monotone"
          />
        </LineChart>
      </ResponsiveContainer>
    </>
  );
}
