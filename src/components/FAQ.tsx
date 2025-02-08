import React from 'react';

const faqs = [
  {
    question: "Who is PolyMicro Manager for?",
    answer: "PolyMicro Manager is ideal for developers, DevOps engineers, and small to medium-sized teams looking for a lightweight yet powerful alternative to Kubernetes and Jenkins."
  },
  {
    question: "How does it compare to Jenkins or Kubernetes?",
    answer: "Unlike Jenkins or Kubernetes, PolyMicro Manager focuses on simplicity with visual drag-and-drop pipelines, native microservice management, and AI-powered debugging—without the steep learning curve."
  },
  {
    question: "Can I integrate with existing tools?",
    answer: "Absolutely! Our platform seamlessly integrates with Docker, Google Pub/Sub, Nginx, and Rust-based backends."
  }
];

export function FAQ() {
  return (
    <section className="snap-section flex items-center py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-800/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#3b82f630,transparent)]" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-6">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative">
                <h3 className="text-xl font-semibold mb-2">{faq.question}</h3>
                <p className="text-gray-400">{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}