import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github } from "lucide-react";

const PortfolioSection = () => {
  const projects = [
    {
      title: "Platform E-commerce XYZ Retail",
      category: "Full-Stack Development",
      technologies: ["React", "Node.js", "MongoDB", "AWS"],
      image: "/api/placeholder/600/400",
      situation: "XYZ Retail, sebuah perusahaan retail yang sudah berdiri lama, ingin memperluas jangkauan ke e-commerce untuk menjangkau audiens yang lebih luas dan menyederhanakan proses penjualan mereka.",
      task: "Saya bertanggung jawab membangun komponen front-end dan back-end platform, memastikan integrasi yang lancar dengan sistem inventori dan pembayaran klien.",
      action: "Menggunakan React untuk front-end, saya merancang UI yang responsif dan intuitif dengan fokus pada user engagement dan navigasi yang mudah. Di back-end, saya mengembangkan RESTful API dengan Node.js dan MongoDB untuk manajemen data. Selain itu, saya mengintegrasikan platform dengan AWS untuk mengoptimalkan waktu loading dan menyiapkan CI/CD pipeline untuk deployment dan testing yang lebih cepat.",
      result: "Proyek selesai tepat waktu, menghasilkan peningkatan penjualan online sebesar 35% dalam tiga bulan pertama. Feedback pengguna menyoroti kecepatan dan kemudahan penggunaan situs, dan klien melaporkan pengurangan signifikan dalam tugas manajemen inventori manual.",
      demoUrl: "https://demo-ecommerce.example.com",
      githubUrl: "https://github.com/fazryakhmar/ecommerce-xyz"
    },
    {
      title: "Sistem Manajemen Keuangan ABC Corp",
      category: "Web Application",
      technologies: ["Vue.js", "Express.js", "PostgreSQL", "Docker"],
      image: "/api/placeholder/600/400",
      situation: "ABC Corp membutuhkan sistem internal untuk mengelola keuangan perusahaan yang dapat mengotomatisasi proses pembuatan laporan dan memberikan insight real-time tentang cash flow.",
      task: "Mengembangkan dashboard komprehensif dengan fitur pelacakan pengeluaran, pembuatan laporan otomatis, dan visualisasi data keuangan yang mudah dipahami.",
      action: "Membangun aplikasi single-page menggunakan Vue.js dengan interface yang clean dan intuitif. Backend dikembangkan dengan Express.js dan PostgreSQL untuk handling data keuangan yang kompleks. Implementasi sistem role-based access control untuk keamanan data dan deploy menggunakan Docker untuk konsistensi environment.",
      result: "Sistem berhasil mengurangi waktu pembuatan laporan keuangan dari 5 hari menjadi real-time, meningkatkan efisiensi tim finance sebesar 60%. Dashboard yang interaktif membantu manajemen dalam pengambilan keputusan finansial yang lebih cepat dan akurat.",
      demoUrl: "https://demo-finance.example.com",
      githubUrl: "https://github.com/fazryakhmar/finance-management"
    },
    {
      title: "Platform Edukasi Online EduTech",
      category: "Learning Management System",
      technologies: ["React", "Django", "MySQL", "Redis"],
      image: "/api/placeholder/600/400",
      situation: "Startup EduTech memerlukan platform pembelajaran online yang dapat mendukung video streaming, quiz interaktif, dan tracking progress siswa dengan performa yang optimal.",
      task: "Membangun LMS (Learning Management System) yang scalable dengan fitur video player custom, sistem quiz, dan analytics untuk instruktur.",
      action: "Menggunakan React untuk interface yang responsif dan Django REST Framework untuk backend API. Implementasi video streaming dengan optimisasi bandwidth, sistem caching dengan Redis untuk performa optimal, dan integrasi payment gateway untuk monetisasi course.",
      result: "Platform berhasil melayani 1000+ siswa aktif dalam bulan pertama dengan tingkat completion rate 78%. Fitur analytics membantu instruktur meningkatkan kualitas konten, dan sistem pembayaran yang terintegrasi meningkatkan conversion rate sebesar 25%.",
      demoUrl: "https://demo-edutech.example.com",
      githubUrl: "https://github.com/fazryakhmar/edutech-platform"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Portfolio Proyek
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Berikut adalah beberapa proyek yang telah saya kerjakan dengan 
              menggunakan pendekatan STAR method untuk memberikan gambaran yang jelas 
              tentang proses dan hasil yang dicapai
            </p>
          </div>

          {/* Projects Grid */}
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card key={index} className="border-0 shadow-custom-card hover:shadow-custom-hover transition-smooth overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid lg:grid-cols-2 gap-0">
                    {/* Project Image */}
                    <div className="bg-secondary/20 p-8 flex items-center justify-center min-h-[300px]">
                      <div className="text-center">
                        <div className="w-24 h-24 bg-secondary rounded-full flex items-center justify-center mx-auto mb-4">
                          <span className="text-2xl font-bold text-secondary-foreground">
                            {project.title.charAt(0)}
                          </span>
                        </div>
                        <h3 className="text-xl font-semibold text-foreground mb-2">
                          {project.title}
                        </h3>
                        <p className="text-muted-foreground mb-4">
                          {project.category}
                        </p>
                        <div className="flex flex-wrap gap-2 justify-center">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-accent text-accent-foreground rounded-full text-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Project Details */}
                    <div className="p-8">
                      <div className="space-y-4">
                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            Situasi
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.situation}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            Tugas
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.task}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            Aksi
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.action}
                          </p>
                        </div>

                        <div>
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                            Hasil
                          </h4>
                          <p className="text-sm text-muted-foreground leading-relaxed">
                            {project.result}
                          </p>
                        </div>

                        <div className="flex gap-4 pt-4">
                          <Button size="sm" variant="default" className="flex items-center gap-2">
                            <ExternalLink className="w-4 h-4" />
                            Live Demo
                          </Button>
                          <Button size="sm" variant="outline" className="flex items-center gap-2">
                            <Github className="w-4 h-4" />
                            Source Code
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* View More Projects */}
          <div className="text-center mt-12">
            <Button variant="secondary" size="lg" className="px-8">
              Lihat Semua Proyek
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioSection;