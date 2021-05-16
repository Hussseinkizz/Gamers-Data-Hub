import PropTypes from 'prop-types';

// 💡 Helper for showing month names by months order
const MONTHS = [
  'Jan',
  'Feb',
  'Mar',
  'Apr',
  'May',
  'Jun',
  'Jul',
  'Aug',
  'Sep',
  'Oct',
  'Nov',
  'Dec',
];

export const getMonthNameByOrder = (order) => MONTHS[order - 1];

getMonthNameByOrder.PropTypes = {
  order: PropTypes.number.isRequired,
};

// 💡  Helper for centering our label in the given arc of the pie
const RADIAN = Math.PI / 180;
export const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
  index,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN) - 10;
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" fontSize={12} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

// 💡 Helper for showing pies with colors
//? should they be painted randomly?
export const PieColors = [
  '#6178e2',
  '#7484e6',
  '#8590ea',
  '#7a88e7',
  '#9099ec',
  '#a5aaf1',
];

export const BarColors = [
  '#6c7ee3',
  '#8c95eb',
  '#7484e6',
  '#a9adf2',
  '#8590ea',
  '#7a88e7',
  '#8892ea',
  '#959ded',
  '#a2a8f0',
  '#afb2f3',
  '#bbbdf6',
  '#c7c8f9',
];

/**
 ** usage:
 * {data.map((entry, index) => (
      <Cell
        key={`cell-${index}`}
        fill={BarColors[index % BarColors.length]}
      />
    ))} 
*/

export const Colors1 = [
  '#0359D7',
  '#20A39E',
  '#61D095',
  '#FFBA49',
  '#EF5B5B',
  '#665191',
];

export const Colors2 = [
  '#003f5c',
  '#2f4b7c',
  '#665191',
  '#a05195',
  '#d45087',
  '#f95d6a',
  '#ff7c43',
  '#ffa600',
];

// 😇 Helper for the awesome tooltip
export const TooltipStyles = {
  border: 0,
  borderRadius: '8px',
  backgroundColor: '#F3F4F6',
  fontSize: 14,
  boxShadow: '2px 2px 5px 3px rgba(0,0,0,0.15)',
};

export const chartGradient = () => {
  return (
    <defs>
      <linearGradient id="chartGradient" x1="0" y1="1" x2="0" y2="0">
        <stop offset="0%" stopColor="#3b82f6" />
        <stop offset="100%" stopColor="#93c5fd" />
      </linearGradient>
    </defs>
  );
};

//* usage: fill = 'url(#chartGradient)';
