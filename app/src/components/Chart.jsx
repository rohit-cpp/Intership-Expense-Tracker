import React from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import useTransactionStore from "../store/useTransactionStore";

const COLORS = ["#34d399", "#f87171", "#60a5fa", "#fbbf24", "#a78bfa"];

export default function Chart() {
  const { transactions } = useTransactionStore();
  const dataMap = new Map();

  transactions.forEach((tx) => {
    if (tx.type === "expense") {
      dataMap.set(tx.category, (dataMap.get(tx.category) || 0) + tx.amount);
    }
  });

  const chartData = Array.from(dataMap.entries()).map(([category, amount]) => ({
    name: category,
    value: amount,
  }));

  return (
    <div className="h-64">
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={chartData}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          >
            {chartData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
