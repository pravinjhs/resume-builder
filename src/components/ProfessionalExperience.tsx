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

const getDuration = (dateRangeStr: string): string => {
  const [startDateStr, endDateStr] = dateRangeStr.split(/\s*[\-\–\—]\s*/);

  // Guard check to ensure splitting succeeded
  if (!startDateStr || !endDateStr) {
    return "0 mos";
  }

  let end: Date;

  // Check if the end date is "Present" (case-insensitive)
  if (endDateStr.trim().toLowerCase() === "present") {
    end = new Date(); // Sets to the current actual date
  } else {
    end = new Date(endDateStr);
  }

  // Parse strings into Date objects
  const start: Date = new Date(startDateStr);

  // Calculate the total difference in months
  let totalMonths: number =
    (end.getFullYear() - start.getFullYear()) * 12 +
    (end.getMonth() - start.getMonth()) +
    1;

  // Extract years and the remaining months
  const years: number = Math.floor(totalMonths / 12);
  const months: number = totalMonths % 12;

  // Handle singular/plural formatting
  const yearStr: string = years === 1 ? "yr" : "yrs";
  const monthStr: string = months === 1 ? "mo" : "mos";

  // Build the output string dynamically based on the values
  if (years > 0 && months > 0) {
    return `${years} ${yearStr} ${months} ${monthStr}`;
  } else if (years > 0) {
    return `${years} ${yearStr}`;
  } else if (months > 0) {
    return `${months} ${monthStr}`;
  } else {
    return "0 mos";
  }
};

export const ProfessionalExperience: React.FC<ExperienceProps> = ({ jobs }) => {
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
                width: "60%",
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
                color: "#64748b",
                fontWeight: 500,
                width: "40%",
              }}
            >
              {job.duration} ({getDuration(job.duration)})
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
                Project: {project.title}
              </div>
              <ul
                className="bullet-list"
                style={{ margin: "4px 0 6px 0", paddingLeft: "16px" }}
              >
                {project.bullets.map((bullet, bIdx) => (
                  <li
                    key={bIdx}
                    style={{
                      marginBottom: "3px",
                      textAlign: "justify",
                    }}
                    dangerouslySetInnerHTML={{ __html: bullet }}
                  />
                ))}
              </ul>
              {project.techStack && (
                <div className="tech-stack-badge">
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
