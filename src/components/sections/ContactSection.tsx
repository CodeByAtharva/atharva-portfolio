import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Mail, Phone, Linkedin, Github, ExternalLink, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const ContactSection = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "Thank you for reaching out. I'll get back to you soon." });
    setFormData({ name: "", email: "", message: "" });
  };

  const contacts = [
    { icon: Mail, label: "codebyatharva21@gmail.com", href: "mailto:codebyatharva21@gmail.com" },
    { icon: Phone, label: "9552851437", href: "tel:+919552851437" },
    { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com" },
    { icon: Github, label: "GitHub", href: "https://github.com" },
    { icon: ExternalLink, label: "Codolio", href: "#" },
  ];

  return (
    <section id="contact" className="py-24 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">Get In <span className="gradient-text">Touch</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">Have a project in mind? Let's work together!</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
          <motion.form initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.2 }} onSubmit={handleSubmit} className="glass-card p-8 space-y-6">
            <Input placeholder="Your Name" value={formData.name} onChange={(e) => setFormData({ ...formData, name: e.target.value })} required className="bg-background/50" />
            <Input type="email" placeholder="Your Email" value={formData.email} onChange={(e) => setFormData({ ...formData, email: e.target.value })} required className="bg-background/50" />
            <Textarea placeholder="Your Message" value={formData.message} onChange={(e) => setFormData({ ...formData, message: e.target.value })} required rows={5} className="bg-background/50" />
            <Button type="submit" className="w-full bg-gradient-to-r from-primary to-accent"><Send className="w-4 h-4 mr-2" />Send Message</Button>
          </motion.form>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ delay: 0.3 }} className="space-y-4">
            {contacts.map((contact, index) => (
              <motion.a key={index} href={contact.href} target="_blank" rel="noopener noreferrer" whileHover={{ x: 10 }} className="flex items-center gap-4 p-4 glass-card glow-hover">
                <div className="p-3 rounded-xl bg-primary/10"><contact.icon className="w-5 h-5 text-primary" /></div>
                <span className="font-medium">{contact.label}</span>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;