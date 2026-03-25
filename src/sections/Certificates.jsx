import './Certificates.css';

export default function Certificates() {
  const certificates = [
    {
      name: "UAT (Understand, Apply and Test Yourself) for Interview",
      issuer: "Software Testing Training",
      date: "2024",
      link: "#",
      description: "Completed hands-on training in software testing concepts including test case design, validation techniques, and real-world application of UAT in development workflows.",
    },
    {
      name: "Build Generative AI Apps and Solutions with No-Code Tools",
      issuer: "Udemy",
      date: "Aug 2025",
      link: "#",
      image: "/udemy-generative-ai-no-code-certificate.png.png",
      description: "Completed practical Udemy training focused on building generative AI apps and solutions using no-code tools and modern AI workflows.",
    },
    {
      name: "C Programming Bootcamp – The Complete C Language Course",
      issuer: "Udemy",
      date: "2024",
      link: "#",
      image: "/udemy-c-certificate.png",
      description: "Mastered core C programming concepts including memory management, pointers, data structures, and problem-solving techniques.",
    },
    {
      name: "Programming with Generative AI",
      issuer: "NPTEL (IISc Bangalore, Skill India)",
      date: "Aug - Oct 2025",
      link: "#",
      image: "/nptel-certificate.png",
      description: "Earned NPTEL certificate with consolidated score 49% (Online Assignments 10/25, Proctored Exam 38.7/75).",
    },
    {
      name: "BinaryBlitz Web Hackathon",
      issuer: "BinaryBlitz",
      date: "March 2024",
      link: "#", // replace with actual certificate URL if available
      image: "/certificate-binaryblitz.png",
      description: "Certificate of Achievement for participation and innovation in web development",
    },
  ];

  return (
    <section id="certificates">
      <div className="section-container">
        <h2 className="section-title">Certificates</h2>

        <div className="certificates-grid">
          {certificates.map((cert, idx) => (
            <div key={idx} className="certificate-card">
              {cert.image && (
                <img
                  className="cert-image"
                  src={cert.image}
                  alt={`${cert.name} certificate`}
                />
              )}
              <div className="cert-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
                </svg>
              </div>
              <h3 className="cert-name">{cert.name}</h3>
              <p className="cert-issuer">{cert.issuer}</p>
              <p className="cert-date">{cert.date}</p>
              {cert.description && <p className="cert-description">{cert.description}</p>}
              <a href={cert.link} className="cert-link">
                View Certificate →
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
