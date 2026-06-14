import React from "react";

interface SectionHeaderProps {
  title: string;
}

export const SectionHeader: React.FC<SectionHeaderProps> = ({ title }) => {
  const headerStyle: React.CSSProperties = {
    fontSize: "12pt",
    color: "#0f172a",
    textTransform: "uppercase",
    margin: "18px 0 8px 0",
    letterSpacing: "0.8px",
    fontWeight: 700,
    display: "block",
    borderLeft: "3.5px solid #024ddf",
    borderBottom: "3.5px solid #024ddf",
    paddingLeft: "8px",
    paddingBottom: "2px",
  };

  return <h2 style={headerStyle}>{title}</h2>;
};
