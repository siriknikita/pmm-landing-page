import React from 'react';
import { Cpu, Bot, GitBranch, Cloud, Settings, MonitorCheck } from 'lucide-react';

const features = [
  {
    icon: <Cpu className="w-8 h-8 text-blue-400" />,
    title: "Visual CI/CD Pipelines",
    description: "Drag-and-drop pipeline automation with real-time monitoring"
  },
  {
    icon: <Bot className="w-8 h-8 text-purple-400" />,
    title: "AI-Powered Debugging",
    description: "Intelligent error detection and automated chatbot assistance"
  },
  {
    icon: <GitBranch className="w-8 h-8 text-green-400" />,
    title: "Flexible Deployment",
    description: "Deploy locally or to the cloud with integrated workflows"
  },
  {
    icon: <Cloud className="w-8 h-8 text-yellow-400" />,
    title: "Cloud Integration",
    description: "Seamless integration with major cloud providers"
  },
  {
    icon: <Settings className="w-8 h-8 text-red-400" />,
    title: "Easy Configuration",
    description: "Simple setup and management without complexity"
  },
  {
    icon: <MonitorCheck className="w-8 h-8 text-indigo-400" />,
    title: "Real-time Monitoring",
    description: "Comprehensive insights and performance metrics"
  }
];

export function Features() {
  return (
    <section className="snap-section flex items-center py-16">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/50 to-gray-800/50" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_800px_at_50%_50%,#3b82f630,transparent)]" />
      </div>
      
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Key Features</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index} 
              className="group relative bg-gray-800/50 p-6 rounded-lg hover:bg-gray-700/50 transition-all duration-500 hover:scale-105"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-0 group-hover:opacity-30 transition duration-500"></div>
              <div className="relative">
                <div className="mb-4 transform group-hover:scale-110 transition duration-500">{feature.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-400">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}