import React from "react";

interface HighlightItem {
  title: string;
  description: string;
  icon: string;
  color: string;
}

export default function KeyHighlights(): JSX.Element {
  const highlights: HighlightItem[] = [
    {
      title: "Fast Performance",
      description: "Enjoy lightning fast speed and smooth experience.",
      icon: "🚀",
      color: "text-red-400",
    },
    {
      title: "Secure",
      description: "Top-notch security for your data and privacy.",
      icon: "🔒",
      color: "text-green-400",
    },
    {
      title: "User Friendly",
      description: "Clean, simple and intuitive design.",
      icon: "🎯",
      color: "text-yellow-400",
    },
    {
      title: "24/7 Support",
      description: "We’re here to help, anytime you need us.",
      icon: "💬",
      color: "text-blue-400",
    },
    {
      title: "Problem Solving",
      description: "Tackle complex challenges with smart solutions.",
      icon: "🧠",
      color: "text-purple-400",
    },
    {
      title: "Full Stack",
      description: "Seamless integration from frontend to backend.",
      icon: "🖥️",
      color: "text-pink-400",
    },
    {
      title: "Agentic AI",
      description: "Autonomous agents that act with purpose.",
      icon: "🤖",
      color: "text-indigo-400",
    },
  ];

  return (
    <div className="min-h-screen text-white flex flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-10">🌟 Key Highlights</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full">
        {highlights.map((item, index) => (
          <div
            key={index}
            className="bg-white/5 backdrop-blur-sm border border-white/10 p-6 rounded-2xl shadow-lg hover:scale-105 transition-transform duration-300"
          >
            <div className={`text-4xl mb-4 ${item.color}`}>{item.icon}</div>
            <h2 className="text-2xl font-semibold mb-2">{item.title}</h2>
            <p className="text-gray-300">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
