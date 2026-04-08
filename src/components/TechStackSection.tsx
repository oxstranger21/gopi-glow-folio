import { Code, Smartphone, Server, Wrench } from "lucide-react";

const categories = [
  {
    title: "Languages",
    icon: Code,
    items: ["Java", "Python", "C", "Dart", "HTML", "CSS"],
  },
  {
    title: "App Development",
    icon: Smartphone,
    items: ["Android Studio", "Flutter", "Firebase"],
  },
  {
    title: "Backend & Database",
    icon: Server,
    items: ["Node.js", "NestJS", "MongoDB", "PostgreSQL"],
  },
  {
    title: "Tools",
    icon: Wrench,
    items: ["Linux", "VS Code", "Figma", "Git", "GitHub"],
  },
];

const TechStackSection = () => {
  return (
    <section id="techstack" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Tech <span className="neon-text">Stack</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          Technologies and tools I work with on a daily basis.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <div key={cat.title} className="glass neon-border rounded-xl p-6 hover-lift">
              <div className="flex items-center gap-3 mb-5">
                <div className="p-2 rounded-lg bg-neon-cyan/10">
                  <cat.icon className="text-neon-cyan" size={20} />
                </div>
                <h3 className="font-semibold text-foreground">{cat.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {cat.items.map((item) => (
                  <span
                    key={item}
                    className="text-xs font-mono px-3 py-1.5 rounded-lg bg-secondary text-secondary-foreground border border-border hover:border-neon-cyan/30 hover:text-neon-cyan transition-colors cursor-default"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStackSection;
