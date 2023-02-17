export interface IAppProvider {
  children: React.ReactNode;
}

export interface IAppContext {
  scaleX: number;
}

export interface IParallaxLineProps {
  speed: number;
  children: React.ReactNode;
}

export interface IHandleScroll {
  (event: Event): void;
  prevScrollPosition?: number;
}
