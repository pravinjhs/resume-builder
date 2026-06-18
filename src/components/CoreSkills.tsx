import React from "react";
import { SectionHeader } from "./SectionHeader";

interface SkillItem {
  category: string;
  skills: string;
}

interface CoreSkillsProps {
  skills: SkillItem[];
}

export const CoreSkills: React.FC<CoreSkillsProps> = ({ skills }) => {
  return (
    <section>
      <SectionHeader title="Core Technical Skills" />
      <div
        className="skills-table"
        style={{
          display: "table",
          width: "100%",
          marginTop: "6px",
          borderCollapse: "collapse",
        }}
      >
        {skills.map((row, idx) => (
          <div
            className="skills-row"
            key={idx}
            style={{ display: "table-row" }}
          >
            <div
              className="skills-category"
              style={{
                display: "table-cell",
                width: "22%",
                fontWeight: 700,
                color: "#1e293b",
                padding: "4px 6px 4px 0",
                verticalAlign: "top",
              }}
            >
              {row.category}
            </div>
            <div
              className="skills-list"
              style={{
                display: "table-cell",
                width: "78%",
                color: "#334155",
                padding: "4px 0 4px 6px",
                verticalAlign: "top",
              }}
            >
              {row.skills}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
