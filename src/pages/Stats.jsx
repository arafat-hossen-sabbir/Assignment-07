import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";
import { friendContext } from "../context/Context";

const Stats = () => {
  const { storeActivity } = useContext(friendContext);

  const counts = {
    text: 0,
    call: 0,
    video: 0,
  };

  storeActivity.forEach((item) => {
    if (counts[item.type] !== undefined) {
      counts[item.type]++;
    }
  });

  const data = [
    { name: "Text", value: counts.text, color: "#7C3AED" },
    { name: "Call", value: counts.call, color: "#0F6E56" },
    { name: "Video", value: counts.video, color: "#2F855A" },
  ];

  const total = data.reduce((a, b) => a + b.value, 0);

  return (
    <div className="bg-gray-100 py-15 font-sans">
      <h2 className="text-2xl font-medium text-gray-900 mb-3 max-w-5xl mx-auto">
        Friendship analytics
      </h2>

      <div className="bg-white rounded-xl border border-gray-200 p-5 max-w-5xl mx-auto">
        <p className="text-sm text-gray-500 mb-4">By interaction type</p>

        <div className="w-full h-60">
          <ResponsiveContainer>
            <PieChart>
              <Pie
                data={data}
                dataKey="value"
                innerRadius={65}
                outerRadius={90}
                paddingAngle={4}
              >
                {data.map((item, index) => (
                  <Cell key={index} fill={item.color} />
                ))}
              </Pie>

              <Tooltip
                formatter={(value) => [
                  `${value} (${
                    total ? Math.round((value / total) * 100) : 0
                  }%)`,
                  "",
                ]}
              />
            </PieChart>
          </ResponsiveContainer>
        </div>

        <div className="flex gap-4 justify-center mb-4">
          {data.map((item) => (
            <span
              key={item.name}
              className="flex items-center gap-1.5 text-sm text-gray-500"
            >
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ background: item.color }}
              />
              {item.name} — {total ? Math.round((item.value / total) * 100) : 0}
              %
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Stats;
