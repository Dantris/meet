import { useEffect, useState, useCallback, useMemo } from "react";
import { ResponsiveContainer, PieChart, Pie, Cell, Legend } from "recharts";

const EventGenresChart = ({ events }) => {
  const genres = useMemo(
    () => ["React", "JavaScript", "Node", "jQuery", "Angular"],
    []
  );
  const [data, setData] = useState([]);

  // Define a color for each genre
  const colors = ["#DD0000", "#00DD00", "#0000DD", "#DDDD00", "#DD00DD"];

  const getData = useCallback(() => {
    return genres.map((genre) => {
      const filteredEvents = events.filter((event) =>
        event.summary.includes(genre)
      ).length;
      return { name: genre, value: filteredEvents };
    });
  }, [genres, events]);

  useEffect(() => {
    setData(getData());
  }, [getData]);

  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    outerRadius,
    percent,
    index,
  }) => {
    const RADIAN = Math.PI / 180;
    const radius = outerRadius;
    const x = cx + radius * Math.cos(-midAngle * RADIAN) * 1.07;
    const y = cy + radius * Math.sin(-midAngle * RADIAN) * 1.07;
    return percent ? (
      <text
        x={x}
        y={y}
        fill="#8884d8"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${genres[index]} ${(percent * 100).toFixed(0)}%`}
      </text>
    ) : null;
  };

  return (
    <ResponsiveContainer width="99%" height={400}>
      <PieChart>
        <Pie
          data={data}
          dataKey="value"
          label={renderCustomizedLabel}
          labelLine={false}
          outerRadius={150}
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={colors[index % colors.length]} />
          ))}
        </Pie>
        <Legend verticalAlign="bottom" align="center" />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default EventGenresChart;
