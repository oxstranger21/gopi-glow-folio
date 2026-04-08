import { Github, GitBranch, Activity, Flame } from "lucide-react";

const GitHubSection = () => {
  return (
    <section id="github" className="py-24 px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          GitHub <span className="neon-text">Stats</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          My open-source contributions and coding activity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {[
            { icon: Flame, label: "Current Streak", value: "🔥 Active" },
            { icon: GitBranch, label: "Repositories", value: "10+" },
            { icon: Activity, label: "Contributions", value: "Growing" },
          ].map((stat) => (
            <div key={stat.label} className="glass neon-border rounded-xl p-6 text-center hover-lift">
              <div className="flex justify-center mb-3">
                <div className="p-3 rounded-xl bg-neon-cyan/10">
                  <stat.icon className="text-neon-cyan" size={24} />
                </div>
              </div>
              <p className="text-2xl font-bold neon-text mb-1">{stat.value}</p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* GitHub contribution graph placeholder */}
        <div className="glass neon-border rounded-xl p-8 text-center">
          <Github className="text-neon-cyan mx-auto mb-4" size={40} />
          <p className="text-muted-foreground mb-4">
            Check out my GitHub for the latest contributions and projects.
          </p>
          <a
            href="https://github.com/oxstranger21"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-neon-cyan hover:underline font-mono text-sm"
          >
            <Github size={16} />
            github.com/oxstranger21
          </a>
        </div>
      </div>
    </section>
  );
};

export default GitHubSection;
