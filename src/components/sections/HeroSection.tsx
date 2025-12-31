import { motion } from "framer-motion";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20"
    >
      {/* Background Gradient Blobs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-72 h-72 bg-primary/30 rounded-full blur-3xl animate-blob" />
        <div className="absolute top-1/3 -right-20 w-96 h-96 bg-accent/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
        <div className="absolute bottom-1/4 left-1/3 w-80 h-80 bg-primary/20 rounded-full blur-3xl animate-blob animation-delay-4000" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-primary font-medium mb-4"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-5xl md:text-6xl lg:text-7xl font-bold mb-4"
            >
              <span className="gradient-text text-glow">Atharva Kamble</span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl md:text-2xl text-muted-foreground mb-6"
            >
              Full Stack MERN Developer{" "}
              <span className="text-primary">|</span> Computer Science Student
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-muted-foreground max-w-xl mb-8 text-lg"
            >
              BTech Computer Science student passionate about building modern web
              applications using MERN stack. Turning ideas into elegant,
              functional solutions.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-primary-foreground glow-hover rounded-full px-8"
              >
                View Projects
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="rounded-full px-8 border-primary/50 hover:bg-primary/10"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass glow-hover"
              >
                <Github className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full glass glow-hover"
              >
                <Linkedin className="w-5 h-5" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1, y: -2 }}
                href="mailto:codebyatharva21@gmail.com"
                className="p-3 rounded-full glass glow-hover"
              >
                <Mail className="w-5 h-5" />
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0"
          >
            <div className="relative">
              {/* Glow effect behind image */}
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50 animate-pulse-slow" />
              
              {/* Image container with gradient border */}
              <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-1 bg-gradient-to-r from-primary to-accent">
                <div className="w-full h-full rounded-full bg-background flex items-center justify-center overflow-hidden">
                  {/* Placeholder avatar */}
                  <div className="w-full h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <span className="text-6xl md:text-8xl font-display font-bold gradient-text">
                      AK
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating decorations */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 w-12 h-12 bg-accent/80 rounded-lg rotate-12 flex items-center justify-center text-accent-foreground font-bold"
              >
                💻
              </motion.div>
              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -bottom-2 -left-4 w-10 h-10 bg-primary/80 rounded-lg -rotate-12 flex items-center justify-center"
              >
                ⚡
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="flex flex-col items-center gap-2 cursor-pointer"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-sm text-muted-foreground">Scroll Down</span>
            <ArrowDown className="w-5 h-5 text-primary" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;