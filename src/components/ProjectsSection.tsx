import { ExternalLink, Github, Star, MessageSquare, Gamepad2, BookOpen, Code, Play } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    title: "TalkHub",
    subtitle: "Secure Chat App",
    highlight: "🚀 Flagship Project",
    description: "A real-time secure chat application with modern UI and Firebase backend. Features user authentication, real-time messaging, profile system, image sharing, likes, comments, and social features.",
    tech: ["Java", "XML", "Firebase"],
    icon: MessageSquare,
    features: ["Real-time Messaging", "User Auth", "Image Sharing", "Social Features"],
    github: "#",
  },
  {
    title: "Quiz App",
    subtitle: "Firebase-based Quiz Platform",
    highlight: "📱 Android App",
    description: "Android quiz app where users can create and attempt quizzes. Stores and retrieves data from Firebase Realtime Database with dynamic quiz listing.",
    tech: ["Java", "Firebase", "XML"],
    icon: Gamepad2,
    features: ["Create Quizzes", "Firebase RTDB", "Dynamic Listing"],
    github: "#",
  },
  {
    title: "Kids Learning App",
    subtitle: "Flutter-Based Educational App",
    highlight: "⭐ Cross-Platform App",
    description: "Educational app for children with interactive UI featuring alphabet learning (A–Z), numbers and counting, and basic math operations including addition, subtraction, multiplication, and division with a kid-friendly colorful interface.",
    tech: ["Flutter", "Dart"],
    icon: BookOpen,
    features: ["Alphabet Learning (A–Z)", "Numbers & Counting", "Basic Math (+-×÷)", "Kid-Friendly UI"],
    github: "#",
  },
  {
    title: "Dart Practice",
    subtitle: "Dart Programming Repository",
    highlight: "💻 Learning Repo",
    description: "Collection of Dart programming concepts and examples covering variables, OOP concepts, functions, and collections.",
    tech: ["Dart"],
    icon: Code,
    features: ["OOP Concepts", "Collections", "Functions"],
    github: "#",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-6 relative">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-neon-cyan/5 blur-[150px] pointer-events-none" />

      <div className="container mx-auto max-w-6xl relative">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          My <span className="neon-text">Projects</span>
        </h2>
        <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-16">
          A showcase of my work — from real-time chat apps to educational platforms.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, i) => (
            <div
              key={project.title}
              className="glass neon-border rounded-2xl overflow-hidden hover-lift group"
              style={{ animationDelay: `${i * 0.1}s` }}
            >
              {/* Header */}
              <div className="p-6 pb-0">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-neon-cyan/10 group-hover:bg-neon-cyan/20 transition-colors">
                      <project.icon className="text-neon-cyan" size={22} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                      <p className="text-xs text-muted-foreground">{project.subtitle}</p>
                    </div>
                  </div>
                  <span className="text-xs font-mono px-3 py-1 rounded-full bg-neon-cyan/10 text-neon-cyan border border-neon-cyan/20">
                    {project.highlight}
                  </span>
                </div>
              </div>

              {/* Body */}
              <div className="px-6 pb-6">
                <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.features.map((f) => (
                    <span
                      key={f}
                      className="text-xs px-2.5 py-1 rounded-md bg-secondary text-secondary-foreground"
                    >
                      {f}
                    </span>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-md border border-neon-cyan/20 text-neon-cyan/80"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  <Button variant="neon-outline" size="sm" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-neon-cyan">
                    <ExternalLink size={14} />
                    Demo
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
