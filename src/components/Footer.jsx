import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#141414] text-gray-400 px-4 py-8">
      <div className="max-w-5xl mx-auto">
        <p className="mb-6 text-base">
          <a href="https://help.netflix.com" className="hover:underline">
            Questions? Call 000-800-919-1743
          </a>
        </p>
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-4 sm:gap-8">
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">FAQ</a></li>
            <li><a href="#" className="hover:underline">Investor Relations</a></li>
            <li><a href="#" className="hover:underline">Ways to Watch</a></li>
            <li><a href="#" className="hover:underline">Corporate Information</a></li>
            <li><a href="#" className="hover:underline">Only on Netflix</a></li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Help Center</a></li>
            <li><a href="#" className="hover:underline">Jobs</a></li>
            <li><a href="#" className="hover:underline">Terms of Use</a></li>
            <li><a href="#" className="hover:underline">Contact Us</a></li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Account</a></li>
            <li><a href="#" className="hover:underline">Redeem Gift Cards</a></li>
            <li><a href="#" className="hover:underline">Privacy</a></li>
            <li><a href="#" className="hover:underline">Speed Test</a></li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:underline">Media Center</a></li>
            <li><a href="#" className="hover:underline">Buy Gift Cards</a></li>
            <li><a href="#" className="hover:underline">Cookie Preferences</a></li>
            <li><a href="#" className="hover:underline">Legal Notices</a></li>
          </ul>
        </div>
        <div className="mt-6">
          <select
            className="bg-transparent border border-gray-400 text-white text-sm py-2 px-4 rounded-sm focus:outline-none"
            defaultValue="en"
          >
            <option value="en">English</option>
            <option value="es">Español</option>
            <option value="fr">Français</option>
          </select>
        </div>
        <p className="mt-4 text-sm">Netflix India</p>
      </div>
    </footer>
  );
}