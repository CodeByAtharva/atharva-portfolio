import { Github, Linkedin, Mail, ArrowUp } from "lucide-react";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  const links = [
    {
      icon: Github,
      url: "https://github.com/CodeByAtharva/", // <-- Your GitHub link
      label: "GitHub Profile"
    },
    {
      icon: Linkedin,
      url: "https://www.linkedin.com/in/atharva-kamble-10685928b/", // <-- Your LinkedIn link
      label: "LinkedIn Profile"
    },
    {
      icon: Mail,
      url: "mailto:codebyatharva21@gmail.com", // <-- Your email address
      label: "Email Me"
    }
  ];

  return (
    <footer className="py-8 border-t border-border/50">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-sm">© 2025 Atharva Kamble. All rights reserved.</p>

          <div className="flex items-center gap-4">
            {links.map(({ icon: Icon, url, label }, i) => (
              <motion.a
                key={i}
                whileHover={{ scale: 1.1 }}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2 rounded-full glass glow-hover"
              >
                <Icon className="w-4 h-4" />
              </motion.a>
            ))}

            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="p-2 rounded-full bg-primary text-primary-foreground ml-4"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
