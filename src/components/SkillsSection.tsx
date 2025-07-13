import { Card, CardContent } from "@/components/ui/card";

const SkillsSection = () => {
  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML & CSS", icon: "🌐" },
        { name: "JavaScript", icon: "⚡" },
        { name: "TypeScript", icon: "📘" },
        { name: "React.js", icon: "⚛️" },
        { name: "Vue.js", icon: "💚" },
        { name: "Tailwind CSS", icon: "🎨" }
      ]
    },
    {
      title: "Backend Development", 
      skills: [
        { name: "Node.js", icon: "🟢" },
        { name: "Express.js", icon: "🚀" },
        { name: "Python", icon: "🐍" },
        { name: "Django", icon: "🎸" },
        { name: "REST APIs", icon: "🔌" },
        { name: "GraphQL", icon: "📊" }
      ]
    },
    {
      title: "Database & DevOps", 
      skills: [
        { name: "MongoDB", icon: "🍃" },
        { name: "PostgreSQL", icon: "🐘" },
        { name: "MySQL", icon: "🐬" },
        { name: "Git", icon: "📝" },
        { name: "Docker", icon: "🐳" },
        { name: "AWS", icon: "☁️" }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Keahlian Teknis
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Teknologi dan tools yang saya kuasai untuk mengembangkan 
              aplikasi web modern dan scalable
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid lg:grid-cols-3 gap-8">
            {skillCategories.map((category, categoryIndex) => (
              <Card key={categoryIndex} className="border-0 shadow-custom-card hover:shadow-custom-hover transition-smooth">
                <CardContent className="p-8">
                  <h3 className="text-xl font-semibold text-foreground mb-6 text-center">
                    {category.title}
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div 
                        key={skillIndex}
                        className="flex flex-col items-center p-4 rounded-lg bg-accent/30 hover:bg-accent/50 transition-smooth cursor-pointer group"
                      >
                        <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                          {skill.icon}
                        </div>
                        <span className="text-sm font-medium text-foreground text-center">
                          {skill.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Skills */}
          <div className="mt-16 text-center">
            <h3 className="text-2xl font-semibold text-foreground mb-8">
              Tools & Metodologi
            </h3>
            
            <div className="flex flex-wrap justify-center gap-4">
              {["Agile/Scrum", "Testing (Jest)", "CI/CD", "Figma", "VS Code", "Postman", "Linux", "Nginx"].map((tool, index) => (
                <span 
                  key={index}
                  className="px-4 py-2 bg-secondary text-secondary-foreground rounded-full text-sm font-medium hover:scale-105 transition-transform cursor-default"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;