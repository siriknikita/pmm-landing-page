import React from 'react';

interface CookieConsentProps {
  onAccept: () => void;
}

export function CookieConsent({ onAccept }: CookieConsentProps) {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-gray-800/95 backdrop-blur-sm p-4 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <p className="text-gray-300">
          We use cookies to enhance your experience. By continuing to visit this site you agree to our use of cookies.
        </p>
        <button
          onClick={onAccept}
          className="relative group bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-lg ml-4 transition-all duration-300 ease-out hover:scale-105"
        >
          <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
          <span className="relative">Accept</span>
        </button>
      </div>
    </div>
  );
}