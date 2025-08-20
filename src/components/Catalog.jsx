const projects = [
  {
    id: "P-01",
    title: "C++ Inventory System",
    description: "A simple sales and inventory manager built with C++ and Excel integration.",
    image: "/cpp-inventory.png", // screenshot in /public
    link: "https://github.com/yourusername/cpp-inventory", // GitHub repo
  },
  {
    id: "P-02",
    title: "Word Scramble Game",
    description: "Educational word scramble built with HTML, CSS, and JavaScript.",
    image: "/scramble.png",
    link: "https://github.com/yourusername/word-scramble",
  },
  {
    id: "P-03",
    title: "Portfolio Website",
    description: "This very portfolio site built with React + Vite + Tailwind.",
    image: "/portfolio.png",
    link: "https://github.com/yourusername/portfolio",
  },
];

export default function Catalog() {
  return (
    <div className="space-y-16">
      {projects.map((p, i) => (
        <div
          key={p.id}
          className={`flex flex-col ${
            i % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
          } items-center gap-8`}
        >
          {/* IMAGE */}
          <div className="flex-1">
            <img
              src={p.image}
              alt={p.title}
              className="w-full object-contain border border-black"
            />
          </div>

          {/* TEXT DESCRIPTION */}
          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-2xl uppercase">{p.title}</h3>
            <p className="text-sm mt-2">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm uppercase border border-black px-4 py-2 hover:bg-black hover:text-white transition"
            >
              View on GitHub
            </a>
          </div>
        </div>
      ))}
    </div>
  );
}
