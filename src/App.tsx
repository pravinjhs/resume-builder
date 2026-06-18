import React, { useMemo } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import resumeDataPravin from "./mockData/resume-data-pravin.json";
import resumeDataMegha from "./mockData/resume-data-megha.json";
import { ExecutiveSummary } from "./components/ExecutiveSummary";
import { CoreSkills } from "./components/CoreSkills";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { Education } from "./components/Education";

export const ResumeViewer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedProfile = searchParams.get("resume")?.toLowerCase();

  const resumeData = useMemo(() => {
    if (selectedProfile === "megha") {
      return resumeDataMegha;
    }

    return resumeDataPravin;
  }, [selectedProfile]);
  return (
    <div className="main-container">
      <div
        className="header-container"
        style={{
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
        <div className="headline">
          {resumeData.headline.title} || {resumeData.headline.subTitles} ||{" "}
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
      <ExecutiveSummary text={resumeData.professionalSummary} />
      <CoreSkills skills={resumeData.technicalSkills} />
      <ProfessionalExperience jobs={resumeData.professionalExperience} />
      <Education educationHistory={resumeData.education} />
    </div>
  );
};

// 2. Clean Fallback 404 Layout Component
const NotFound: React.FC = () => {
  return (
    <div
      style={{ padding: "50px", textAlign: "center", fontFamily: "sans-serif" }}
    >
      <h2 style={{ color: "#dc2626", fontSize: "24px" }}>
        404 - Page Not Found
      </h2>
      <p style={{ color: "#475569", marginTop: "8px" }}>
        The requested route URL does not exist.
      </p>
    </div>
  );
};

// 3. Main Routing Application Entry Controller
export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/resume-builder/resume" element={<ResumeViewer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
