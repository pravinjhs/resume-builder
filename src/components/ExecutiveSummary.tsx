import React from "react";
import { SectionHeader } from "./SectionHeader";

interface SummaryProps {
  text: string;
}

export const ExecutiveSummary: React.FC<SummaryProps> = ({ text }) => {
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
    </section>
  );
};
