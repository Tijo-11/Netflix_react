import React from 'react';

export default function ReasonsToJoin() {
  const reasons = [
    {
      title: 'Enjoy on your TV',
      description: 'Watch on Smart TVs, Playstation, Xbox, Chromecast, Apple TV, Blu-ray players, and more.',
      icon: '📺', // Placeholder; replace with actual icon/image
    },
    {
      title: 'Watch Everywhere',
      description: 'Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.',
      icon: '📱', // Placeholder
    },
    {
      title: 'Create Profiles for Kids',
      description: 'Send kids on adventures with their favorite characters in a space made just for them.',
      icon: '👶', // Placeholder
    },
    {
      title: 'Download Your Shows',
      description: 'Save your favorites easily and always have something to watch.',
      icon: '⬇️', // Placeholder
    },
  ];

  return (
    <div className="bg-[#141414] text-white py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        More Reasons to Join
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
        {reasons.map((reason, index) => (
          <div
            key={index}
            className="bg-gray-800 rounded-lg p-6 text-center"
          >
            <div className="text-4xl mb-4">{reason.icon}</div>
            <h3 className="text-xl font-semibold mb-2">{reason.title}</h3>
            <p className="text-gray-400">{reason.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}