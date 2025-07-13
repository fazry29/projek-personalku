import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Calendar } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Senior Full-Stack Developer",
      company: "TechCorp Indonesia",
      period: "2022 - Sekarang",
      type: "Full-time",
      responsibilities: [
        "Memimpin tim development untuk proyek-proyek enterprise dengan skala besar",
        "Mengembangkan dan maintain aplikasi web menggunakan React, Node.js, dan AWS",
        "Melakukan code review dan mentoring untuk junior developer",
        "Berkolaborasi dengan product manager dan designer untuk menghasilkan solusi terbaik",
        "Mengimplementasikan best practices dalam development dan deployment"
      ],
      achievements: [
        "Meningkatkan performa aplikasi hingga 40% melalui optimisasi kode",
        "Membantu onboarding 3 junior developer baru",
        "Berhasil menyelesaikan 15+ proyek client dengan tingkat kepuasan 98%"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Digital Solutions Studio",
      period: "2021 - 2022",
      type: "Full-time", 
      responsibilities: [
        "Mengembangkan custom web applications untuk berbagai industri",
        "Bekerja dengan teknologi stack modern: React, Vue.js, Express.js, MongoDB",
        "Berpartisipasi dalam planning sprint dan daily standup meetings",
        "Melakukan testing dan debugging untuk memastikan kualitas aplikasi",
        "Memberikan technical support dan maintenance untuk existing projects"
      ],
      achievements: [
        "Berhasil delivery 12 proyek tepat waktu dengan zero major bugs",
        "Mengurangi loading time aplikasi rata-rata 50% melalui optimisasi",
        "Mengembangkan component library yang digunakan oleh seluruh tim"
      ]
    },
    {
      title: "Frontend Developer",
      company: "StartupTech",
      period: "2020 - 2021",
      type: "Full-time",
      responsibilities: [
        "Mengembangkan user interface yang responsive dan user-friendly",
        "Berkolaborasi dengan UI/UX designer untuk implementasi design sistem",
        "Optimisasi performa website untuk mobile dan desktop",
        "Integrasi API backend dengan frontend menggunakan REST dan GraphQL",
        "Maintain dan update dokumentasi teknis proyek"
      ],
      achievements: [
        "Meningkatkan user engagement sebesar 35% melalui UI/UX improvements",
        "Implementasi progressive web app (PWA) yang meningkatkan retention rate",
        "Berkontribusi dalam peningkatan conversion rate landing page sebesar 25%"
      ]
    },
    {
      title: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2019 - 2020",
      type: "Freelance",
      responsibilities: [
        "Mengembangkan website custom untuk UKM dan startup lokal",
        "Memberikan konsultasi teknis untuk kebutuhan digital transformation",
        "Maintenance dan update website client secara berkala",
        "Melakukan SEO optimization untuk meningkatkan visibility online",
        "Training basic web development untuk client yang membutuhkan"
      ],
      achievements: [
        "Menyelesaikan 20+ proyek freelance dengan rating 5 bintang",
        "Membantu 5 UKM untuk go digital dan meningkatkan penjualan online",
        "Membangun network professional yang kuat di komunitas developer lokal"
      ]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Pengalaman Kerja
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Perjalanan karir saya dalam dunia web development, 
              dari freelancer hingga senior developer di perusahaan teknologi
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card key={index} className="border-0 shadow-custom-card hover:shadow-custom-hover transition-smooth">
                <CardContent className="p-8">
                  <div className="flex flex-col md:flex-row md:items-start gap-6">
                    {/* Company Icon */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-secondary rounded-full flex items-center justify-center">
                        <Briefcase className="w-8 h-8 text-secondary-foreground" />
                      </div>
                    </div>

                    {/* Experience Details */}
                    <div className="flex-grow">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                        <div>
                          <h3 className="text-xl font-semibold text-foreground mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-secondary font-medium">
                            {exp.company}
                          </p>
                        </div>
                        <div className="flex items-center gap-2 text-muted-foreground mt-2 sm:mt-0">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">
                            {exp.period} • {exp.type}
                          </span>
                        </div>
                      </div>

                      {/* Responsibilities */}
                      <div className="mb-6">
                        <h4 className="font-semibold text-foreground mb-3">
                          Tanggung Jawab:
                        </h4>
                        <ul className="space-y-2">
                          {exp.responsibilities.map((responsibility, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-secondary rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm leading-relaxed">
                                {responsibility}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="font-semibold text-foreground mb-3">
                          Pencapaian:
                        </h4>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-muted-foreground">
                              <span className="w-1.5 h-1.5 bg-accent-foreground rounded-full mt-2 flex-shrink-0"></span>
                              <span className="text-sm leading-relaxed font-medium">
                                {achievement}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Career Summary */}
          <div className="mt-16 text-center">
            <Card className="border-0 shadow-custom-card bg-secondary/10">
              <CardContent className="p-8">
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  Ringkasan Karir
                </h3>
                <div className="grid sm:grid-cols-3 gap-6">
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">4+</div>
                    <p className="text-muted-foreground">Tahun Pengalaman</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">50+</div>
                    <p className="text-muted-foreground">Proyek Selesai</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-secondary mb-2">98%</div>
                    <p className="text-muted-foreground">Client Satisfaction</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;