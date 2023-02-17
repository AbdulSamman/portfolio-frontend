export interface IAppProvider {
  children: React.ReactNode;
}

export interface IAppContext {
  scaleX: number;
  projectsRef: string;
  skillsRef: string;
  contactRef: string;
}

export interface IParallaxLineProps {
  speed: number;
  children: React.ReactNode;
}

export interface IHandleScroll {
  (event: Event): void;
  prevScrollPosition?: number;
}

export interface IPageProps {
  ref: React.RefObject<HTMLDivElement>;
}
