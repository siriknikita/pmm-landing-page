import React from 'react';

export function Installation() {
  return (
    <section className="snap-section flex items-center py-16" id="quick-installation">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-800/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#3b82f630,transparent)]" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Quick Installation</h2>
        <div className="bg-gray-800/50 p-6 rounded-lg max-w-2xl mx-auto group hover:scale-105 transition-all duration-500">
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
          <div className="relative">
            <p className="text-gray-400 mb-4">Installation command coming soon...</p>
            <div className="bg-gray-900 p-4 rounded-lg">
              <code className="text-blue-400">$ [Command will be available soon]</code>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
