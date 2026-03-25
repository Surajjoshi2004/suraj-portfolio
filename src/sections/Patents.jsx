import './Patents.css';

export default function Patents() {
  const patents = [
    {
      title: "Patent Pending: AI-Based Power Outage Prediction System",
      applicationNo: "Application #: 202X-XXXX",
      filedDate: "2024",
      status: "Pending",
      description: "A machine learning system for predicting power grid failures using historical data and environmental factors",
    },
  ];

  return (
    <section id="patents">
      <div className="section-container">
        <h2 className="section-title">Patents</h2>

        <div className="patents-container">
          {patents.map((patent, idx) => (
            <div key={idx} className="patent-card">
              <div className="patent-badge">{patent.status}</div>
              <h3 className="patent-title">{patent.title}</h3>
              <div className="patent-meta">
                <p className="patent-app-no">{patent.applicationNo}</p>
                <p className="patent-date">Filed: {patent.filedDate}</p>
              </div>
              <p className="patent-desc">{patent.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
