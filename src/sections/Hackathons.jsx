import './Hackathons.css';

export default function Hackathons() {
  const hackathons = [
    {
      name: "TechFight 2024",
      role: "Winner - ML Track",
      date: "March 2024",
      prize: "Prize Money & Recognition",
      achievement: "Developed AI-powered solution for real-time data analysis",
    },
    {
      name: "Code Storm 2023",
      role: "Finalist",
      date: "November 2023",
      achievement: "Built full-stack web application in 24 hours",
    },
    {
      name: "DevOps Challenge 2023",
      role: "Participant",
      date: "August 2023",
      achievement: "Deployed containerized applications on cloud platforms",
    },
    {
      name: "BinaryBlitz Web Hackathon",
      role: "Participant",
      date: "March 2024",
      achievement: "Built an innovative web platform and earned certificate of achievement",
    },
  ];

  return (
    <section id="hackathons">
      <div className="section-container">
        <h2 className="section-title">Hackathons</h2>

        <div className="hackathons-grid">
          {hackathons.map((hackathon, idx) => (
            <div key={idx} className="hackathon-card">
              <div className="hackathon-badge">{hackathon.role}</div>
              <h3 className="hackathon-name">{hackathon.name}</h3>
              <p className="hackathon-date">{hackathon.date}</p>
              {hackathon.prize && (
                <p className="hackathon-prize">🏆 {hackathon.prize}</p>
              )}
              <p className="hackathon-achievement">{hackathon.achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
