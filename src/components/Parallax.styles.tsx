import styled from "styled-components";

interface ParallaxImageProps {
  scrollPosition: number;
}

interface ParallaxElementProps {
  top?: string;
  bottom?: string;
  left: string;
  transform: string;
  scrollPosition: number;
}

export const ParallaxContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const ParallaxImage = styled.img<ParallaxImageProps>`
  position: relative;
  top: ${({ scrollPosition }) => -scrollPosition * 0.5}px;
  left: 0;
  width: 100%;
  height: auto;
  z-index: -1;
`;

export const ParallaxElement = styled.div<ParallaxElementProps>`
  position: absolute;
  top: ${({ top, scrollPosition }) =>
    (top ? top : undefined) || -scrollPosition * 0.5}px;
  bottom: ${({ bottom, scrollPosition }) =>
    (bottom ? bottom : undefined) || scrollPosition * 0.5}px;
  left: ${({ left }) => left};
  transform: ${({ transform }) => transform};
  z-index: 1;
  span {
    color: red;
    background-color: #333;
    text-transform: uppercase;
    color: #fff;
    padding: 1rem;
    font-size: 1.5rem;
    letter-spacing: 10px;
  }
}`;

export const ParallaxImage2 = styled.img<ParallaxImageProps>`
  position: absolute;
  width: 100%;
  top: 10;
  left: 0;
`;
