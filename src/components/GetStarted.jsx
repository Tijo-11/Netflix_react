import React, { useState } from 'react';

export default function GetStarted() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      console.log('Email submitted:', email);
    }
  };

  return (
    <div className="bg-[#141414] text-white text-center py-8 px-4">
      <h4 className="text-xl sm:text-2xl mb-4">
        Ready to watch? Enter your email to create or restart your membership.
      </h4>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col sm:flex-row justify-center items-center gap-2 max-w-lg mx-auto"
      >
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full sm:w-2/3 bg-[#141414] border border-gray-400 text-white py-3 px-4 rounded focus:outline-none focus:border-red-600"
        />
        <button
          type="submit"
          className="w-full sm:w-auto bg-red-600 text-white py-3 px-6 rounded text-lg hover:bg-red-700"
        >
          Get Started
        </button>
      </form>
    </div>
  );
}