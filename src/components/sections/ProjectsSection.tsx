import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { useRef, useState, useEffect } from "react";
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

const getColorClasses = (color: string) => {
  const colors: Record<string, { gradient: string; bg: string; border: string; text: string; glow: string }> = {
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
  return colors[color] || colors.blue;
};

const ProjectContent = ({ project, index }: { project: typeof projects[0]; index: number }) => {
  const colors = getColorClasses(project.color);

  return (
    <motion.div
      key={project.title}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="grid lg:grid-cols-2 gap-6 lg:gap-8 h-full p-6 lg:p-10"
    >
      {/* Left Side - Thumbnail */}
      <div className="relative group/image h-full min-h-[250px] order-2 lg:order-1">
        <div className="relative h-full rounded-2xl overflow-hidden">
          <motion.img
            key={project.thumbnail}
            initial={{ scale: 1.1, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.6 }}
            src={project.thumbnail}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/30 to-transparent opacity-50" />

          {/* Corner Accent */}
          <div className="absolute top-4 right-4 z-10">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="p-2.5 rounded-xl bg-gray-900/60 backdrop-blur-sm border border-gray-700/50"
            >
              <Sparkles className="w-5 h-5 text-white" />
            </motion.div>
          </div>

          {/* Project Number Badge */}
          <div className="absolute top-4 left-4 z-10">
            <motion.div 
              key={index}
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className={`px-4 py-2 rounded-xl bg-gradient-to-r ${colors.gradient} text-white font-bold text-lg shadow-lg`}
            >
              {String(index + 1).padStart(2, '0')}
            </motion.div>
          </div>

          {/* Hover Glow Effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${colors.gradient} opacity-0 group-hover/image:opacity-10 transition-opacity duration-500 pointer-events-none`} />
        </div>
      </div>

      {/* Right Side - Content */}
      <div className="flex flex-col justify-center order-1 lg:order-2 space-y-4 lg:space-y-6">
        {/* Category Badge */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          className="inline-block self-start"
        >
          <div className={`px-4 py-2 rounded-full ${colors.bg} border ${colors.border} backdrop-blur-sm`}>
            <span className={`${colors.text} font-semibold text-sm`}>FEATURED PROJECT</span>
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight"
        >
          {project.title}
        </motion.h3>

        {/* Description */}
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-gray-400 text-base lg:text-lg leading-relaxed"
        >
          {project.description}
        </motion.p>

        {/* Tech Stack */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="flex flex-wrap gap-2 lg:gap-3"
        >
          {project.stack.map((tech, techIndex) => (
            <motion.span
              key={tech}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 + techIndex * 0.05 }}
              className={`px-3 lg:px-4 py-1.5 lg:py-2 text-sm font-semibold ${colors.bg} ${colors.text} rounded-xl border ${colors.border} backdrop-blur-sm`}
            >
              {tech}
            </motion.span>
          ))}
        </motion.div>

        {/* Action Buttons */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="flex flex-wrap gap-3 lg:gap-4 pt-2 lg:pt-4"
        >
          <Button
            size="lg"
            className={`rounded-xl bg-gradient-to-r ${colors.gradient} hover:opacity-90 text-white font-semibold shadow-lg ${colors.glow} transition-all duration-300 px-6 lg:px-8`}
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
            className="rounded-xl border-2 border-gray-600 hover:border-gray-500 hover:bg-gray-700/50 transition-all duration-300 px-6 lg:px-8"
            asChild
          >
            <a href={project.github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2">
              <Github className="w-5 h-5" />
              <span className="font-semibold">View Code</span>
            </a>
          </Button>
        </motion.div>
      </div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // Map scroll progress to project index
  useEffect(() => {
    const unsubscribe = scrollYProgress.on("change", (value) => {
      const newIndex = Math.min(
        Math.floor(value * projects.length),
        projects.length - 1
      );
      if (newIndex !== activeIndex && newIndex >= 0) {
        setActiveIndex(newIndex);
      }
    });
    return unsubscribe;
  }, [scrollYProgress, activeIndex]);

  // Progress indicator transform
  const progressWidth = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <section id="projects" className="relative bg-gray-900" ref={sectionRef}>
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
          className="text-center py-24 pb-12"
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

        {/* Scroll Container - This creates the scroll height */}
        <div 
          ref={containerRef}
          className="relative"
          style={{ height: `${projects.length * 100}vh` }}
        >
          {/* Sticky Card Frame - Fixed in center while scrolling */}
          <div className="sticky top-20 h-[80vh] flex items-center justify-center">
            <div 
              className="w-full max-w-6xl h-[85vh] min-h-[600px] rounded-3xl overflow-hidden shadow-2xl border border-gray-700/50"
              style={{
                background: 'linear-gradient(180deg, rgba(17, 24, 39, 0.95) 0%, rgba(17, 24, 39, 0.98) 100%)',
              }}
            >
              {/* Progress Bar */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gray-800 z-20">
                <motion.div 
                  className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500"
                  style={{ width: progressWidth }}
                />
              </div>

              {/* Project Indicators */}
              <div className="absolute right-6 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
                {projects.map((_, i) => (
                  <motion.div
                    key={i}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${
                      i === activeIndex 
                        ? 'bg-white scale-150' 
                        : 'bg-gray-600 hover:bg-gray-500'
                    }`}
                    animate={{
                      scale: i === activeIndex ? 1.5 : 1,
                    }}
                  />
                ))}
              </div>

              {/* Animated Content */}
              <AnimatePresence mode="wait">
                <ProjectContent 
                  key={activeIndex}
                  project={projects[activeIndex]} 
                  index={activeIndex} 
                />
              </AnimatePresence>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center py-24"
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
