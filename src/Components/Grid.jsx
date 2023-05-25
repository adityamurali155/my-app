import React from "react";
export default function Grid(props) {
  return (
    <section className="grid w-full max-w-[1202px] grow grid-cols-4 grid-rows-3 gap-4">
      {props.children}
    </section>
  );
}
