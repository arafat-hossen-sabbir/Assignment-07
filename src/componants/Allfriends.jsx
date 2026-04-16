import React, { use, Suspense } from "react";
import { Link } from "react-router";

const friendPromise = fetch("/friends.json").then((res) => res.json());

const Loader = () => {
  return (
    <div className="flex justify-center items-center py-20">
      <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin"></div>
    </div>
  );
};

const Allfriends = () => {
  const friendData = use(friendPromise);

  return (
    <div className="bg-base-200">
      <div className="max-w-5xl mx-auto px-3 sm:px-4 pb-12">
        <h2 className="text-xl sm:text-2xl font-semibold mb-5 text-gray-800">
          Your Friends :
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
          {friendData.map((friend) => (
            <Link
              to={`/frienddetails/${friend.id}`}
              key={friend.id}
              className="bg-white border border-gray-100 rounded p-4 sm:p-5 text-center hover:shadow-md sm:hover:shadow-lg transition duration-200 cursor-pointer flex flex-col justify-between min-h-[180px] sm:min-h-[220px]"
            >
              <div>
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-full mx-auto object-cover"
                />

                <h3 className="mt-2 sm:mt-3 font-medium text-gray-800 text-sm sm:text-base">
                  {friend.name}
                </h3>

                <p className="text-[10px] sm:text-xs text-gray-500 mt-1">
                  {friend.days_since_contact} days ago
                </p>

                <div className="flex flex-wrap justify-center gap-1 mt-2 sm:mt-3">
                  {friend.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="text-[9px] sm:text-[10px] px-2 py-[2px] bg-gray-100 text-gray-600 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-3">
                <span
                  className={`text-[10px] sm:text-[11px] px-2.5 py-[3px] rounded-full font-medium ${
                    friend.status === "active"
                      ? "bg-green-100 text-green-600"
                      : "bg-red-100 text-red-500"
                  }`}
                >
                  {friend.status}
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default function AllfriendsPage() {
  return (
    <Suspense fallback={<Loader />}>
      <Allfriends />
    </Suspense>
  );
}
