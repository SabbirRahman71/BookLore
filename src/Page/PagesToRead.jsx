import React from "react";
import { Helmet } from "react-helmet-async";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Cell,
  LabelList,
  CartesianGrid,
} from "recharts";
import { getBooks } from "../Utils/Index";

const CustomBarShape = (props) => {
  const { x, y, width, height } = props;
  const radius = 8;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={props.fill}
        rx={radius}
        ry={radius}
      />
    </g>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 rounded shadow-lg p-2">
        <p className="text-gray-700 font-semibold">
          <strong>Book:</strong> {payload[0].payload.name}
        </p>
        <p className="text-gray-700">{`Total Pages: ${payload[0].value}`}</p>
      </div>
    );
  }
  return null;
};

const PagesToRead = () => {
  const { readBooks, loading } = getBooks();

  if (loading) {
    return <div className="text-center text-gray-500">Loading books...</div>;
  }

  if (!readBooks.length) {
    return (
      <div className="md:px-24 text-center text-gray-700 font-semibold">
        You have no books to read!
      </div>
    );
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
    <div className="md:px-24 bg-gray-100 p-8 rounded-lg shadow-md">
      <Helmet>
        <title>Booklore | Listed Books</title>
      </Helmet>
      <h1 className="text-3xl text-center mt-4 mb-6 font-bold text-gray-800">
        Pages to Read
      </h1>
      <ResponsiveContainer width="100%" height={400}>
        <BarChart data={chartData}>
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
          <XAxis dataKey="name" tick={{ fontSize: 12, fill: "#555" }} />
          <YAxis
            tick={{ fontSize: 12, fill: "#555" }}
            label={{ value: "Total Pages", angle: -90, position: "insideLeft" }}
          />
          <Tooltip content={<CustomTooltip />} />
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
