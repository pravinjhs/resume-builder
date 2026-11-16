import React from "react";
import { SectionHeader } from "./SectionHeader";

interface ArchitectureStrengthsProps {
  architectureAndLeadershipStrengths: string[];
}

export const ArchitectureStrengths: React.FC<ArchitectureStrengthsProps> = ({
  architectureAndLeadershipStrengths,
}) => {
  return (
    <section className="strengths-section">
      <SectionHeader title="Core Technical Skills" />
      <ul className="strengths-grid">
        {architectureAndLeadershipStrengths.map((item, index) => (
          <li key={index} className="strengths-cell">
            <span className="bullet">•</span>
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};
