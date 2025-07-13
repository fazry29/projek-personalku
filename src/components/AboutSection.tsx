import { Card, CardContent } from "@/components/ui/card";
import { Code, Users, Clock, MessageSquare } from "lucide-react";

const AboutSection = () => {
  const coreValues = [
    {
      icon: Clock,
      title: "Tepat Waktu",
      description: "Selalu menyelesaikan proyek sesuai deadline yang disepakati"
    },
    {
      icon: Code,
      title: "Perhatian Detail",
      description: "Menulis kode yang bersih, terstruktur, dan mudah dipelihara"
    },
    {
      icon: MessageSquare,
      title: "Komunikasi Jelas",
      description: "Memberikan update rutin dan komunikasi yang transparan"
    },
    {
      icon: Users,
      title: "Kolaborasi Tim",
      description: "Bekerja sama efektif dengan designer, PM, dan developer lain"
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tentang Saya
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full"></div>
          </div>

          {/* Bio Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-foreground mb-4">
                Perjalanan Saya dalam Web Development
              </h3>
              
              <p className="text-muted-foreground leading-relaxed">
                Saya adalah seorang Full-Stack Web Developer dengan passion yang tinggi 
                dalam menciptakan solusi digital yang inovatif dan efisien. 
                Dengan pengalaman lebih dari 3 tahun di industri teknologi, 
                saya telah mengembangkan berbagai aplikasi web mulai dari 
                e-commerce, sistem manajemen, hingga platform edukasi.
              </p>
              
              <p className="text-muted-foreground leading-relaxed">
                Ketertarikan saya pada web development dimulai dari keinginan 
                untuk memecahkan masalah-masalah nyata melalui teknologi. 
                Saya senang mempelajari teknologi baru dan selalu berusaha 
                mengikuti perkembangan tren dalam dunia programming.
              </p>
              
              <div className="bg-accent p-4 rounded-lg">
                <h4 className="font-semibold text-accent-foreground mb-2">
                  Core Skills:
                </h4>
                <p className="text-accent-foreground">
                  JavaScript, TypeScript, React.js, Node.js, Express.js, 
                  MongoDB, PostgreSQL, REST APIs, Git, Docker
                </p>
              </div>
            </div>

            <div className="flex justify-center">
              <div className="w-80 h-80 bg-secondary rounded-full flex items-center justify-center shadow-custom-card">
                <div className="text-center text-secondary-foreground">
                  <Code className="w-24 h-24 mx-auto mb-4" />
                  <p className="text-lg font-medium">
                    3+ Tahun<br />
                    Pengalaman
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Values */}
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8 text-center">
              Nilai-Nilai Kerja Saya
            </h3>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {coreValues.map((value, index) => (
                <Card key={index} className="border-0 shadow-custom-card hover:shadow-custom-hover transition-smooth">
                  <CardContent className="p-6 text-center">
                    <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-8 h-8 text-secondary-foreground" />
                    </div>
                    <h4 className="font-semibold text-foreground mb-2">
                      {value.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;