import React from "react";

interface ArchitectureStrengthsProps {
  architectureAndLeadershipStrengths: string[];
}

export const ArchitectureStrengths: React.FC<ArchitectureStrengthsProps> = ({
  architectureAndLeadershipStrengths,
}) => {
  return (
    <section className="strengths-section">
      <h2 className="strengths-heading">ARCHITECTURE & LEADERSHIP STRENGTHS</h2>
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
