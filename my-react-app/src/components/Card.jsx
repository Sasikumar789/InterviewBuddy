import React, { useState } from "react";

export default function Card({ title, description }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const handleClick = () => {
    setLoading(true);
    setError(false);
    setTimeout(() => {
      const success = Math.random() > 0.2;
      if (!success) setError(true);
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="bg-white shadow-md rounded-lg p-6 flex flex-col justify-between hover:scale-105 transition-transform">
      <div>
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
      <button
        onClick={handleClick}
        className="mt-4 bg-primary hover:bg-blue-700 text-white px-4 py-2 rounded disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Loading..." : "Click Me"}
      </button>
      {error && <p className="text-red-500 mt-2">Action failed!</p>}
    </div>
  );
}
