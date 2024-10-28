import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  Cell,
  LabelList,
  CartesianGrid,
} from "recharts";
import { getBooks } from "../Utils/Index";

const CustomBarShape = (props) => {
  const { x, y, width, height } = props;

  const path = `M${x},${y + height} 
Q${x + width / 4},${y + height / 2} ${x + width / 2},${y} 
Q${x + (3 * width) / 4},${y + height / 2} ${x + width},${y + height} 
Z`;

  return <path d={path} fill={props.fill} />;
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded shadow-lg p-2">
        <p className="text-gray-700">{`Book: ${payload[0].name}`}</p>
        <p className="text-gray-700">{`Pages: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const PagesToRead = () => {
  const { readBooks, loading } = getBooks();

  if (loading) {
    return <div>Loading books...</div>;
  }

  if (!readBooks.length) {
    return <div>You have no books to read!</div>;
  }

  const chartData = readBooks.map((book) => ({
    name: book.bookName,
    pages: book.totalPages,
  }));

  const colors = [
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#FF569B",
    "#A44DFF",
    "#FFC0CB",
    "#FF4500",
    "#2E8B57",
    "#4682B4",
  ];

  return (
    <div className="md:px-24">
      <h1 className="text-2xl text-center mt-16 mb-6 font-bold">
        Pages to Read
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#555" }} />
          <YAxis tick={{ fontSize: 12, fill: "#555" }} />
          <Tooltip content={<CustomTooltip />} />
          <Legend />
          <Bar dataKey="pages" shape={CustomBarShape} barSize={50}>
            {chartData.map((entry, index) => (
              <Cell key={entry.name} fill={colors[index % colors.length]} />
            ))}
            <LabelList
              dataKey="pages"
              position="top"
              style={({ index }) => ({
                fill: colors[index % colors.length],
                fontSize: "14px",
                fontWeight: "bold",
              })}
            />
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PagesToRead;
