import React from "react";

// Removed all Framer Motion imports and animation variants

const projects = [
  {
    id: 1,
    title: "Luxury Car Rentals",
    image: "/7.jpg",
    link: "https://emma-ride-xgiv.vercel.app/",
    tech: ["React", "Tailwind", "Framer Motion"],
    note: "Premium vehicle booking platform with 3D model viewer"
  },
  {
    id: 2,
    title: "Modern Portfolio",
    image: "/6.jpg",
    link: "https://sneakers-store2.vercel.app/",
    tech: ["Next.js", "Framer Motion", "Three.js"],
    note: "Interactive developer portfolio with 3D elements"
  },
  {
    id: 3,
    title: "Real Estate Hub",
    image: "/5.jpg",
    link: "https://emma-real-estate-z9j5.vercel.app/",
    tech: ["TypeScript", "React Query", "Mapbox"],
    note: "Property listings with advanced search filters"
  },
  {
    id: 4,
    title: "Fashion E-commerce",
    image: "/9.jpg",
    link: "#",
    tech: ["React", "Redux", "Stripe"],
    note: "High-end fashion store with AR try-on"
  },
  {
    id: 5,
    title: "Admin Dashboard",
    image: "/8.jpg",
    link: "https://eazystore.vercel.app/",
    tech: ["React", "Chart.js", "Firebase"],
    note: "Analytics dashboard with real-time data"
  },
  {
    id: 6,
    title: "Sneakers Hub",
    image: "/10.png",
    link: "https://sneakers-store2.vercel.app/",
    tech: ["Next.js", "Context API", "CSS Modules"],
    note: "Sneaker marketplace with cart functionality"
  }
];

const WebImage = () => {
  const lime = "#a3e635"; // Tailwind's lime-400

  return (
    <div className="min-h-screen bg-black py-20 px-4 sm:px-8 lg:px-16 xl:px-24">
      <div className="max-w-7xl mx-auto">
        {/* Section Title */}
        <div className="mb-16 sm:mb-20 overflow-hidden">
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white text-center">
            Selected <span style={{ color: lime }}>Projects</span>
          </h2>
          <p className="text-gray-300 text-center mt-4 max-w-2xl mx-auto text-lg">
            Here's a collection of my recent work showcasing modern web development
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-xl bg-neutral-950 border border-gray-800"
              // Removed Framer Motion hover and transition
            >
              {/* Project Image */}
              <div className="h-64 overflow-hidden relative">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <h3 className="text-xl font-bold text-white">{project.title}</h3>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tech.map(tech => (
                        <span
                          key={tech}
                          className="text-xs px-2 py-1 rounded-full"
                          style={{ backgroundColor: lime, color: 'black' }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <p className="text-gray-300 text-sm">{project.note}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-4 text-sm font-medium px-4 py-2 rounded-full border"
                  style={{ borderColor: lime, color: lime }}
                  // Removed Framer Motion hover/tap
                >
                  View Project →
                </a>
              </div>

              {/* Hover Effect Border */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-lime-400 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none rounded-xl"></div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="flex justify-center mt-16">
          <a
            href="#"
            className="px-8 py-3 rounded-full font-medium border-2"
            style={{ borderColor: lime, color: lime }}
            // Removed Framer Motion hover/tap
          >
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default WebImage;