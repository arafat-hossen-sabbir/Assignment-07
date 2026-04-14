import React, { useContext } from "react";
import { friendContext } from "../context/Context";

const Timeline = () => {
  const { storeFriend, storeText, storeVideo } = useContext(friendContext);

  const allData = [...storeFriend, ...storeText, ...storeVideo];

  const sortedData = [...allData].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Timeline</h1>

      <div className="space-y-4">
        {sortedData.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 flex items-center gap-4"
          >
            <div className="text-2xl">
              {item.type === "call" && "📞"}
              {item.type === "text" && "💬"}
              {item.type === "video" && "🎥"}
            </div>

            <div>
              <p className="text-sm font-semibold">
                {item.type.charAt(0).toUpperCase() + item.type.slice(1)} with{" "}
                {item.name}
              </p>

              <p className="text-xs text-gray-400">
                {new Date(item.date).toDateString()}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
