import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const skills = [
  {
    name: "Next.js",
    icon: "⚡",
    color: "from-gray-900 to-gray-700 dark:from-white dark:to-gray-300",
    description: "React Framework",
  },
  {
    name: "Express.js",
    icon: "🚀",
    color: "from-green-500 to-emerald-600",
    description: "Backend Framework",
  },
  {
    name: "Node.js",
    icon: "💚",
    color: "from-green-600 to-green-800",
    description: "Runtime Environment",
  },
  {
    name: "DSA",
    icon: "🧠",
    color: "from-purple-500 to-pink-500",
    description: "Problem Solving",
  },
];

const SkillsSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section id="skills" className="py-24 relative" ref={ref}>
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/2 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Skills</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={itemVariants}
              whileHover={{ 
                scale: 1.05, 
                y: -10,
                transition: { duration: 0.2 }
              }}
              className="group"
            >
              <div className="glass-card p-6 h-full text-center relative overflow-hidden glow-hover">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${skill.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                {/* Icon */}
                <motion.div
                  whileHover={{ rotate: [0, -10, 10, 0] }}
                  transition={{ duration: 0.5 }}
                  className="text-5xl mb-4"
                >
                  {skill.icon}
                </motion.div>

                {/* Name */}
                <h3 className="font-display font-semibold text-lg mb-1 group-hover:gradient-text transition-all duration-300">
                  {skill.name}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm">
                  {skill.description}
                </p>

                {/* Bottom gradient line */}
                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${skill.color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300`} />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Additional Skills Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-3"
        >
          {["React", "JavaScript", "TypeScript", "MongoDB", "Tailwind CSS", "Git", "REST APIs", "Solidity"].map(
            (skill, index) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: 0.7 + index * 0.05 }}
                whileHover={{ scale: 1.1 }}
                className="px-4 py-2 glass rounded-full text-sm font-medium hover:bg-primary/10 hover:text-primary transition-colors cursor-default"
              >
                {skill}
              </motion.span>
            )
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;