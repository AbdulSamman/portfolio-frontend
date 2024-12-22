export interface IAppProvider {
  children: React.ReactNode;
  speed: number;
  start: number;
  end: number;
}

export interface IAppContext {
  scaleX: number;
  rotateY: number;
  person: IPerson;
  isOpacity: number;
  spinnSpeed: number;
  spinnSpeedLogo: number;
  projects: IProject[];
  skills: ISkill[];
  moveTigerX: number;
  isMenuOpen: boolean;
  setIsMenuOpen: (isMenuOpen: boolean) => void;
  handleMenuOpen: () => void;
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
  gitHubLink: string;
  linkedinLink: string;
  title: string;
  hobbys: string[];
  description: string;
}

export interface IProject {
  _id: string;
  name: string;
  image: string;
  tags: string[];
  repo: string;
  url: string;
  description: string;
}
export interface ISkill {
  _id: string;
  title: string;
  skills: string[];
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

interface IPersonData {
  firstName: string;
  lastName: string;
  gitHubLink: string;
  linkedinLink: string;
  title: string;
  description: string;
  hobbys: string[];
}
export const personData: IPersonData = {
  firstName: "Abdulrazak",
  lastName: "SAMMAN",
  gitHubLink: "https://github.com/AbdulSamman",
  linkedinLink: "https://www.linkedin.com/in/abdulrazak-samman-175b2718b/",
  title: "fullstack/ MERNstack Web-Developer",
  description:
    "Passionate Junior Fullstack Web Developer with problem-solving skills, strong design sense, and a hunger for learning.",
  hobbys: ["Chess", "Football", "Swimming", "Coding"],
};
