import React from "react";
export default function Header() {
  return (
    <header className="mx-2 flex h-10 w-full max-w-[1202px] items-center justify-between">
      <h1>
        <a href="/" className="text-xl font-bold">
          YourChallenge
        </a>
      </h1>
      <nav className="space-x-6">
        <a className="border-b-2 border-[#E16259] text-lg" href="/product">
          Product
        </a>
        <a className="text-lg" href="/download">
          Download
        </a>
        <a className="text-lg" href="/pricing">
          Pricing
        </a>
      </nav>
    </header>
  );
}
