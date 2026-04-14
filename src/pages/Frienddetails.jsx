import React, { use, useContext } from "react";
import { useParams } from "react-router";
import { friendContext } from "../context/Context";

const friendPromise = fetch("/friends.json").then((res) => res.json());

const Frienddetails = () => {
  const friendData = use(friendPromise);
  const { id } = useParams();

  const { handleCall, storeFriend, handleText, handleVideo } =
    useContext(friendContext);


  const friend = friendData.find((f) => f.id == id);

  if (!friend) return <div className="p-10">No Data Found</div>;

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex justify-center">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-2xl shadow p-6 text-center space-y-3">
          <img
            src={friend.picture}
            alt={friend.name}
            className="w-20 h-20 rounded-full mx-auto"
          />
          <h2 className="text-lg font-semibold">{friend.name}</h2>

          <span className="text-[10px] px-2 py-1 rounded-full bg-red-100 text-red-500 uppercase">
            {friend.status}
          </span>

          <div className="flex justify-center gap-2 flex-wrap mt-4">
            {friend.tags.map((tag, i) => (
              <span
                key={i}
                className="px-2 py-1 text-xs bg-green-100 text-green-600 rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-sm text-gray-400 italic">"{friend.bio}"</p>
          <p className="text-sm text-gray-500">{friend.email}</p>

          <div className="space-y-2 pt-3">
            <button className="w-full rounded-lg py-2 text-sm bg-gray-100">
              Snooze 2 Weeks
            </button>
            <button className="w-full rounded-lg py-2 text-sm bg-gray-100">
              Archive
            </button>
            <button className="w-full rounded-lg py-2 text-sm text-red-500 bg-gray-100">
              Delete
            </button>
          </div>
        </div>

        <div className="md:col-span-2 space-y-6">
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.days_since_contact}</h3>
              <p className="text-sm text-gray-500">Days Since Contact</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-xl font-bold">{friend.goal}</h3>
              <p className="text-sm text-gray-500">Goal (Days)</p>
            </div>

            <div className="bg-white p-4 rounded-xl shadow text-center">
              <h3 className="text-md font-bold">{friend.next_due_date}</h3>
              <p className="text-sm text-gray-500">Next Due</p>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow flex justify-between items-center">
            <div>
              <h3 className="font-semibold">Relationship Goal</h3>
              <p className="text-sm text-gray-500">
                Connect every{" "}
                <span className="font-bold">{friend.goal} days</span>
              </p>
            </div>
            <button className="bg-gray-100 px-3 py-1 rounded cursor-pointer">
              Edit
            </button>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <h3 className="font-semibold mb-3">Quick Check-In</h3>

            <div className="grid grid-cols-3 gap-3">
              <button
                onClick={() => handleCall(friend)}
                className="bg-gray-100 rounded-lg py-4 cursor-pointer
    active:scale-95 active:bg-gray-300 transition duration-150 hover:bg-gray-200"
              >
                Call
              </button>

              <button
                onClick={() => handleText(friend)}
                className="bg-gray-100 rounded-lg py-4 cursor-pointer
    active:scale-95 active:bg-gray-300 transition duration-150 hover:bg-gray-200"
              >
                Text
              </button>

              <button
                onClick={() => handleVideo(friend)}
                className="bg-gray-100 rounded-lg py-4 cursor-pointer
    active:scale-95 active:bg-gray-300 transition duration-150 hover:bg-gray-200"
              >
                Video
              </button>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow">
            <div className="flex justify-between mb-3">
              <h3 className="font-semibold">Recent Interactions</h3>
              <button className="text-sm text-gray-500">Full History</button>
            </div>

            <div className="space-y-3 text-sm text-gray-600">
              <div className="flex justify-between">
                <span>Text - Asked for advice</span>
                <span>{friend.next_due_date}</span>
              </div>

              <div className="flex justify-between">
                <span>Meetup - Casual meet</span>
                <span>{friend.next_due_date}</span>
              </div>

              <div className="flex justify-between">
                <span>Video - Catch up</span>
                <span>{friend.next_due_date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frienddetails;
