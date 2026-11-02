import React, { useMemo, useEffect } from "react";
import { Routes, Route, useSearchParams } from "react-router-dom";
import type { Resume } from "./utills/ResumeFormat";
import resumeDataPravin from "./mockData/resume-data-pravin.json";
import resumeDataMegha from "./mockData/resume-data-megha.json";
import resumeDataSwati from "./mockData/resume-data-swati.json";
import resumeDataGirraj from "./mockData/resume-data-girraj.json";
import resumeDataAngel from "./mockData/resume-data-angel.json";
import { ExecutiveSummary } from "./components/ExecutiveSummary";
import { CoreSkills } from "./components/CoreSkills";
import { ProfessionalExperience } from "./components/ProfessionalExperience";
import { Education } from "./components/Education";

const setMeta = (name: string, content: string, attr = "name") => {
  let tag = document.querySelector(`meta[${attr}="${name}"]`) as HTMLMetaElement | null;

  if (!tag) {
    tag = document.createElement("meta");
    tag.setAttribute(attr, name);
    document.head.appendChild(tag);
  }

  tag.setAttribute("content", content);
};

const setJsonLd = (data: Record<string, any>) => {
  let script = document.querySelector(
    'script[data-seo="resume-schema"]'
  ) as HTMLScriptElement | null;

  if (!script) {
    script = document.createElement("script");
    script.type = "application/ld+json";
    script.setAttribute("data-seo", "resume-schema");
    document.head.appendChild(script);
  }

  script.textContent = JSON.stringify(data);
};

export const ResumeViewer: React.FC = () => {
  const [searchParams] = useSearchParams();
  const selectedProfile = searchParams.get("resume")?.toLowerCase() || "pravin";

  const resumeData: Resume = useMemo(() => {
    if (selectedProfile === "megha") {
      return resumeDataMegha;
    } else if (selectedProfile === "girraj") {
      return resumeDataGirraj;
    } else if (selectedProfile === "swati") {
      return resumeDataSwati;
    } else if (selectedProfile === "angel" || selectedProfile === "angle") {
      return resumeDataAngel;
    }

    return resumeDataPravin;
  }, [selectedProfile]);

  useEffect(() => {
    const personName = resumeData.name;
    const headline = [
      resumeData.headline.title,
      resumeData.headline.subTitles,
      resumeData.headline.tagline,
    ]
      .filter(Boolean)
      .join(" | ");

    const pageTitle = `${personName} | ${headline}`;
    const description = `${personName} resume, ${headline}. ${resumeData.professionalSummary.slice(
      0,
      180
    )}...`;

    document.title = pageTitle;
    setMeta("description", description);
    setMeta("robots", "index,follow,max-image-preview:large");
    setMeta("author", personName);

    const canonicalUrl = `https://pravinjhs.github.io/resume-builder/resume?resume=${selectedProfile}`;
    setMeta("canonical", canonicalUrl, "rel");
    setMeta("og:title", pageTitle, "property");
    setMeta("og:description", description, "property");
    setMeta("og:url", canonicalUrl, "property");
    setMeta("twitter:title", pageTitle, "name");
    setMeta("twitter:description", description, "name");

    const profileSkills = resumeData.technicalSkills.flatMap((item) =>
      item.skills.split(",").map((skill) => skill.trim())
    );

    const schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      name: personName,
      jobTitle: resumeData.headline.title,
      description,
      email: resumeData.contact.email,
      telephone: resumeData.contact.mobile,
      address: {
        "@type": "PostalAddress",
        streetAddress: resumeData.contact.address,
        addressCountry: "IN",
      },
      sameAs: [resumeData.contact.linkedin],
      knowsAbout: profileSkills.slice(0, 50),
      hasOccupation: {
        "@type": "Occupation",
        name: resumeData.headline.title,
        description: headline,
      },
    };

    setJsonLd(schema);
  }, [resumeData, selectedProfile]);

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
          {resumeData.headline.title}
          {resumeData.headline.subTitles && (
            <> || {resumeData.headline.subTitles}</>
          )}
          {resumeData.headline.tagline && (
            <> || {resumeData.headline.tagline}</>
          )}
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
              <strong>Mobile:</strong> {resumeData.contact.mobile}
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

      <ExecutiveSummary text={resumeData.professionalSummary} />
      {resumeData.keyAchievements && (
        <ExecutiveSummary
          text={"KEY_ACHIEVEMENTS"}
          bullets={resumeData.keyAchievements}
        />
      )}
      <CoreSkills skills={resumeData.technicalSkills} />
      <ProfessionalExperience jobs={resumeData.professionalExperience} />
      <Education educationHistory={resumeData.education} />
    </div>
  );
};

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

export const App: React.FC = () => {
  return (
    <Routes>
      <Route path="/resume-builder/resume" element={<ResumeViewer />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
