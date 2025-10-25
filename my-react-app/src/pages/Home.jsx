import React from "react";
import Card from "../components/Card";

export default function Home() {
  const data = [
    { title: "Feature 1", description: "Description for feature 1" },
    { title: "Feature 2", description: "Description for feature 2" },
    { title: "Feature 3", description: "Description for feature 3" },
    { title: "Feature 4", description: "Description for feature 4" },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
        {data.map((item, idx) => (
          <Card key={idx} title={item.title} description={item.description} />
        ))}
      </div>
    </div>
  );
}
