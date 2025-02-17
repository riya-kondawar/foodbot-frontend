import React from "react";

const Header = () => {
  return (
    <header className="w-full bg-gradient-to-r from-indigo-900 to-purple-800 text-white p-4 shadow-lg">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold">🤖 Food AI Chatbot</h1>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#" className="hover:text-yellow-400 transition">Home</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Features</a></li>
            <li><a href="#" className="hover:text-yellow-400 transition">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
