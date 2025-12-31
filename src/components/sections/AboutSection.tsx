import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { GraduationCap, Award, Code, Sparkles } from "lucide-react";

const AboutSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            About <span className="gradient-text">Me</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Get to know more about my background, education, and achievements
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Bio Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="glass-card p-8 glow-hover"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-16 h-16 rounded-full bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <Code className="w-8 h-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-2xl font-bold">Who I Am</h3>
                <p className="text-muted-foreground">Developer & Student</p>
              </div>
            </div>

            <p className="text-muted-foreground leading-relaxed mb-6">
              I am a <span className="text-primary font-medium">BTech Computer Science student</span> and 
              a <span className="text-accent font-medium">full stack MERN developer</span>. 
              My passion lies in creating modern, scalable web applications that solve real-world problems.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              With a strong foundation in both frontend and backend technologies, I enjoy 
              tackling complex challenges and continuously learning new technologies to 
              stay at the forefront of web development.
            </p>
          </motion.div>

          {/* Right Content - Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            {/* Education */}
            <div className="glass-card p-6 glow-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-primary/10">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold">Education</h4>
                    <p className="text-sm text-muted-foreground">Academic Background</p>
                  </div>
                </div>
                <div className="pl-14">
                  <h5 className="font-medium mb-1">B.Tech – Computer Engineering</h5>
                  <p className="text-muted-foreground text-sm">
                    Pune Vidyarthi Griha's College of Engineering
                  </p>
                </div>
              </div>
            </div>

            {/* Achievement */}
            <div className="glass-card p-6 glow-hover relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full blur-2xl" />
              <div className="relative">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 rounded-xl bg-accent/10">
                    <Award className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display text-lg font-semibold">Achievement</h4>
                    <p className="text-sm text-muted-foreground">Recognition</p>
                  </div>
                </div>
                <div className="pl-14">
                  <div className="flex items-center gap-2 mb-1">
                    <Sparkles className="w-4 h-4 text-yellow-500" />
                    <h5 className="font-medium">Top Finalist – MIT ADT Hackathon 2025</h5>
                  </div>
                  <p className="text-muted-foreground text-sm">
                    Selected for technical excellence in competitive programming challenge
                  </p>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 text-center"
              >
                <h4 className="font-display text-3xl font-bold gradient-text mb-1">5+</h4>
                <p className="text-muted-foreground text-sm">Projects Completed</p>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="glass-card p-6 text-center"
              >
                <h4 className="font-display text-3xl font-bold gradient-text mb-1">4+</h4>
                <p className="text-muted-foreground text-sm">Technologies Mastered</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;