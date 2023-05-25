import React from "react";

export default function Hero({ user }) {
  return (
    <main className="m-2 flex items-center space-x-16 rounded-2xl bg-white px-16 drop-shadow-[0px_10px_30px_rgba(0,0,0,0.1)]">
      <img
        className="aspect-square h-[128px] w-[128px] rounded-full object-cover"
        src={user.picture.large}
      />
      <div className="my-16 flex flex-col">
        <h1 className="text-6xl text-[#E16259] underline underline-offset-2">
          {user.name.title + " " + user.name.first + " " + user.name.last}
        </h1>
        <address className="mt-4 text-lg text-slate-900">
          <span className="text-purple-600">{user.location.street.number}</span>
          ,&nbsp;
          <span>{user.location.street.name}</span>,&nbsp;
          <span>{user.location.city}</span>,&nbsp;
          <span>{user.location.state}</span>,&nbsp;
          <span className="font-bold">{user.location.country}</span>,&nbsp;
          <span>{user.location.postcode}</span>
          <br></br>
          <span>{user.location.timezone.offset}</span>,&nbsp;
          <span>{user.location.timezone.description}</span>
        </address>
        <span className="text-xl text-slate-600 capitalize">{user.gender}</span>
      </div>
    </main>
  );
}
