export interface IAppProvider {
  children: React.ReactNode;
  speed: number;
  start: number;
  end: number;
}

export interface IAppContext {
  scaleX: number;
  rotateY: number;
  projects: IProject[];
  person: IPerson;
  isOpacity: number;
  spinnSpeed: number;
  spinnSpeedLogo: number;
}

export interface IParallaxLineProps {
  speed: number;
  start: number;
  end: number;
  children: React.ReactNode;
}

export interface IHandleScroll {
  (event: Event): void;
  prevScrollPosition?: number;
}

export interface ParallaxLineProps {
  speed: number;
  start: number;
  end: number;
}

export interface HandleScroll {
  (event: Event, scrollY: number): void;
  prevScrollPosition?: number;
}

export interface IPerson {
  firstName: string;
  lastName: string;
  githubName: string;
  hobbys: string[];
  description: string;
}

export interface IProject {
  id: number;
  name: string;
  image: string;
  tags: string[];
  repo: string;
  url: string;
  description: string;
}
export interface ISkills {
  type: string;
  value: number;
}

export interface IContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  capture: string;
}

export const contactFormData = {
  name: "",
  email: "",
  subject: "",
  message: "",
  capture: "",
};
