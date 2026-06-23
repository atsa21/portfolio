export interface WorkProject {
  name: string;
  achievements: string[];
  tech: string[];
}

export interface WorkExperience {
  company: string;
  position: string;
  period: string;
  projects: WorkProject[];
}
