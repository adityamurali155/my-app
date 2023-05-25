import React from "react";

export default function Card(props) {
  const { active, setActive, user } = props;
  return (
    <div
      onClick={setActive}
      className={`group overflow-hidden rounded-sm p-4 drop-shadow-[0px_2px_7px_rgba(0,0,0,0.2)] ${
        active ? "bg-purple-600" : "bg-white"
      }`}
    >
      <div
        className={`text-sm space-x-1 ${
          active ? "text-gray-100" : "text-gray-700"
        }`}
      >
        <span className="capitalize">{user.gender}</span>
        <span>·</span>
        <span className="uppercase">{user.nat}</span>
      </div>
      <h3
        className={`text-xl font-bold ${
          active ? "text-white" : "text-gray-900"
        }`}
      >
        {user.name.title + " " + user.name.first + " " + user.name.last}
      </h3>
      <a
        className={`text-sm ${
          active ? "text-gray-100 hover:text-white" : "text-[#E16259]"
        }`}
        href={`mailto:${user.email}`}
      >
        {user.email}
      </a>
    </div>
  );
}
