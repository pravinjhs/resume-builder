import React from "react";
import { SectionHeader } from "./SectionHeader";

interface EduItem {
  degree: string;
  school: string;
  duration: string;
}

interface EducationProps {
  educationHistory: EduItem[];
}

export const Education: React.FC<EducationProps> = ({ educationHistory }) => {
  return (
    <section>
      <SectionHeader title="Education" />
      <div
        className="edu-table"
        style={{ display: "table", width: "100%", marginBottom: "8px" }}
      >
        {educationHistory.map((edu, idx) => (
          <div className="edu-row" key={idx} style={{ display: "table-row" }}>
            <div
              className="edu-cell-left"
              style={{
                display: "table-cell",
                textAlign: "left",
                verticalAlign: "top",
                paddingBottom: "6px",
              }}
            >
              <span
                className="edu-degree"
                style={{ fontSize: "10pt", fontWeight: 700, color: "#0f172a" }}
              >
                {edu.degree}
              </span>
              <br />
              <span
                className="edu-school"
                style={{ fontSize: "9pt", color: "#475569" }}
              >
                {edu.school}
              </span>
            </div>
            <div
              className="edu-cell-right"
              style={{
                display: "table-cell",
                textAlign: "right",
                verticalAlign: "top",
                fontSize: "9pt",
                color: "#64748b",
                fontWeight: 500,
              }}
            >
              {edu.duration}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
