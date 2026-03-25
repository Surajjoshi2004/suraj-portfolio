import './Achievements.css';

export default function Achievements() {
  const achievements = [
    {
      title: "Solved 400+ DSA Problems",
      organization: "LeetCode & HackerRank",
      date: "March 2024",
      description: "Completed 400+ Data Structures and Algorithms problems across multiple platforms",
      proofImage: "/leetcode-achievement-proof.png",
      proofLabel: "LeetCode profile proof",
    },
  ];

  return (
    <section id="achievements">
      <div className="section-container">
        <h2 className="section-title">Achievements & Awards</h2>

        <div className="achievements-timeline">
          {achievements.map((achievement, idx) => (
            <div key={idx} className="achievement-item">
              <div className="timeline-marker" />
              <div className="achievement-content">
                <div className="achievement-header">
                  <h3 className="achievement-title">{achievement.title}</h3>
                  <span className="achievement-date">{achievement.date}</span>
                </div>
                <p className="achievement-org">{achievement.organization}</p>
                <p className="achievement-desc">{achievement.description}</p>
                {achievement.proofImage && (
                  <div className="achievement-proof">
                    <p className="achievement-proof-label">{achievement.proofLabel}</p>
                    <img
                      className="achievement-proof-image"
                      src={achievement.proofImage}
                      alt={`${achievement.title} proof`}
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
