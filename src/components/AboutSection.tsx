import { GraduationCap, Shield, Smartphone, Brain } from "lucide-react";

const items = [
  {
    icon: GraduationCap,
    title: "B.Tech CSE (AI)",
    desc: "Student at GIFT Autonomous, Bhubaneswar",
  },
  {
    icon: Shield,
    title: "Cybersecurity & Ethical Hacking",
    desc: "Passionate about securing digital infrastructure",
  },
  {
    icon: Smartphone,
    title: "Android Developer",
    desc: "Building apps with Java + XML & Firebase",
  },
  {
    icon: Brain,
    title: "AI & ML Enthusiast",
    desc: "Exploring artificial intelligence in CSE curriculum",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          About <span className="neon-text">Me</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A driven CSE (AI) student with a passion for cybersecurity, app development, and building real-world solutions.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {items.map((item) => (
            <div
              key={item.title}
              className="glass neon-border rounded-xl p-6 hover-lift group"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                  <item.icon className="text-neon-cyan" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-foreground mb-1">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
