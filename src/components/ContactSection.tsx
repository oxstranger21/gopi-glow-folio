import { Mail, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const socials = [
  {
    icon: Mail,
    label: "Email",
    value: "gopi2023@gift.edu.in",
    href: "mailto:gopi2023@gift.edu.in",
  },
  {
    icon: Linkedin,
    label: "LinkedIn",
    value: "Gopi Kumar",
    href: "https://linkedin.com/in/gopikumar",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "gopikumar",
    href: "https://github.com/gopikumar",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-6 relative">
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] rounded-full bg-neon-blue/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-4xl relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Get In <span className="neon-text">Touch</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-16">
          Feel free to reach out for collaboration, opportunities, or just to say hi!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              className="glass neon-border rounded-xl p-6 text-center hover-lift group block"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-xl bg-neon-cyan/10 group-hover:bg-neon-cyan/20 group-hover:neon-glow transition-all duration-300">
                  <s.icon className="text-neon-cyan" size={24} />
                </div>
              </div>
              <p className="font-semibold text-foreground mb-1">{s.label}</p>
              <p className="text-sm text-muted-foreground">{s.value}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
