import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { getStoredCards } from "../../Utility/localStorage";
import { useEffect, useState } from "react";

const donatedCards = getStoredCards();

const COLORS = ["#FF444A", "#00C49F", "#FFBB28", "#FF8042"];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor={x > cx ? "start" : "end"}
      dominantBaseline="central"
    >
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const Statistics = () => {
  const [totalCards, setTotalCards] = useState([]);
  const data = [
    { name: "Total Donation", id: totalCards.length },
    { name: "Your Donation", id: donatedCards.length },
  ];

  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setTotalCards(data));
  }, []);
  return (
    <div className="max-w-6xl mx-auto pt-36 flex">
      <div className="my-12 lg:mx-auto px-2 justify-center items-center">
        <PieChart width={600} height={400}>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="id"
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Legend></Legend>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
    </div>
  );
};

export default Statistics;
