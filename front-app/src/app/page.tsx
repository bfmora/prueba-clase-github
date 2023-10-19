"use client";

import { useState } from "react";

export default function Home() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount((current) => current + 1);
  };

  return (
    <div className="bg-slate-600 flex flex-col flex-1 justify-center items-center h-full">
      <span className="text-white">Test for the class october the 18th</span>
      <button
        type="button"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
        onClick={increment}
      >
        Default
      </button>
      <span>{count}</span>
    </div>
  );
}
