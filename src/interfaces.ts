export interface IAppProvider {
  children: React.ReactNode;
  speed: number;
  start: number;
  end: number;
}

export interface IAppContext {
  scaleX: number;
  rotateY: number;
  person:   IPerson ;
  isOpacity: number;
  spinnSpeed: number;
  spinnSpeedLogo: number;
  projects:IProject[];
  skills:ISkill[];
  moveTigerX:number;
  isMenuOpen:boolean;
  setIsMenuOpen:(isMenuOpen:boolean)=> void
  handleMenuOpen:()=>void
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
  id: number;
  name: string;
  image: string;
  tags: string[];
  repo: string;
  url: string;
  description: string;
}
export interface ISkill {
  id:number,
  title:string,
  skills:string[]
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


export const personDataEmpty ={
  firstName: "",
  lastName: "",
  gitHubLink: "",
  linkedinLink: "",
  title: "",
  hobbys: [],
  description: "",

}