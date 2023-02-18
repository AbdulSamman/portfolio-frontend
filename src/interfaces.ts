export interface IAppProvider {
  children: React.ReactNode;
}

export interface IAppContext {}

export interface IAppProviderParallax {
  children: React.ReactNode;
  speed: number;
  start: number;
  end: number;
}

export interface IAppContextParallax {
  scaleX: number;
  rotateY: number;
  isFixed: boolean;
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
