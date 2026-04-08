import { Shield, Smartphone, BarChart3, Layers } from "lucide-react";

const items = [
  { icon: Shield, text: "Cybersecurity & Ethical Hacking" },
  { icon: Smartphone, text: "Android Apps (Java + XML)" },
  { icon: Layers, text: "Flutter & Dart Development" },
  { icon: BarChart3, text: "Data Structures & Algorithms" },
];

const CurrentlyWorkingSection = () => {
  return (
    <section className="py-24 px-6">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Currently <span className="neon-text">Working On</span>
        </h2>
        <p className="text-muted-foreground text-center mb-12">⚡ What I'm focused on right now</p>

        <div className="flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.text} className="glass neon-border rounded-xl p-5 flex items-center gap-4 hover-lift">
              <div className="p-2.5 rounded-lg bg-neon-cyan/10">
                <item.icon className="text-neon-cyan" size={20} />
              </div>
              <span className="text-foreground font-medium">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Fun fact */}
        <div className="mt-12 glass neon-border rounded-xl p-6 text-center">
          <p className="text-lg mb-1">🎮 Fun Fact</p>
          <p className="text-muted-foreground">
            Loves travelling ✈️ and exploring new tech!
          </p>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyWorkingSection;
