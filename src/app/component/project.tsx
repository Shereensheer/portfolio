
// File: components/Projects.tsx
const projects = [
  { title: "Project One", desc: "Landing page with animations", url: "#" },
  { title: "Project Two", desc: "Portfolio website", url: "#" },
  { title: "Project Three", desc: "E-commerce dashboard", url: "#" },
];

export const Projects = () => (
  <section id="projects" className="py-20">
    <div className="max-w-6xl mx-auto px-4">
      <h3 className="text-3xl font-bold text-center mb-12">Projects</h3>
      <div className="grid md:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <a
            key={idx}
            href={p.url}
            className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition border"
          >
            <h4 className="text-xl font-semibold mb-2">{p.title}</h4>
            <p className="text-gray-600">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
