import "../styles/CircuitBackground.scss";

export const CircuitBackground = () => {
  return (
    <div className="circuitBackground">
      <svg
        className="circuitSvg"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g className="circuitLines">
          <path d="M0 150 H300 V300 H600 V150 H1200" className="line line1" />
          <path
            d="M0 450 H200 V600 H500 V450 H900 V600 H1200"
            className="line line2"
          />
          <path d="M100 0 V200 H400 V500 H100 V800" className="line line3" />
          <path d="M1100 0 V250 H800 V550 H1100 V800" className="line line4" />
          <path d="M0 700 H350 V500 H700" className="line line5" />
        </g>
        <g className="circuitNodes">
          <circle cx="300" cy="150" r="4" className="node n1" />
          <circle cx="600" cy="300" r="4" className="node n2" />
          <circle cx="500" cy="600" r="4" className="node n3" />
          <circle cx="900" cy="450" r="4" className="node n4" />
          <circle cx="400" cy="200" r="4" className="node n5" />
          <circle cx="800" cy="550" r="4" className="node n6" />
          <circle cx="350" cy="700" r="4" className="node n7" />
        </g>
      </svg>
      <div className="glowOrb orb1" />
      <div className="glowOrb orb2" />
    </div>
  );
};
