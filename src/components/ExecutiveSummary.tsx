import React from "react";
import { SectionHeader } from "./SectionHeader";

interface SummaryProps {
  text: string;
  bullets: string[];
}

export const ExecutiveSummary: React.FC<SummaryProps> = ({ text, bullets }) => {
  return (
    <section>
      <SectionHeader title="Executive Summary" />
      <div
        className="summary-text"
        style={{
          fontSize: "10pt",
          color: "#334155",
          textAlign: "justify",
          marginBottom: "10px",
        }}
      >
        {text}
      </div>
      <ul
        className="summary-bullets"
        style={{ margin: 0, paddingLeft: "18px" }}
      >
        {bullets.map((item, idx) => (
          <li
            key={idx}
            style={{ marginBottom: "4px", fontSize: "10pt" }}
            dangerouslySetInnerHTML={{ __html: item }}
          />
        ))}
      </ul>
    </section>
  );
};
