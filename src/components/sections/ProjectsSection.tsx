import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github, Sparkles, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TEDxPVGCOET Website",
    description: "Built responsive UI with real-time content integration for TEDx event, featuring dynamic content management and seamless user experience.",
    stack: ["React", "JavaScript", "Tailwind CSS", "Express.js"],
    github: "https://github.com/tedxpvgcoet-tech/tedxpvgcoetFrontend",
    live: "https://www.tedxpvgcoet.in/",
    thumbnail: "../img/tedx.jpg",
    color: "red"
  },
  {
    title: "Blood Share",
    description: "Ethereum-based decentralized blood donor system using Solidity smart contracts, enabling secure and transparent blood donation tracking.",
    stack: ["Solidity", "Ethereum", "React.js", "MongoDB"],
    github: "https://github.com/CodeByAtharva/Blood-Share",
    live: "https://bloodshare.vercel.app/",
    thumbnail: "../img/blood.jpg",
    color: "blue"
  },
  {
    title: "Smart Deck",
    description: "A platform that converts any book or text into automatically generated quizzes using AI, helping students study efficiently with instant question sets.",
    stack: ["HTML", "CSS", "JavaScript", "Gemini Api"],
    github: "https://github.com/CodeByAtharva/I7J8K_Prompt2Prototype",
    live: "https://i7-j8-k-prompt2-prototype.vercel.app/",
    thumbnail: "../img/deck.jpg",
    color: "purple"
  },
  {
    title: "Spain Collection Clone",
    description: "A visually appealing luxury website clone inspired by Spain premium product collections, built with smooth animations using GSAP.",
    stack: ["HTML", "CSS", "JavaScript", "GSAP"],
    github: "https://github.com/CodeByAtharva/spain-collection",
    live: "https://codebyatharva.github.io/spain-collection/",
    thumbnail: "../img/spain.jpeg",
    color: "green"
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
    },
    blue: {
      gradient: "from-blue-500 to-cyan-500",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      text: "text-blue-400",
      glow: "shadow-blue-500/20",
    },
    green: {  
      gradient: "from-green-500 to-emerald-500",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      text: "text-green-400",
      glow: "shadow-green-500/20",
    },
    purple: { 
      gradient: "from-purple-500 to-pink-500",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      text: "text-purple-400",
      glow: "shadow-purple-500/20",
    },
  };
  return colors[color];
};

const ProjectCard = ({ project, index }) => {
  const colors = getColorClasses(project.color);
  const cardRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ["start end", "end start"]
  });

  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [0.8, 1, 0.8]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  return (
    <motion.div
      ref={cardRef}
      style={{ scale, opacity }}
      className="sticky top-24 mb-12"
    >
      <div className="grid lg:grid-cols-2 gap-8 items-center max-w-7xl mx-auto">
        {/* Left Side - Thumbnail */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative group/image order-2 lg:order-1"
        >
          <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            {/* Image */}
            <img
              src={project.thumbnail}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover/image:scale-110"
            />
            
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent opacity-60" />

            {/* Corner Accent */}
            <div className="absolute top-4 right-4 z-10">
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                className="p-3 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50"
              >
                <Sparkles className="w-6 h-6 text-white" />
              </motion.div>
            </div>

            {/* Project Number Badge */}
            <div className="absolute top-4 left-4 z-10">
              <div className={`px-4 py-2 rounded-xl bg-gradient-to-r ${colors.gradient} text-white font-bold text-lg shadow-lg`}>
                {String(index + 1).padStart(2, '0')}
              </div>
            </div>

            {/* Hover Glow Effect */}
            <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover/image:opacity-10 transition-opacity duration-500 pointer-events-none`} />
          </div>
        </motion.div>

        {/* Right Side - Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="order-1 lg:order-2 space-y-6"
        >
          {/* Category Badge */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ type: "spring", duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block"
          >
            <div className={`px-4 py-2 rounded-full ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
              <span className={`${colors.text} font-semibold text-sm`}>FEATURED PROJECT</span>
            </div>
          </motion.div>

          {/* Title */}
          <h3 className="font-display text-4xl md:text-5xl font-bold text-white leading-tight">
            {project.title}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed">
            {project.description}
          </p>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech, techIndex) => (
              <motion.span
                key={tech}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: techIndex * 0.05 }}
                viewport={{ once: true }}
                className={`px-4 py-2 text-sm font-semibold ${colors.bg} ${colors.text} rounded-xl border ${colors.border} backdrop-blur-sm`}
              >
                {tech}
              </motion.span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap gap-4 pt-4">
            <Button
              size="lg"
              className={`rounded-xl bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white font-semibold shadow-lg ${colors.glow} transition-all duration-300 px-8`}
              asChild
            >
              <a href={project.live} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <ExternalLink className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="rounded-xl border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300 px-8"
              asChild
            >
              <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
                <Github className="w-5 h-5" />
                <span className="font-semibold">View Code</span>
              </a>
            </Button>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef(null);

  return (
    <section id="projects" className="py-24 relative overflow-hidden bg-gray-900" ref={sectionRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        <div className="absolute top-1/2 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-24"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, type: "spring" }}
            viewport={{ once: true }}
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

        {/* Sticky Scroll Projects */}
        <div className="space-y-32">
          {projects.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-32"
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