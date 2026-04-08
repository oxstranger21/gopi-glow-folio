import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";
import profilePic from "@/assets/profile.jpeg";

const roles = [
  "Cybersecurity Enthusiast 🔐",
  "Android Developer 📱",
  "CSE (AI) Student 🤖",
  "Ethical Hacker 🛡️",
];

const HeroSection = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting) {
      if (text.length < current.length) {
        timeout = setTimeout(() => setText(current.slice(0, text.length + 1)), 80);
      } else {
        timeout = setTimeout(() => setDeleting(true), 2000);
      }
    } else {
      if (text.length > 0) {
        timeout = setTimeout(() => setText(text.slice(0, -1)), 40);
      } else {
        setDeleting(false);
        setRoleIndex((prev) => (prev + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeout);
  }, [text, deleting, roleIndex]);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img src={heroBg} alt="" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full bg-neon-blue/10 blur-[100px] animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 rounded-full bg-neon-cyan/10 blur-[120px] animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-40 h-40 rounded-full bg-neon-aqua/10 blur-[80px] animate-pulse-glow" />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Profile Picture */}
        <div className="mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.1s" }}>
          <div className="w-36 h-36 md:w-44 md:h-44 mx-auto rounded-full overflow-hidden border-[3px] border-neon-cyan/60 shadow-[0_0_30px_hsl(var(--neon-cyan)/0.3)] hover:shadow-[0_0_50px_hsl(var(--neon-cyan)/0.5)] transition-shadow duration-300">
            <img src={profilePic} alt="Gopi Kumar" className="w-full h-full object-cover" style={{ objectPosition: "center calc(50% - 2px)" }} />
          </div>
        </div>

        <p className="text-neon-cyan font-mono text-sm mb-4 animate-fade-in opacity-0" style={{ animationDelay: "0.2s" }}>
          &lt;Hello World /&gt;
        </p>

        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 animate-fade-in opacity-0" style={{ animationDelay: "0.4s" }}>
          Hey 👋, I'm{" "}
          <span className="neon-text">Gopi Kumar</span>
        </h1>

        <div className="h-10 mb-8 animate-fade-in opacity-0" style={{ animationDelay: "0.6s" }}>
          <span className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-mono">
            {text}
            <span className="inline-block w-[2px] h-6 bg-neon-cyan ml-1 animate-pulse" />
          </span>
        </div>

        <p className="text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-10 animate-fade-in opacity-0" style={{ animationDelay: "0.8s" }}>
          🔐 Cybersecurity | 📱 Android Developer | 🤖 CSE (AI) Student
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in opacity-0" style={{ animationDelay: "1s" }}>
          <Button variant="neon" size="lg" asChild>
            <a href="#projects">
              <ArrowDown size={18} />
              View Projects
            </a>
          </Button>
          <Button variant="neon-outline" size="lg" asChild>
            <a href="#contact">
              <Mail size={18} />
              Contact Me
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
