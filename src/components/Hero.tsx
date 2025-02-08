import React from 'react';
import { Boxes } from 'lucide-react';

export function Hero() {
  return (
    <header className="snap-section flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900 to-gray-800/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_200px,#3b82f630,transparent)]" />
      </div>
      
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center mb-6">
          <div className="relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur opacity-0 group-hover:opacity-75 transition duration-500"></div>
            <Boxes className="relative w-16 h-16 text-blue-400 transform group-hover:scale-110 transition duration-500" />
          </div>
        </div>
        <h1 className="text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
          PolyMicro Manager
        </h1>
        <p className="text-2xl text-gray-300 mb-8">
          Simplifying Microservice Orchestration Like Never Before
        </p>
        <div className="flex justify-center gap-4">
          <button className="relative group bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-out hover:scale-105">
            <div className="absolute -inset-1 bg-blue-500 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <span className="relative">Get Started Free</span>
          </button>
          <button className="relative group border border-gray-500 hover:border-blue-400 px-8 py-3 rounded-lg font-semibold transition-all duration-300 ease-out hover:scale-105">
            <div className="absolute -inset-1 bg-blue-400 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
            <span className="relative">View Demo</span>
          </button>
        </div>
      </div>
    </header>
  );
}