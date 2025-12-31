import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TEDxPVGCOET Website",
    description: "Built responsive UI with real-time content integration for TEDx event",
    stack: ["React", "JavaScript", "Tailwind CSS", "Express.js"],
    github: "#",
    live: "#",
  },
  {
    title: "Blood Share",
    description: "Ethereum-based decentralized blood donor system using Solidity",
    stack: ["Solidity", "Ethereum", "React.js", "MongoDB"],
    github: "#",
    live: "#",
  },
];

const ProjectsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Featured <span className="gradient-text">Projects</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Some of my recent work that showcases my skills</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: index * 0.2 }} whileHover={{ y: -10 }} className="glass-card p-6 glow-hover group">
              <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl mb-6 flex items-center justify-center">
                <span className="text-4xl">🚀</span>
              </div>
              <h3 className="font-display text-xl font-bold mb-2 group-hover:gradient-text transition-all">{project.title}</h3>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-6">
                {project.stack.map((tech) => (<span key={tech} className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full">{tech}</span>))}
              </div>
              <div className="flex gap-3">
                <Button variant="outline" size="sm" className="flex-1" asChild><a href={project.github}><Github className="w-4 h-4 mr-2" />GitHub</a></Button>
                <Button size="sm" className="flex-1 bg-gradient-to-r from-primary to-accent" asChild><a href={project.live}><ExternalLink className="w-4 h-4 mr-2" />Live Demo</a></Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;