import React from "react";
import resumeData from "./mockData/resume-data.json"; // Direct import of your data file
import { ExecutiveSummary } from "./components/ExecutiveSummary";
import { CoreSkills } from "./components/CoreSkills";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { Education } from "./components/Education";

export const App: React.FC = () => {
  const globalAppStyle: React.CSSProperties = {
    margin: "10px",
    padding: "10px",
    fontFamily: '"Helvetica Neue", Helvetica, Arial, sans-serif',
    color: "#334155",
    backgroundColor: "#f8fafc",
    lineHeight: 1.25,
    fontSize: "11pt",
  };

  return (
    <div style={globalAppStyle}>
      {/* Header Container maps dynamic parameters from json fields */}
      <div
        className="header-container"
        style={{
          borderBottom: "2px solid #e2e8f0",
          paddingBottom: "15px",
          marginBottom: "18px",
        }}
      >
        <h1
          style={{
            fontSize: "22pt",
            color: "#0f172a",
            margin: "0 0 4px 0",
            fontWeight: 700,
            letterSpacing: "-0.5px",
          }}
        >
          {resumeData.name}
        </h1>
        <div
          className="headline"
          style={{
            fontSize: "11pt",
            color: "#024ddf",
            fontWeight: 600,
            margin: "0 0 12px 0",
            letterSpacing: "0.2px",
          }}
        >
          {resumeData.headline.title} |{" "}
          {resumeData.headline.subTitles.join(" | ")} ||{" "}
          {resumeData.headline.tagline}
        </div>
        <div
          className="contact-info"
          style={{ display: "table", width: "100%", marginTop: "8px" }}
        >
          <div className="contact-row" style={{ display: "table-row" }}>
            <div
              className="contact-item"
              style={{
                display: "table-cell",
                fontSize: "10pt",
                color: "#475569",
                paddingRight: "15px",
                paddingBottom: "4px",
              }}
            >
              <strong>Phone:</strong> {resumeData.contact.phone}
            </div>
            <div
              className="contact-item"
              style={{
                display: "table-cell",
                fontSize: "10pt",
                color: "#475569",
                paddingRight: "15px",
                paddingBottom: "4px",
              }}
            >
              <strong>Email:</strong> {resumeData.contact.email}
            </div>
          </div>
          <div className="contact-row" style={{ display: "table-row" }}>
            <div
              className="contact-item"
              style={{
                display: "table-cell",
                fontSize: "10pt",
                color: "#475569",
                paddingRight: "15px",
                paddingBottom: "4px",
              }}
            >
              <strong>LinkedIn:</strong> {resumeData.contact.linkedin}
            </div>
            <div
              className="contact-item"
              style={{
                display: "table-cell",
                fontSize: "10pt",
                color: "#475569",
                paddingRight: "15px",
                paddingBottom: "4px",
              }}
            >
              <strong>Address:</strong> {resumeData.contact.address}
            </div>
          </div>
        </div>
      </div>

      {/* Structured data flow distribution points */}
      <ExecutiveSummary
        text={resumeData.professionalSummary}
        bullets={resumeData.summaryBullets}
      />
      <CoreSkills skills={resumeData.technicalSkills} />
      <ProfessionalExperience jobs={resumeData.professionalExperience} />
      <Education educationHistory={resumeData.education} />
    </div>
  );
};

export default App;
