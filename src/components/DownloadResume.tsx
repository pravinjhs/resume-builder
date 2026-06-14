import React from "react";

export const DownloadResume: React.FC = () => {
  const handleDownload = () => {
    // 1. Define the exact HTML string with the built-in resume styles
    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Pravin Kumar Agrawal - Resume</title>
  <style>
    @page { size: A4; margin: 8mm; background-color: #f8fafc; }
    body { margin: 10px; padding: 10px; font-family: "Helvetica Neue", Arial, sans-serif; color: #334155; background-color: #f8fafc; line-height: 1.25; font-size: 11pt; }
    .header-container { border-bottom: 2px solid #e2e8f0; padding-bottom: 15px; margin-bottom: 18px; }
    h1 { font-size: 22pt; color: #0f172a; margin: 0 0 4px 0; font-weight: 700; letter-spacing: -0.5px; }
    .headline { font-size: 11pt; color: #024ddf; font-weight: 600; margin: 0 0 12px 0; letter-spacing: 0.2px; }
    .contact-info { display: table; width: 100%; margin-top: 8px; }
    .contact-row { display: table-row; }
    .contact-item { display: table-cell; font-size: 10pt; color: #475569; padding-right: 15px; padding-bottom: 4px; }
    .contact-item strong { color: #1e293b; }
    h2 { font-size: 12pt; color: #0f172a; text-transform: uppercase; margin: 18px 0 8px 0; letter-spacing: 0.8px; font-weight: 700; display: block; border-left: 3.5px solid #024ddf; border-bottom: 3.5px solid #024ddf; padding-left: 8px; padding-bottom: 2px; }
    .summary-text { font-size: 10pt; color: #334155; text-align: justify; margin-bottom: 10px; }
    .summary-bullets { margin: 0; padding-left: 18px; }
    .summary-bullets li { margin-bottom: 4px; font-size: 10pt; }
    .skills-table { display: table; width: 100%; margin-top: 6px; border-collapse: collapse; }
    .skills-row { display: table-row; }
    .skills-category { display: table-cell; width: 22%; font-weight: 700; color: #1e293b; font-size: 9pt; padding: 4px 6px 4px 0; vertical-align: top; }
    .skills-list { display: table-cell; width: 78%; font-size: 9pt; color: #334155; padding: 4px 0 4px 6px; vertical-align: top; }
    .job-block { margin-bottom: 16px; }
    .job-header { display: table; width: 100%; margin-bottom: 4px; }
    .job-title-company { display: table-cell; text-align: left; vertical-align: bottom; width: 75%; }
    .company-name { font-size: 11pt; font-weight: 700; color: #0f172a; }
    .job-title { font-size: 10pt; font-weight: 600; color: #475569; font-style: italic; margin-top: 1px; }
    .job-meta { display: table-cell; text-align: right; vertical-align: top; font-size: 9pt; color: #64748b; font-weight: 500; width: 25%; }
    .project-block { margin-top: 6px; }
    .project-title { font-size: 10pt; font-weight: 700; color: #1e293b; margin-bottom: 2px; }
    .project-links { font-size: 10pt; color: #024ddf; margin-bottom: 4px; font-weight: 500; }
    .bullet-list { margin: 4px 0 6px 0; padding-left: 16px; }
    .bullet-list li { margin-bottom: 3px; font-size: 9pt; text-align: justify; }
    .tech-stack-inline { font-size: 10pt; color: #475569; margin-top: 4px; margin-bottom: 8px; background-color: #f1f5f9; padding: 4px 8px; border-radius: 4px; border-left: 2px solid #cbd5e1; }
    .edu-table { display: table; width: 100%; margin-bottom: 8px; }
    .edu-row { display: table-row; }
    .edu-cell-left { display: table-cell; text-align: left; vertical-align: top; padding-bottom: 6px; }
    .edu-degree { font-size: 10pt; font-weight: 700; color: #0f172a; }
    .edu-school { font-size: 9pt; color: #475569; }
    .edu-cell-right { display: table-cell; text-align: right; vertical-align: top; font-size: 9pt; color: #64748b; font-weight: 500; }
  </style>
</head>
<body>
  <div class="header-container">
    <h1>Pravin Kumar Agrawal</h1>
    <div class="headline">Senior Software Engineer II | Technical Lead | ReactJS Expert || 11+ Years of experience in Leading Scalable Web Application Development</div>
    <div class="contact-info">
      <div class="contact-row">
        <div class="contact-item"><strong>Phone:</strong> +91-9873648928</div>
        <div class="contact-item"><strong>Email:</strong> pravinagrawal145@gmail.com</div>
      </div>
      <div class="contact-row">
        <div class="contact-item"><strong>LinkedIn:</strong> https://www.linkedin.com/in/pravinjhs/</div>
        <div class="contact-item"><strong>Address:</strong> B59, Swastik City, Unnao Balaji Road, Burah, Jhansi, UP 284002</div>
      </div>
    </div>
  </div>

  <h2>Executive Summary</h2>
  <div class="summary-text">Results-driven Senior Software Engineer with over 11+ years of total professional IT experience, including 8+ years of dedicated expertise in large-scale modern web architecture, frontend state engineering, and enterprise ecosystem development.</div>
  <ul class="summary-bullets">
    <li><strong>Technical Depth:</strong> Mastery over production environments deploying JavaScript, TypeScript, ReactJS, NextJS, AngularJS, HTML5, CSS3, and NodeJS.</li>
    <li><strong>Architectural Focus:</strong> Proven track record in complex state management using Redux Toolkit, foundational setup of scalable frameworks, and seamless execution of cross-device responsive UI models.</li>
    <li><strong>Compliance & Process:</strong> Champion of digital inclusivity through rigorous adherence to WCAG Standards and advanced workflow accelerations utilizing Claude AI code execution tools within agile frameworks.</li>
  </ul>

  <h2>Core Technical Skills</h2>
  <div class="skills-table">
    <div class="skills-row"><div class="skills-category">Frontend Architecture</div><div class="skills-list">ReactJS, Redux Toolkit, TypeScript, JavaScript (ES6+), NextJS, HTML5, CSS3, AngularJS, JQuery, Angular 2/5/7/8, Tailwind CSS, Styled Components, Bootstrap, Micro Frontend Architecture</div></div>
    <div class="skills-row"><div class="skills-category">Backend & Cloud APIs</div><div class="skills-list">NodeJS, Express.js, GraphQL, RESTful Web Services, Core Java, Basics of Spring Boot, Apache Kafka Microservices Architecture</div></div>
    <div class="skills-row"><div class="skills-category">Testing Frameworks</div><div class="skills-list">Jest (Unit/Integration Testing), Mocha, Karma E2E Testing Runner</div></div>
    <div class="skills-row"><div class="skills-category">DevOps & Observability</div><div class="skills-list">Amazon Web Services (AWS), CI/CD Automation (Jenkins, GitLab Pipelines), Docker Containerization, Logging & Monitoring (Splunk, Datadog, Kibana), PagerDuty Incident Management</div></div>
  </div>

  <h2>Professional Experience</h2>
  <div class="job-block">
    <div class="job-header">
      <div class="job-title-company">
        <span class="company-name">Ticketmaster India Private Limited, Gurugram</span><br />
        <span class="job-title">• Senior Software Engineer II (Jul 2024 - Present)<br />• Senior Software Engineer I (Mar 2020 - Jun 2024)</span>
      </div>
      <div class="job-meta">Mar 2020 — Present</div>
    </div>
    <div class="project-block">
      <div class="project-title">Global Accounts, Authentication, Customer & User Management Platforms</div>
      <div class="project-links">Production Sites: ticketmaster.com | ticketmaster.co.uk</div>
      <ul class="bullet-list">
        <li>Led the architecture, design, and development of core enterprise customer and user management platforms, including ACPM, ACAU, Webapp-Common-UI, GDS, ACGA, ATCM, and ASVD webapps.</li>
        <li>Architected the flagship ACPM and ASVD Global Accounts system from scratch, implementing an enterprise-grade NextJS and React base structure styled with isolation patterns via Styled Components.</li>
      </ul>
      <div class="tech-stack-inline"><strong>Tech Stack:</strong> NextJS, ReactJS, Redux Toolkit, Express.js, GraphQL, TypeScript, JavaScript, HTML, CSS, GitLab CI/CD, Splunk, AWS, PagerDuty.</div>
    </div>
  </div>

  <h2>Education</h2>
  <div class="edu-table">
    <div class="edu-row">
      <div class="edu-cell-left"><span class="edu-degree">Master of Computer Application (MCA)</span><br /><span class="edu-school">Uttar Pradesh Technical University, Lucknow, U.P.</span></div>
      <div class="edu-cell-right">2011 — 2014</div>
    </div>
  </div>
</body>
</html>`;

    // 2. Generate a DOM file allocation blob with correct layout content header types
    const blob = new Blob([htmlContent], { type: "text/html;charset=utf-8;" });
    const url = URL.createObjectURL(blob);

    // 3. Create a temporary ghost link node element to click programmatically
    const link = document.createElement("a");
    link.href = url;
    link.setAttribute("download", "Pravin_Kumar_Agrawal_Resume.html");

    // 4. Trigger download action and clear internal runtime cache hooks
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  };

  // Modern UI Action Button Styling
  const buttonStyle: React.CSSProperties = {
    backgroundColor: "#024ddf",
    color: "#ffffff",
    border: "none",
    padding: "12px 24px",
    fontSize: "11pt",
    fontWeight: 600,
    borderRadius: "6px",
    cursor: "pointer",
    boxShadow:
      "0 4px 6px -1px rgba(2, 77, 223, 0.2), 0 2px 4px -1px rgba(2, 77, 223, 0.1)",
    transition: "all 0.2s ease",
    display: "inline-flex",
    alignItems: "center",
    gap: "8px",
    margin: "20px 0",
  };

  return (
    <div style={{ textAlign: "center" }}>
      <button
        style={buttonStyle}
        onClick={handleDownload}
        onMouseOver={(e) => (e.currentTarget.style.backgroundColor = "#1d4ed8")}
        onMouseOut={(e) => (e.currentTarget.style.backgroundColor = "#024ddf")}
      >
        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z" />
          <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z" />
        </svg>
        Download Full Resume HTML
      </button>
    </div>
  );
};
