export interface Resume {
  name: string;
  headline: Headline;
  contact: Contact;
  professionalSummary: string;
  keyAchievements?: string[];
  technicalSkills: TechnicalSkill[];
  professionalExperience: ProfessionalExperience[];
  education: Education[];
}

export interface Headline {
  title: string;
  subTitles?: string;
  tagline: string;
}

export interface Contact {
  mobile: string;
  email: string;
  linkedin: string;
  address: string;
}

export interface TechnicalSkill {
  category: string;
  skills: string;
}

export interface ProfessionalExperience {
  company: string;
  roles: string;
  duration: string;
  projects: Project[];
}

export interface Project {
  title: string;
  bullets: string[];
  techStack?: string;
}

export interface Education {
  degree: string;
  school: string;
  duration: string;
}
