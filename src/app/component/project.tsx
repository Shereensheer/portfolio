
/* eslint-disable */




const projects = [
  {
    title: "Ecommerce website",
    desc: "A full stack Ecommerce website built with nextjs",
    url: "https://shop-co-ecommerce-marketplace-rns9.vercel.app/",
    img: "pic.png"
  },
  {
    title: "Portfolio website",
    desc: "A modren portfolio website with animation and dark mode ",
    url: "https://nextjsassignment6-dslm.vercel.app/",
    img: "/profile.png"
  },
  {
    title: "Saloon website",
    desc: "E-commerce website built with nextjs",
    url: "https://web7-nine.vercel.app/",
    img: "/saloon.png"
  },
  {
    title: "Banking App",
    desc: "Bank Account System website built in python",
    url: "https://bank-account-system-cyww2f7zymxxm4uydndzrx.streamlit.app/",
    img: "bank.png"
  },
  {
    title: "Beckend Projects",
    desc: "Multi Image Generator built with python in oops concept",
    url: "https://oops-project-thvqwtdmtfy4vfjagqmdu8.streamlit.app/",
    img: "AI.png"
  },
  {
    title: "Skill Swap",
    desc: "Real-time chat app",
    url: "https://skillswap-g8um548wvrdy8quzmezfcj.streamlit.app/",
    img: "skill.png"
  },
];

export const Projects = () => (
  <section id="projects" className=" text-white">
    <div className="max-w-6xl mx-auto px-6">
      <div className="flex justify-center">
        <h3 className="text-4xl font-bold mb-12 tracking-wide relative inline-block after:block after:w-28 after:h-1 after:bg-cyan-300 after:mx-auto after:mt-3">
          My Projects
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {projects.map((p, idx) => (
          <a
            key={idx}
            href={p.url}
            className="group p-6 bg-gradient-to-br from-gray-900 to-gray-800 rounded-2xl shadow-md border border-gray-700 hover:shadow-cyan-500/30 transform hover:scale-105 transition duration-300"
          >
            {p.img && (
              <img
                src={p.img}
                alt={p.title}
                className="rounded-lg mb-4 w-full h-40 object-cover"
              />
            )}
            <h4 className="text-xl font-semibold mb-2 group-hover:text-cyan-300 transition">
              {p.title}
            </h4>
            <p className="text-gray-300">{p.desc}</p>
          </a>
        ))}
      </div>
    </div>
  </section>
);
