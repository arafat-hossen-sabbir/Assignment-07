import React, { useContext, useState } from "react";
import { friendContext } from "../context/Context";

const Timeline = () => {
  const { storeActivity } = useContext(friendContext);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("all");

  const options = [
    { value: "all", label: "All", icon: "📊" },
    { value: "call", label: "Call", icon: "📞" },
    { value: "text", label: "Text", icon: "💬" },
    { value: "video", label: "Video", icon: "🎥" },
  ];

  let filteredData = storeActivity;

  if (selected !== "all") {
    filteredData = filteredData.filter((item) => item.type === selected);
  }

  filteredData = [...filteredData].sort(
    (a, b) => new Date(b.date) - new Date(a.date),
  );

  const current = options.find((opt) => opt.value === selected) || options[0];

  return (
    <div className="max-w-3xl mx-auto p-6">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Timeline</h1>

        <div className="relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-4 py-2 bg-white rounded text-sm shadow"
          >
            <span>{current.icon}</span>
            <span>{current.label}</span>

            <svg width="10" height="10">
              <path d="M2 3.5L5 6.5L8 3.5" stroke="currentColor" />
            </svg>
          </button>

          {open && (
            <>
              <ul className="absolute right-0 mt-2 w-40 bg-white rounded-lg shadow-lg p-1 z-10">
                {options.map((opt) => (
                  <li key={opt.value}>
                    <button
                      onClick={() => {
                        setSelected(opt.value);
                        setOpen(false);
                      }}
                      className={`w-full flex items-center gap-2 px-3 py-2 rounded text-sm ${
                        selected === opt.value
                          ? "bg-blue-50 text-blue-600"
                          : "hover:bg-gray-100"
                      }`}
                    >
                      <span>{opt.icon}</span>
                      {opt.label}
                    </button>
                  </li>
                ))}
              </ul>

              <div className="fixed inset-0" onClick={() => setOpen(false)} />
            </>
          )}
        </div>
      </div>

      {filteredData.length === 0 ? (
        <div className="text-center my-15 text-gray-400">
          <p className="text-lg">No activity yet</p>
          <p className="text-sm mt-2">
            You don't have any {selected !== "all" ? selected : ""} records
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white shadow rounded-lg p-4 flex gap-4 items-center"
            >
              <div className="text-2xl">
                {item.type === "call" && "📞"}
                {item.type === "text" && "💬"}
                {item.type === "video" && "🎥"}
              </div>

              <div>
                <p className="text-sm font-semibold">
                  {item.type} with {item.name}
                </p>
                <p className="text-xs text-gray-400">
                  {new Date(item.date).toDateString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Timeline;
