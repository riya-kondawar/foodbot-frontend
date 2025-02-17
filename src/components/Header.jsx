import React from 'react';

const Header = () => {
  return (
    <header className='w-full bg-gradient-to-r from-indigo-900 to-purple-800 text-white p-6 shadow-lg flex items-center justify-between'>
      <h1 className='text-3xl font-bold'>🤖 Food AI Chatbot</h1>
      <nav>
        <ul className='flex space-x-6'>
          <li className='hover:text-yellow-400 transition'><a href='#'>Home</a></li>
          <li className='hover:text-yellow-400 transition'><a href='#'>Features</a></li>
          <li className='hover:text-yellow-400 transition'><a href='#'>Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
