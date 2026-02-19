import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, MapPin, TrendingUp, Sparkles } from "lucide-react";

const experiences = [
  {
    title: "Student Intern – Agentic AI Development",
    company: "Internship",
    location: "Remote",
    period: "Dec 2025 – Feb 2026",
    description: "Working on agentic AI systems and autonomous agent development, implementing cutting-edge machine learning solutions and intelligent automation frameworks",
    current: false,
    color: "blue"
  },
  {
    title: "Technical Member – TEDx Committee",
    company: "PVGCOET",
    location: "Pune, India",
    period: "July 2025 – Present",
    description: "Contributing to technical operations and web development for TEDx events, managing digital infrastructure and creating engaging web experiences",
    current: true,
    color: "purple"
  },
  {
    title: "Student Intern – Back-End Web Development",
    company: "Internship",
    location: "Remote",
    period: "Mar 2025 – Apr 2025",
    description: "Developed backend services and APIs using Node.js and Express, implementing RESTful architectures and database optimization strategies",
    current: false,
    color: "cyan"
  },
  {
    title: "Android Development Internship",
    company: "Internship",
    location: "Sangali, Maharashtra",
    period: "Jan 2023 – Jul 2023",
    description: "Built mobile applications and learned Android development fundamentals, working with Java and modern Android SDK features",
    current: false,
    color: "green"
  },
];

const getColorClasses = (color) => {
  const colors = {
    blue: {
      accent: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/30",
      glow: "shadow-blue-500/20",
      gradient: "from-blue-500 to-cyan-500"
    },
    purple: {
      accent: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/30",
      glow: "shadow-purple-500/20",
      gradient: "from-purple-500 to-pink-500"
    },
    cyan: {
      accent: "text-cyan-400",
      bg: "bg-cyan-500/10",
      border: "border-cyan-500/30",
      glow: "shadow-cyan-500/20",
      gradient: "from-cyan-500 to-blue-500"
    },
    green: {
      accent: "text-green-400",
      bg: "bg-green-500/10",
      border: "border-green-500/30",
      glow: "shadow-green-500/20",
      gradient: "from-green-500 to-emerald-500"
    }
  };
  return colors[color];
};

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative overflow-hidden" ref={ref}>
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -left-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
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
            <div className="px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 backdrop-blur-sm">
              <span className="text-purple-400 font-semibold text-sm">EXPERIENCE</span>
            </div>
          </motion.div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            My Professional{" "}
            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Journey
            </span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional experiences, internships, and roles that shaped my career
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="max-w-5xl mx-auto">
          <div className="space-y-8">
            {experiences.map((exp, index) => {
              const colors = getColorClasses(exp.color);
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.15 }}
                  className="relative"
                >
                  <motion.div
                    whileHover={{ scale: 1.01, y: -2 }}
                    className={`bg-gray-800/40 backdrop-blur-xl border border-gray-700/50 rounded-2xl p-6 md:p-8 shadow-xl hover:${colors.glow} transition-all duration-500 group`}
                  >
                    <div className="flex flex-col md:flex-row md:items-start gap-6">
                      {/* Left Side - Icon & Timeline */}
                      <div className="flex md:flex-col items-start gap-4 md:gap-3">
                        <motion.div 
                          whileHover={{ rotate: 360, scale: 1.1 }}
                          transition={{ duration: 0.6 }}
                          className={`p-4 rounded-xl bg-gradient-to-br ${colors.gradient} shadow-lg ${colors.glow} flex-shrink-0`}
                        >
                          <Briefcase className="w-6 h-6 text-white" />
                        </motion.div>
                        
                        {/* Timeline connector for mobile */}
                        {index < experiences.length - 1 && (
                          <div className="hidden md:block w-0.5 h-16 bg-gradient-to-b from-gray-600 to-transparent mx-auto" />
                        )}
                      </div>

                      {/* Right Side - Content */}
                      <div className="flex-1 min-w-0">
                        {/* Header with Current Badge */}
                        <div className="flex items-start justify-between gap-4 mb-3">
                          <div className="flex-1 min-w-0">
                            <h3 className="font-display font-bold text-xl md:text-2xl text-white mb-2 leading-tight">
                              {exp.title}
                            </h3>
                            <div className="flex flex-wrap items-center gap-3">
                              <p className={`${colors.accent} font-semibold text-base`}>
                                {exp.company}
                              </p>
                              {exp.current && (
                                <div className={`px-3 py-1 text-xs font-semibold ${colors.bg} ${colors.accent} rounded-full border ${colors.border} flex items-center gap-1.5`}>
                                  <Sparkles className="w-3 h-3" />
                                  Current
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Meta Info */}
                        <div className="flex flex-wrap items-center gap-4 mb-4">
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <Calendar className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.period}</span>
                          </div>
                          <div className="flex items-center gap-2 text-gray-400 text-sm">
                            <MapPin className="w-4 h-4 flex-shrink-0" />
                            <span>{exp.location}</span>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-gray-300 text-sm md:text-base leading-relaxed">
                          {exp.description}
                        </p>
                      </div>
                    </div>

                    {/* Hover Gradient Effect */}
                    <div className={`absolute inset-0 ${colors.bg} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none`} />
                  </motion.div>
                </motion.div>
              );
            })}
          </div>

          {/* End indicator */}
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ delay: experiences.length * 0.15 + 0.3 }}
            className="flex justify-center mt-12"
          >
            <div className="flex flex-col items-center gap-3">
              <motion.div
                animate={{ 
                  rotate: 360,
                  scale: [1, 1.1, 1]
                }}
                transition={{ 
                  rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                  scale: { duration: 2, repeat: Infinity, ease: "easeInOut" }
                }}
                className="w-16 h-16 rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 flex items-center justify-center shadow-lg shadow-blue-500/30"
              >
                <TrendingUp className="w-8 h-8 text-white" />
              </motion.div>
              <p className="text-gray-400 text-sm font-medium">More to come...</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;