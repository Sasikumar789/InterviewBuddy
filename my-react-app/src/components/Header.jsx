import React from "react";

export default function Header() {
  return (
    <header className="bg-white shadow-md py-4 px-8 flex justify-between items-center">
      <h1 className="text-2xl font-bold text-primary">InterviewBuddy</h1>
      <nav>
        <ul className="flex space-x-6">
          <li><a href="#" className="hover:text-primary">Home</a></li>
          <li><a href="#" className="hover:text-primary">Features</a></li>
          <li><a href="#" className="hover:text-primary">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
}
