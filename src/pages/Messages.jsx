import React from 'react';
import '../styles/pages/Members.css';

export default function Members() {
  return (
    <div className="members-page">
      <h1 className="page-title">Experience &amp; Projects</h1>

      <section className="experience-section">
        <h2>Professional Experience</h2>
        <ul>
          <li>
            <strong>Developer Intern</strong> @ Quantuva Technologies (Jul–Aug 2024) <br/>
            Spearheaded a 3‑member team to launch QuantuvaCS.com &amp; mrmatrimony.in, cutting turnaround by 30%.
          </li>
          <li>
            <strong>Full‑Stack Developer</strong> @ Omyra Technologies (Dec 2024–Feb 2025) <br/>
            Architected integrated solutions for Medi‑Co and freelance projects, boosting performance by 25%.
          </li>
        </ul>
      </section>

      <section className="projects-section">
        <h2>Key Projects</h2>
        <ul>
          <li>
            <strong>Banking System SQL</strong> (Dec 2022–Jan 2024) <br/>
            Engineered a robust relational database—improved query response by 15%.
          </li>
          <li>
            <strong>Food Recognition &amp; Calorie Estimation</strong> (Sep 2024–Nov 2024) <br/>
            Built Vision Transformer + Mask R‑CNN, achieving 88% accuracy.
          </li>
          <li>
            <strong>Hospital Management System</strong> (Nov 2024) <br/>
            Full‑stack app with role‑based access—AI diagnostics at 84% accuracy.
          </li>
          <li>
            <strong>MeetEase (Scheduler)</strong> (May 2023–Jul 2023) <br/>
            Integrated Zoom API, reduced scheduling conflicts by 25%.
          </li>
        </ul>
      </section>
    </div>
  );
}
