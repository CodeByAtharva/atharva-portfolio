import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TEDxPVGCOET Website",
    description: "Built responsive UI with real-time content integration for TEDx event, featuring dynamic content management and seamless user experience",
    stack: ["React", "JavaScript", "Tailwind CSS", "Express.js"],
    github: "https://github.com/tedxpvgcoet-tech/tedxpvgcoetFrontend",
    live: "https://www.tedxpvgcoet.in/",
    thumbnail: "../img/tedx.jpg",
    color: "red"
  },
  {
    title: "Blood Share",
    description: "Ethereum-based decentralized blood donor system using Solidity smart contracts, enabling secure and transparent blood donation tracking",
    stack: ["Solidity", "Ethereum", "React.js", "MongoDB"],
    github: "//github.com/CodeByAtharva/Blood-Share",
    live: "https://bloodshare.vercel.app/",
    thumbnail: "../img/blood.jpg",
    color: "blue"
  },
  {
    title: "Smart Deck",
    description: "A platform that converts any book or text into automatically generated quizzes using AI, helping students study efficiently with instant question sets.",
    stack: ["HTML", "CSS", "JavaScript", "Gemini API"],
    github: "https://github.com/CodeByAtharva/I7J8K_Prompt2Prototype",
    live: "https://i7-j8-k-prompt2-prototype.vercel.app/",
    thumbnail: "../img/deck.jpg",
    color: "green"
  },
  {
    title: "Spain Collection Clone",
    description: "A visually appealing luxury website clone inspired by Spain premium product collections, built with smooth animations using GSAP.",
    stack: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/CodeByAtharva/spain-collection",
    live: "https://codebyatharva.github.io/spain-collection/",
    thumbnail: "../img/spain.jpeg",
    color: "purple"
  },
];

const getColorClasses = (color) => {
  const colors = {
    red: {
      gradient: "from-red-500 to-orange-500",
      bg: "bg-red-500/10",
      border: "border-red-500/30",
      text: "text-red-400",
      glow: "shadow-red-500/20",
      hover: "hover:shadow-red-500/30"
    },
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      text: "text-blue-400",
      glow: "shadow-blue-500/20",
      hover: "hover:shadow-blue-500/30"
    },
    green: {
      gradient: "from-green-500 to-emerald-500",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-400",
      glow: "shadow-green-500/20",
      hover: "hover:shadow-green-500/30"
    },
    purple: {
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      text: "text-purple-400",
      glow: "shadow-purple-500/20",
      hover: "hover:shadow-purple-500/30"
    },
  };
  return colors[color];
};

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/3 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={isInView ? { scale: 1 } : {}}
            transition={{ duration: 0.5, type: "spring" }}
            className="inline-block mb-4"
          >
            <div className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 backdrop-blur-sm">
              <span className="text-cyan-400 font-semibold text-sm">PROJECTS</span>
            </div>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Showcasing some of my recent work that demonstrates my technical skills and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const colors = getColorClasses(project.color);
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group"
              >
                <div className={`bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl overflow-hidden shadow-xl ${colors.hover} transition-all duration-500`}>
                  {/* Project Thumbnail Section */}
                  <div className="relative h-64 overflow-hidden group/image">
                    {/* Thumbnail Image */}
                    <motion.img
                      src={project.thumbnail}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110 group-hover/image:brightness-90"
                      whileHover={{ scale: 1.1 }}
                    />

                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent opacity-50 group-hover:opacity-30 transition-opacity duration-500" />

                    {/* Hover Gradient Overlay */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      whileHover={{ opacity: 1 }}
                      className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover:opacity-25 transition-opacity duration-500`}
                    />

                    {/* Corner Accent */}
                    <div className="absolute top-4 right-4 z-10">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        className="p-2 rounded-lg bg-gray-900/60 backdrop-blur-sm border border-gray-700/50"
                      >
                        <Sparkles className="w-5 h-5 text-white" />
                      </motion.div>
                    </div>

                    {/* Quick View Indicator */}
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-gray-900/80 backdrop-blur-sm border border-gray-700/50 opacity-0 group-hover:opacity-100 transition-all duration-300"
                    >
                      <span className="text-xs font-semibold text-white flex items-center gap-2">
                        <ExternalLink className="w-3 h-3" />
                        View Project
                      </span>
                    </motion.div>
                  </div>

                  {/* Project Content */}
                  <div className="p-6">
                    {/* Title */}
                    <h3 className="font-display text-2xl font-bold mb-3 text-white group-hover:bg-gradient-to-r group-hover:from-blue-400 group-hover:to-purple-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                      {project.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-400 text-sm leading-relaxed mb-6">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.stack.map((tech, techIndex) => (
                        <motion.span
                          key={tech}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={isInView ? { opacity: 1, scale: 1 } : {}}
                          transition={{ delay: index * 0.2 + techIndex * 0.05 }}
                          className={`px-3 py-1.5 text-xs font-semibold ${colors.bg} ${colors.text} rounded-lg border ${colors.border} backdrop-blur-sm`}
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      <Button
                        variant="outline"
                        size="sm"
                        className="flex-1 rounded-xl border-gray-600 hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300"
                        asChild
                      >
                        <a href={project.github} className="flex items-center justify-center gap-2">
                          <Github className="w-4 h-4" />
                          <span className="font-semibold">GitHub</span>
                        </a>
                      </Button>
                      <Button
                        size="sm"
                        className={`flex-1 rounded-xl bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white font-semibold shadow-lg ${colors.glow} transition-all duration-300`}
                        asChild
                      >
                        <a href={project.live} className="flex items-center justify-center gap-2">
                          <ExternalLink className="w-4 h-4" />
                          <span>Live Demo</span>
                        </a>
                      </Button>
                    </div>
                  </div>

                  {/* Subtle Hover Glow */}
                  <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-10 transition-opacity duration-500 pointer-events-none rounded-2xl`} />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 text-gray-300">
            <Zap className="w-4 h-4 text-yellow-400" />
            <span className="text-sm font-medium">More projects coming soon...</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;
