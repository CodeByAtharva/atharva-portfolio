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
      className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 md:pt-20 px-4 sm:px-6"
    >
      {/* Enhanced Background Gradient Blobs - Adjusted for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-10 sm:-left-20 w-64 sm:w-96 h-64 sm:h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '4s' }} />
        <div className="absolute top-1/3 -right-10 sm:-right-20 w-72 sm:w-[28rem] h-72 sm:h-[28rem] bg-purple-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '5s', animationDelay: '1s' }} />
        <div className="absolute bottom-1/4 left-1/3 w-60 sm:w-80 h-60 sm:h-80 bg-cyan-500/15 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: '6s', animationDelay: '2s' }} />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 md:gap-12 lg:gap-16">
          {/* Profile Image - Mobile First (Moved to top on mobile) */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-shrink-0 lg:order-2"
          >
            <div className="relative">
              {/* Animated Glow effect behind image */}
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 rounded-full blur-3xl"
              />

              {/* Image container with gradient border - Responsive sizing */}
              <div className="relative w-48 h-48 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full p-1 bg-gradient-to-br from-blue-500 via-purple-500 to-cyan-500 shadow-2xl">
                <div className="w-full h-full rounded-full bg-gray-900 overflow-hidden ring-2 sm:ring-4 ring-gray-900">
                  <img
                    src="pfp.jpeg"
                    alt="Atharva Kamble"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              {/* Floating decorations - Scaled for mobile */}
              <motion.div
                animate={{
                  y: [0, -15, 0],
                  rotate: [12, 18, 12]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -top-4 sm:-top-6 -right-4 sm:-right-6 w-10 h-10 sm:w-14 sm:h-14 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl rotate-12 flex items-center justify-center text-lg sm:text-2xl shadow-lg shadow-purple-500/50"
              >
                💻
              </motion.div>
              <motion.div
                animate={{
                  y: [0, 12, 0],
                  rotate: [-12, -18, -12]
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute -bottom-3 sm:-bottom-4 -left-4 sm:-left-6 w-9 h-9 sm:w-12 sm:h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl -rotate-12 flex items-center justify-center text-base sm:text-xl shadow-lg shadow-blue-500/50"
              >
                ⚡
              </motion.div>

              {/* Additional floating element */}
              <motion.div
                animate={{
                  y: [0, -10, 0],
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 3.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-1/2 -right-5 sm:-right-8 w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg rotate-45 flex items-center justify-center text-sm sm:text-lg shadow-lg shadow-cyan-500/50"
              >
                🚀
              </motion.div>
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 text-center lg:text-left max-w-2xl lg:order-1"
          >
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-blue-500 font-semibold mb-3 sm:mb-4 text-base sm:text-lg"
            >
              👋 Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 leading-tight"
            >
              <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                Atharva Kamble
              </span>
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-4 sm:mb-6 font-medium px-2 sm:px-0"
            >
              Full Stack MERN Developer{" "}
              <span className="text-blue-500">|</span> Computer Science Student
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-gray-400 max-w-xl mx-auto lg:mx-0 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed px-2 sm:px-0"
            >
              B.E. Computer Science student passionate about building modern web
              applications using MERN stack. Turning ideas into elegant,
              functional solutions.
            </motion.p>

            {/* CTA Buttons - Stacked on small mobile, side-by-side on larger */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col xs:flex-row flex-wrap gap-3 sm:gap-4 justify-center lg:justify-start mb-8 sm:mb-10"
            >
              <Button
                onClick={scrollToProjects}
                size="lg"
                className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white shadow-lg shadow-blue-500/30 hover:shadow-blue-500/50 transition-all duration-300 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-sm sm:text-base font-semibold w-full xs:w-auto"
              >
                View Projects
              </Button>
              <Button
                onClick={scrollToContact}
                variant="outline"
                size="lg"
                className="rounded-full px-6 sm:px-8 py-5 sm:py-6 border-2 border-blue-500/50 hover:bg-blue-500/10 hover:border-blue-500 text-sm sm:text-base font-semibold transition-all duration-300 w-full xs:w-auto"
              >
                Contact Me
              </Button>
            </motion.div>

            {/* Social Links - Responsive sizing */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
              className="flex gap-3 sm:gap-4 justify-center lg:justify-start"
            >
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://github.com/CodeByAtharva"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="p-2.5 sm:p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 shadow-lg"
              >
                <Github className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="https://www.linkedin.com/in/atharva-kamble-10685928b"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="p-2.5 sm:p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 shadow-lg"
              >
                <Linkedin className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.95 }}
                href="mailto:codebyatharva21@gmail.com"
                aria-label="Email Me"
                className="p-2.5 sm:p-3 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-blue-500/50 hover:bg-gray-800/80 transition-all duration-300 shadow-lg"
              >
                <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-gray-300" />
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator - Hidden on mobile, visible on tablet+ */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="absolute bottom-4 sm:bottom-8 left-1/2 -translate-x-1/2 hidden sm:block"
        >
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center gap-2 cursor-pointer group"
            onClick={() =>
              document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })
            }
          >
            <span className="text-xs sm:text-sm text-gray-400 group-hover:text-blue-400 transition-colors duration-300 font-medium">
              Scroll Down
            </span>
            <div className="p-2 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 group-hover:border-blue-500/50 transition-all duration-300">
              <ArrowDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-500" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;