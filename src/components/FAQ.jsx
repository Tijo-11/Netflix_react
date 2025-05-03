import React from 'react';

export default function FAQ() {
  const faqs = [
    {
      question: 'What is Netflix?',
      answer: 'Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries, and more on thousands of internet-connected devices.',
    },
    {
      question: 'How much does Netflix cost?',
      answer: 'Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹149 to ₹649 a month. No extra costs, no contracts.',
    },
    {
      question: 'Where can I watch?',
      answer: 'Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device.',
    },
  ];

  return (
    <div className="bg-[#141414] text-white py-12 px-4">
      <h2 className="text-3xl sm:text-4xl font-bold text-center mb-8">
        Frequently Asked Questions
      </h2>
      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, index) => (
          <div key={index} className="bg-gray-800 rounded-lg">
            <div className="p-4">
              <h3 className="text-xl font-semibold">{faq.question}</h3>
            </div>
            <div className="p-4 border-t border-gray-700">
              <p className="text-gray-400">{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}