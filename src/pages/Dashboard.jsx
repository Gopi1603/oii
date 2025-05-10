import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/pages/Dashboard.css';

export default function Dashboard() {
  return (
    <div className="dashboard-page">
      <h1 className="page-title">About Me</h1>

      <section className="contact-section">
        <p className="name">MANDEPUDI GOPI CHAKRADHAR</p>
        <p>📞 +91 6302511822  |  📍 Khammam, Telangana</p>
        <p>
          ✉️ <a href="mailto:pandug771@gmail.com">pandug771@gmail.com</a>  |  
          🔗 <a href="https://linkedin.com/in/gopi-chakradhar" target="_blank" rel="noreferrer">linkedin.com/gopi-chakradhar</a>  |  
          🌐 <a href="https://gopi-chakradhar.vercel.app/" target="_blank" rel="noreferrer">gopi-chakradhar.vercel.app</a>
        </p>
      </section>

      <section className="objective-section">
        <h2>Objective</h2>
        <p>
          Dynamic, results-driven Computer Science student specializing in software engineering, full‑stack development,
          and machine learning. Proficient in Python, C, and C++ with a proven record of spearheading projects that
          deliver quantifiable improvements. Adept at leveraging agile methodologies to optimize system performance,
          elevate user engagement, and achieve measurable business outcomes.
        </p>
      </section>
    </div>
);
}
