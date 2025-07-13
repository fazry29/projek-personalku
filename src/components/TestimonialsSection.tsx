import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Budi Santoso",
      position: "CEO",
      company: "XYZ Retail",
      avatar: "BS",
      rating: 5,
      testimonial: "Fazry adalah developer yang sangat profesional dan detail. Platform e-commerce yang dia kembangkan berhasil meningkatkan penjualan online kami sebesar 35% dalam 3 bulan pertama. Komunikasinya sangat baik dan selalu memberikan update rutin tentang progress proyek.",
      project: "Platform E-commerce"
    },
    {
      name: "Sari Dewi",
      position: "Project Manager",
      company: "TechCorp Indonesia", 
      avatar: "SD",
      rating: 5,
      testimonial: "Fazry adalah anggota tim yang sangat berharga. Kemampuan teknisnya excellent, terutama dalam React dan Node.js. Dia juga sangat membantu dalam mentoring junior developer. Proyek-proyek yang dia handle selalu selesai tepat waktu dengan kualitas tinggi.",
      project: "Enterprise Web Applications"
    },
    {
      name: "Ahmad Rahman",
      position: "Founder",
      company: "EduTech Startup",
      avatar: "AR",
      rating: 5,
      testimonial: "Platform pembelajaran online yang dibuat Fazry sangat membantu startup kami. User interface-nya intuitif dan performa sistemnya sangat baik. Dalam bulan pertama saja kami sudah punya 1000+ siswa aktif. Highly recommended!",
      project: "Learning Management System"
    },
    {
      name: "Lisa Pratiwi",
      position: "Finance Manager", 
      company: "ABC Corporation",
      avatar: "LP",
      rating: 5,
      testimonial: "Sistem manajemen keuangan yang dikembangkan Fazry benar-benar mengubah cara kerja tim finance kami. Yang tadinya butuh 5 hari untuk buat laporan, sekarang bisa real-time. Dashboard-nya juga sangat user-friendly dan informatif.",
      project: "Financial Management System"
    },
    {
      name: "Denny Kurniawan",
      position: "Business Owner",
      company: "Local SME",
      avatar: "DK",
      rating: 5,
      testimonial: "Sebagai pemilik UKM, saya sangat terbantu dengan website yang dibuat Fazry. Desainnya modern, loading-nya cepat, dan yang paling penting penjualan online saya meningkat drastis. Fazry juga sabar dalam memberikan training cara maintenance website.",
      project: "Company Website & E-commerce"
    },
    {
      name: "Maya Sari",
      position: "UI/UX Designer",
      company: "Digital Solutions Studio",
      avatar: "MS",
      rating: 5,
      testimonial: "Collaboration dengan Fazry sangat menyenangkan. Dia memahami design requirements dengan baik dan implementasinya selalu pixel-perfect. Komunikasinya juga lancar, jadi proses development jadi lebih efisien.",
      project: "Multiple Web Applications"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Testimoni Klien
            </h2>
            <div className="w-24 h-1 bg-secondary mx-auto rounded-full mb-6"></div>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Apa kata klien dan rekan kerja tentang kualitas kerja dan 
              kolaborasi yang telah kami lakukan bersama
            </p>
          </div>

          {/* Testimonials Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="border-0 shadow-custom-card hover:shadow-custom-hover transition-smooth">
                <CardContent className="p-6">
                  {/* Quote Icon */}
                  <div className="flex justify-between items-start mb-4">
                    <Quote className="w-8 h-8 text-secondary opacity-50" />
                    <div className="flex gap-1">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                    "{testimonial.testimonial}"
                  </p>

                  {/* Project Info */}
                  <div className="mb-4">
                    <span className="text-xs px-2 py-1 bg-accent text-accent-foreground rounded-full">
                      {testimonial.project}
                    </span>
                  </div>

                  {/* Client Info */}
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-secondary rounded-full flex items-center justify-center">
                      <span className="font-semibold text-secondary-foreground text-sm">
                        {testimonial.avatar}
                      </span>
                    </div>
                    <div>
                      <div className="font-semibold text-foreground text-sm">
                        {testimonial.name}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-xs text-secondary font-medium">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Stats Section */}
          <div className="mt-16">
            <Card className="border-0 shadow-custom-card bg-primary text-primary-foreground">
              <CardContent className="p-8">
                <div className="grid sm:grid-cols-4 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold mb-2">50+</div>
                    <p className="text-primary-foreground/80 text-sm">Happy Clients</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">98%</div>
                    <p className="text-primary-foreground/80 text-sm">Satisfaction Rate</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">24/7</div>
                    <p className="text-primary-foreground/80 text-sm">Support Ready</p>
                  </div>
                  <div>
                    <div className="text-3xl font-bold mb-2">100%</div>
                    <p className="text-primary-foreground/80 text-sm">Project Delivered</p>
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

export default TestimonialsSection;