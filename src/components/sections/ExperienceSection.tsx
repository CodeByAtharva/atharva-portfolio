import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

const experiences = [
  {
    title: "Student Intern – Agentic AI Development",
    company: "Ongoing",
    period: "Dec 2025 – Feb 2026",
    description: "Working on agentic AI systems and autonomous agent development",
    current: true,
  },
  {
    title: "Technical Member – TEDx Committee",
    company: "PVGCOET",
    period: "July 2025 – Present",
    description: "Contributing to technical operations and web development for TEDx events",
    current: true,
  },
  {
    title: "Student Intern – Back-End Web Development",
    company: "Internship",
    period: "Mar 2025 – Apr 2025",
    description: "Developed backend services and APIs using Node.js and Express",
    current: false,
  },
  {
    title: "Android Development Internship",
    company: "Internship",
    period: "Jan 2023 – Jul 2023",
    description: "Built mobile applications and learned Android development fundamentals",
    current: false,
  },
];

const ExperienceSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            My <span className="gradient-text">Experience</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A journey through my professional experiences and roles
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-3xl mx-auto relative">
          {/* Vertical Line */}
          <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-accent to-primary/20 transform md:-translate-x-1/2" />

          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              className={`relative mb-8 md:mb-12 ${
                index % 2 === 0
                  ? "md:pr-1/2 md:text-right"
                  : "md:pl-1/2 md:ml-auto"
              }`}
            >
              <div
                className={`ml-8 md:ml-0 ${
                  index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                }`}
              >
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="glass-card p-6 glow-hover relative overflow-hidden"
                >
                  {/* Current badge */}
                  {exp.current && (
                    <div className="absolute top-4 right-4">
                      <span className="px-2 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                        Current
                      </span>
                    </div>
                  )}

                  {/* Icon */}
                  <div
                    className={`flex items-center gap-3 mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <div className="p-2 rounded-lg bg-primary/10">
                      <Briefcase className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="font-display font-semibold text-lg">
                      {exp.title}
                    </h3>
                  </div>

                  <p className="text-primary font-medium mb-2">{exp.company}</p>

                  <div
                    className={`flex items-center gap-2 text-muted-foreground text-sm mb-3 ${
                      index % 2 === 0 ? "md:justify-end" : ""
                    }`}
                  >
                    <Calendar className="w-4 h-4" />
                    <span>{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground text-sm">
                    {exp.description}
                  </p>
                </motion.div>
              </div>

              {/* Timeline dot */}
              <motion.div
                initial={{ scale: 0 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: index * 0.15 + 0.3 }}
                className={`absolute left-0 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-primary to-accent transform -translate-x-1/2 ${
                  exp.current ? "ring-4 ring-primary/30 animate-pulse-slow" : ""
                }`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;