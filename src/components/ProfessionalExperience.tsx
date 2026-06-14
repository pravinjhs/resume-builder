import React from "react";
import { SectionHeader } from "./SectionHeader";

interface Project {
  title: string;
  links?: string;
  bullets: string[];
  techStack?: string;
}

interface Job {
  company: string;
  roles: string;
  duration: string;
  projects: Project[];
}

interface ExperienceProps {
  jobs: Job[];
}

export const ProfessionalExperience: React.FC<ExperienceProps> = ({ jobs }) => {
  const techStackBadgeStyle: React.CSSProperties = {
    fontSize: "10pt",
    color: "#475569",
    marginTop: "4px",
    marginBottom: "8px",
    backgroundColor: "#f1f5f9",
    padding: "4px 8px",
    borderRadius: "4px",
    borderLeft: "2px solid #cbd5e1",
  };

  return (
    <section>
      <SectionHeader title="Professional Experience" />
      {jobs.map((job, jobIdx) => (
        <div
          className="job-block"
          key={jobIdx}
          style={{ marginBottom: "16px" }}
        >
          <div
            className="job-header"
            style={{ display: "table", width: "100%", marginBottom: "4px" }}
          >
            <div
              className="job-title-company"
              style={{
                display: "table-cell",
                textAlign: "left",
                verticalAlign: "bottom",
                width: "75%",
              }}
            >
              <span
                className="company-name"
                style={{ fontSize: "11pt", fontWeight: 700, color: "#0f172a" }}
              >
                {job.company}
              </span>
              <br />
              <span
                className="job-title"
                style={{
                  fontSize: "10pt",
                  fontWeight: 600,
                  color: "#475569",
                  fontStyle: "italic",
                  whiteSpace: "pre-line",
                }}
              >
                {job.roles}
              </span>
            </div>
            <div
              className="job-meta"
              style={{
                display: "table-cell",
                textAlign: "right",
                verticalAlign: "top",
                fontSize: "9pt",
                color: "#64748b",
                fontWeight: 500,
                width: "25%",
              }}
            >
              {job.duration}
            </div>
          </div>

          {job.projects.map((project, projIdx) => (
            <div
              className="project-block"
              key={projIdx}
              style={{ marginTop: "6px" }}
            >
              <div
                className="project-title"
                style={{
                  fontSize: "10pt",
                  fontWeight: 700,
                  color: "#1e293b",
                  marginBottom: "2px",
                }}
              >
                {project.title}
              </div>
              {project.links && (
                <div
                  className="project-links"
                  style={{
                    fontSize: "10pt",
                    color: "#024ddf",
                    marginBottom: "4px",
                    fontWeight: 500,
                  }}
                >
                  {project.links}
                </div>
              )}
              <ul
                className="bullet-list"
                style={{ margin: "4px 0 6px 0", paddingLeft: "16px" }}
              >
                {project.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    style={{
                      marginBottom: "3px",
                      fontSize: "9pt",
                      textAlign: "justify",
                    }}
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                ))}
              </ul>
              {project.techStack && (
                <div style={techStackBadgeStyle}>
                  <strong>Tech Stack:</strong> {project.techStack}
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </section>
  );
};
