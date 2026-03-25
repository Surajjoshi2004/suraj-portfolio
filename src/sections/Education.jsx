import './Education.css';

export default function Education() {
  const education = [
    {
      degree: 'Bachelor of Technology',
      field: 'Computer Science and Engineering',
      institution: 'Lovely Professional University (LPU)',
      location: 'Phagwara, Punjab',
      gpa: '7.92/10',
      duration: "Aug 2023 - Present",
      highlights: ['Data Structures', 'Algorithms', 'Machine Learning', 'Web Development'],
      status: 'Current',
    },
    {
      degree: 'Intermediate',
      field: 'PCM (Physics, Chemistry, Mathematics)',
      institution: 'Decent School',
      location: 'Kota, Rajasthan',
      percentage: '65.4%',
      duration: "Mar 2021 - May 2022",
      highlights: ['Physics', 'Chemistry', 'Mathematics'],
      status: 'Completed',
    },
    {
      degree: 'Matriculation',
      field: 'High School',
      institution: 'New Beersheba Public School',
      location: 'Pithoragarh, Uttarakhand',
      percentage: '91.4%',
      duration: "Mar 2019 - May 2020",
      highlights: ['Academic Excellence', 'Strong Fundamentals'],
      status: 'Completed',
    },
  ];

  return (
    <section id="education">
      <div className="section-container">
        <div className="education-heading reveal">
          <p className="section-label">05 - Education</p>
          <h2 className="section-title">Academic Journey</h2>
          <p className="education-intro">
            A strong foundation in computer science, analytical thinking, and practical problem
            solving that supports my work in machine learning and software development.
          </p>
        </div>

        <div className="education-grid">
          {education.map((edu, idx) => (
            <article key={idx} className="education-card reveal">
              <div className="education-marker">
                <span className="education-dot" />
              </div>

              <div className="education-main">
                <div className="edu-topbar">
                  <span className="edu-status">{edu.status}</span>
                  <span className="edu-duration">{edu.duration}</span>
                </div>

                <h3 className="edu-degree">{edu.degree}</h3>
                <p className="edu-field">{edu.field}</p>

                <div className="edu-meta">
                  <p className="edu-institution">{edu.institution}</p>
                  <p className="edu-location">{edu.location}</p>
                </div>

                <div className="edu-stats">
                  {edu.gpa && (
                    <div className="edu-stat-box">
                      <span className="label">CGPA</span>
                      <span className="value">{edu.gpa}</span>
                    </div>
                  )}
                  {edu.percentage && (
                    <div className="edu-stat-box">
                      <span className="label">Score</span>
                      <span className="value">{edu.percentage}</span>
                    </div>
                  )}
                </div>

                <div className="edu-highlights">
                  <p className="highlights-title">Focus Areas</p>
                  <div className="edu-pill-row">
                    {edu.highlights.map((item) => (
                      <span key={item} className="edu-pill">{item}</span>
                    ))}
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
