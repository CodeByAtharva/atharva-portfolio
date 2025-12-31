import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Globe, Server, Zap } from "lucide-react";

const services = [
  { icon: Globe, title: "Full-Stack Web Development", description: "End-to-end web application development" },
  { icon: Code, title: "Modern Responsive Websites", description: "Beautiful, mobile-first web designs" },
  { icon: Zap, title: "MERN Stack Development", description: "MongoDB, Express, React, Node.js solutions" },
  { icon: Server, title: "Backend/API Development", description: "RESTful APIs and backend integrations" },
];

const ServicesSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="services" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">My <span className="gradient-text">Services</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">What I can help you build</p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {services.map((service, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} whileHover={{ scale: 1.05 }} className="glass-card p-6 text-center glow-hover group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent opacity-0 group-hover:opacity-10 transition-opacity" />
              <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-gradient-to-r from-primary to-accent flex items-center justify-center">
                <service.icon className="w-7 h-7 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold mb-2">{service.title}</h3>
              <p className="text-muted-foreground text-sm">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;