const experiences = [
  {
    period: "Aug 2022 — Mar 2025",
    role: "Senior Software Engineer",
    company: "Agiliad Technologies · Noida",
    description:
      "Led end-to-end development for Caterpillar display configuration systems using C/C++ and JavaScript. Designed a scalable ID management system, resolved production issues through root-cause analysis, and mentored developers.",
    technologies: ["C/C++", "JavaScript", "System Design", "Debugging"],
    current: false,
  },
  {
    period: "Mar 2021 — Apr 2022",
    role: "Application Developer / Consultant",
    company: "L&T Infotech · Bangalore",
    description:
      "Supported an enterprise migration from JDE to SAP, built Node.js authentication and encryption functionality, developed React components, and optimized SQL queries for application performance.",
    technologies: ["JDE", "SAP", "Node.js", "React", "SQL"],
    current: false,
  },
  {
    period: "Nov 2018 — Sept 2020",
    role: "Application Developer",
    company: "Oracle · Bangalore",
    description:
      "Resolved critical production and performance issues through debugging, log analysis, and root-cause investigation. Worked on Oracle ADF applications, AIS V2 upgrades, enterprise enhancements, and customer escalations.",
    technologies: ["Oracle ADF", "AIS V2", "Debugging", "Production Support"],
    current: false,
  },
  {
    period: "Jul 2018 — Nov 2018",
    role: "Trainee Engineer",
    company: "Cattleya Technosys · Bangalore",
    description:
      "Built machine-learning security automation systems and implemented YOLO for real-time detection of humans, helmets, and weapons in computer-vision applications.",
    technologies: ["Machine Learning", "YOLO", "Computer Vision", "Python"],
    current: false,
  },
  {
    period: "Jan 2018 — Apr 2018",
    role: "Intern",
    company: "Indian Institute of Remote Sensing · Dehradun",
    description:
      "Developed Python tools for hyperspectral data processing, applied PCA, MNF, and K-means clustering, and built multidimensional visualization tools for satellite imagery.",
    technologies: ["Python", "PCA", "MNF", "K-means", "Data Visualization"],
    current: false,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/4 w-96
       h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
           font-medium tracking-wider uppercase animate-fade-in"
          >
            Professional Experience
          </span>
          <h2
            className="text-4xl md:text-5xl font-bold
           mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Experience that{" "}
            <span className="font-serif italic font-normal text-white">
              {" "}
              speaks volumes.
            </span>
          </h2>

          <p
            className="text-muted-foreground
           animate-fade-in animation-delay-200"
          >
            A timeline of my experience across enterprise software, application
            development, debugging, and machine learning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          <div className="timeline-glow absolute left-0 md:left-1/2 top-0 bottom-0 w-[2px] bg-gradient-to-b from-primary/70 via-primary/30 to-transparent md:-translate-x-1/2 shadow-[0_0_25px_rgba(32,178,166,0.8)]" />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 150}ms` }}
              >
                {/* Timeline Dot */}
                <div className="absolute left-0 md:left-1/2 top-0 w-3 h-3 bg-primary rounded-full -translate-x-1/2 ring-4 ring-background z-10">
                  {exp.current && (
                    <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                  )}
                </div>

                {/* Content */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-16 md:text-right"
                      : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className={`glass p-6 rounded-2xl border border-primary/30 hover:border-primary/50 transition-all duration-500`}
                  >
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>
                    <p className="text-muted-foreground">{exp.company}</p>
                    <p className="text-sm text-muted-foreground mt-4">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 mt-4 ${
                        idx % 2 === 0 ? "md:justify-end" : ""
                      }`}
                    >
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface text-xs rounded-full text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
