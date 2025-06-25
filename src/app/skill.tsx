
import React from "react";
import {
  Code,
  Braces,
  Brain,
  Layers,
  Settings,
  Users,
  Paintbrush2,
  GitBranch,
  Monitor,
  Palette,
  Sparkles,
  FileCode,
} from "lucide-react";

interface SkillItem {
  name: string;
  icon: JSX.Element;
}

interface SkillGroup {
  category: string;
  icon: JSX.Element;
  items: SkillItem[];
}

export const TechnicalSkills = () => {
  const skills: SkillGroup[] = [
    {
      category: "Programming Languages",
      icon: <Braces className="w-5 h-5  inline-block mr-2 text-cyan-400" />,
      items: [
        { name: "Python", icon: <FileCode className="w-4 h-4 text-cyan-300" /> },
        { name: "TypeScript", icon: <FileCode className="w-4 h-4 text-cyan-300" /> },
        { name: "Java", icon: <FileCode className="w-4 h-4 text-cyan-300" /> },
        { name: "HTML", icon: <FileCode className="w-4 h-4 text-cyan-300" /> },
        { name: "CSS", icon: <FileCode className="w-4 h-4 text-cyan-300" /> },
      ],
    },
    {
      category: "Frameworks & Libraries",
      icon: <Layers className="w-5 h-5 inline-block mr-2 text-cyan-400" />,
      items: [
        { name: "Next.js", icon: <Code className="w-4 h-4 text-cyan-300" /> },
        { name: "React", icon: <Code className="w-4 h-4 text-cyan-300" /> },
        { name: "Tailwind CSS", icon: <Palette className="w-4 h-4 text-cyan-300" /> },
        // { name: "Node.js", icon: <Settings className="w-4 h-4 text-cyan-300" /> },
      ],
    },
    {
      category: " Learning AI & ML",
      icon: <Brain className="w-5 h-5 inline-block mr-2 text-cyan-400" />,
      items: [
        { name: "Agentic AI", icon: <Sparkles className="w-4 h-4 text-cyan-300" /> },
        { name: "Robotic AI", icon: <Sparkles className="w-4 h-4 text-cyan-300" /> },
        { name: "OpenAI Agents SDK", icon: <Sparkles className="w-4 h-4 text-cyan-300" /> },
        { name: "OpenAI API", icon: <Sparkles className="w-4 h-4 text-cyan-300" /> },
      ],
    },
    {
      category: "Tools & Platforms",
      icon: <Settings className="w-5 h-5 inline-block mr-2 text-cyan-400" />,
      items: [
        { name: "Git", icon: <GitBranch className="w-4 h-4 text-cyan-300" /> },
        { name: "GitHub", icon: <GitBranch className="w-4 h-4 text-cyan-300" /> },
        { name: "VS Code", icon: <Monitor className="w-4 h-4 text-cyan-300" /> },
        { name: "Figma", icon: <Paintbrush2 className="w-4 h-4 text-cyan-300" /> },
        // { name: "Postman", icon: <Settings className="w-4 h-4 text-cyan-300" /> },
      ],
    },
    {
      category: "Soft Skills",
      icon: <Users className="w-5 h-5 inline-block mr-2 text-cyan-400" />,
      items: [
        { name: "UI/UX Design", icon: <Paintbrush2 className="w-4 h-4 text-cyan-300" /> },
        { name: "Problem Solving", icon: <Brain className="w-4 h-4 text-cyan-300" /> },
        { name: "Team Collaboration", icon: <Users className="w-4 h-4 text-cyan-300" /> },
        { name: "Hackathon Experience", icon: <Sparkles className="w-4 h-4 text-cyan-300" /> },
      ],
    },
  ];

  return (
    <section
      id="skills"
      className="py-24  text-white"
    >
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex justify-center">
          <h2 className="text-4xl font-extrabold mb-12 tracking-wide relative inline-block text-center after:content-[''] after:block after:w-24 after:h-1 after:bg-cyan-400 after:mx-auto after:mt-2">
            🛠️ Technical Skills
          </h2>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {skills.map((group, idx) => (
            <div
              key={idx}
              className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-cyan-400/30 transition duration-300"
            >
              <h3 className="text-xl font-bold text-cyan-400 mb-4">
                {group.icon} {group.category}
              </h3>
              <ul className="space-y-2 text-gray-300">
                {group.items.map((skill, i) => (
                  <li key={i} className="flex items-center space-x-2">
                    {skill.icon}
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnicalSkills;
