import './Research.css';

export default function Research() {
  const research = [
    {
      title: "Predictive Models for Power Grid Optimization",
      description: "Researching ML-based approaches to predict power outages and optimize grid efficiency",
      status: "In Progress",
      keywords: ["Machine Learning", "Data Science", "Deep Learning"],
    },
    {
      title: "Real-time Anomaly Detection in Distributed Systems",
      description: "Developing algorithms for detecting anomalies in distributed computing environments",
      status: "In Progress",
      keywords: ["Distributed Systems", "Anomaly Detection", "Time Series"],
    },
  ];

  return (
    <section id="research">
      <div className="section-container">
        <h2 className="section-title">Research & Publications</h2>

        <div className="research-grid">
          {research.map((paper, idx) => (
            <div key={idx} className="research-card">
              <div className="research-header">
                <h3 className="research-title">{paper.title}</h3>
                <span className={`research-status ${paper.status.toLowerCase().replace(' ', '-')}`}>
                  {paper.status}
                </span>
              </div>
              <p className="research-desc">{paper.description}</p>
              <div className="research-keywords">
                {paper.keywords.map((keyword, i) => (
                  <span key={i} className="keyword-tag">{keyword}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
