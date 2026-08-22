// import "../styles/CircuitBackground.scss";

// export const CircuitBackground = () => {
//   return (
//     <div className="circuitBackground">
//       <svg
//         className="circuitSvg"
//         viewBox="0 0 1200 800"
//         preserveAspectRatio="xMidYMid slice"
//         xmlns="http://www.w3.org/2000/svg"
//       >
//         <g className="circuitLines">
//           <path d="M0 150 H300 V300 H600 V150 H1200" className="line line1" />
//           <path
//             d="M0 450 H200 V600 H500 V450 H900 V600 H1200"
//             className="line line2"
//           />
//           <path d="M100 0 V200 H400 V500 H100 V800" className="line line3" />
//           <path d="M1100 0 V250 H800 V550 H1100 V800" className="line line4" />
//           <path d="M0 700 H350 V500 H700" className="line line5" />
//         </g>
//         <g className="circuitNodes">
//           <circle cx="300" cy="150" r="4" className="node n1" />
//           <circle cx="600" cy="300" r="4" className="node n2" />
//           <circle cx="500" cy="600" r="4" className="node n3" />
//           <circle cx="900" cy="450" r="4" className="node n4" />
//           <circle cx="400" cy="200" r="4" className="node n5" />
//           <circle cx="800" cy="550" r="4" className="node n6" />
//           <circle cx="350" cy="700" r="4" className="node n7" />
//         </g>
//       </svg>
//       <div className="glowOrb orb1" />
//       <div className="glowOrb orb2" />
//     </div>
//   );
// };

import "../styles/CircuitBackground.scss";

/**
 * Hero background — "Blueprint meets Circuit".
 * Fuses mechanical engineering (drafting grid, dimension ticks, gear train)
 * with software engineering (PCB traces, animated signal pulses, a chip die)
 * into one animated, low-opacity scene that sits behind the hero content.
 */
export const CircuitBackground = () => {
  return (
    <div className="circuitBackground">
      <svg
        className="circuitSvg"
        viewBox="0 0 1440 900"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id="blueprintGrid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path d="M40 0H0V40" className="gridLine" />
          </pattern>
          <radialGradient id="chipGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="var(--mainColor)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--mainColor)" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="scanGradient" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--mainColor)" stopOpacity="0" />
            <stop offset="50%" stopColor="var(--mainColor)" stopOpacity="0.9" />
            <stop offset="100%" stopColor="var(--mainColor)" stopOpacity="0" />
          </linearGradient>
        </defs>

        {/* Drafting-paper grid */}
        <rect width="1440" height="900" fill="url(#blueprintGrid)" />

        {/* Dimension tick clusters — drafting-authenticity detail */}
        <g className="dimensionGroup dim1">
          <path d="M120 90 H260" className="dimLine" />
          <path d="M120 82 V98 M260 82 V98" className="dimTick" />
          <text x="190" y="76" className="dimLabel" textAnchor="middle">
            140.0
          </text>
        </g>
        <g className="dimensionGroup dim2">
          <path d="M1300 620 V760" className="dimLine" />
          <path d="M1292 620 H1308 M1292 760 H1308" className="dimTick" />
          <text x="1318" y="694" className="dimLabel" textAnchor="start">
            140.0
          </text>
        </g>
        <g className="dimensionGroup dim3">
          <circle cx="220" cy="740" r="26" className="dimCircle" />
          <path d="M220 714 V766 M194 740 H246" className="dimCross" />
          <text x="252" y="745" className="dimLabel" textAnchor="start">
            ⌀52
          </text>
        </g>

        {/* Circuit traces */}
        <g className="circuitLines">
          <path d="M0 150 H300 V300 H600 V150 H1200" className="line line1" />
          <path
            d="M0 450 H200 V600 H500 V450 H900 V600 H1200"
            className="line line2"
          />
          <path d="M100 0 V200 H400 V500 H100 V800" className="line line3" />
          <path d="M1160 0 V250 H860 V550 H1160 V900" className="line line4" />
          <path d="M0 700 H350 V500 H700" className="line line5" />
          <path d="M900 900 V700 H1050 V820 H1300" className="line line6" />
        </g>

        {/* Signal pulses travelling along the traces */}
        <g className="pulseGroup">
          <circle r="3.5" className="pulse pulse1">
            <animateMotion
              dur="5s"
              repeatCount="indefinite"
              path="M0 150 H300 V300 H600 V150 H1200"
            />
          </circle>
          <circle r="3.5" className="pulse pulse2">
            <animateMotion
              dur="6.5s"
              repeatCount="indefinite"
              path="M0 450 H200 V600 H500 V450 H900 V600 H1200"
            />
          </circle>
          <circle r="3.5" className="pulse pulse3">
            <animateMotion
              dur="7s"
              repeatCount="indefinite"
              path="M100 0 V200 H400 V500 H100 V800"
            />
          </circle>
        </g>

        <g className="circuitNodes">
          <circle cx="300" cy="150" r="4" className="node n1" />
          <circle cx="600" cy="300" r="4" className="node n2" />
          <circle cx="500" cy="600" r="4" className="node n3" />
          <circle cx="900" cy="450" r="4" className="node n4" />
          <circle cx="400" cy="200" r="4" className="node n5" />
          <circle cx="860" cy="550" r="4" className="node n6" />
          <circle cx="350" cy="700" r="4" className="node n7" />
          <circle cx="1050" cy="820" r="4" className="node n8" />
        </g>

        {/* Chip die — the software half of the signature mark */}
        <g className="chipGroup">
          <circle cx="1080" cy="290" r="70" fill="url(#chipGlow)" />
          <rect
            x="1040"
            y="250"
            width="80"
            height="80"
            rx="6"
            className="chipBody"
          />
          <rect
            x="1058"
            y="268"
            width="44"
            height="44"
            rx="2"
            className="chipCore"
          />
          <path
            d="M1058 278 H1040 M1058 292 H1040 M1058 306 H1040 M1102 278 H1120 M1102 292 H1120 M1102 306 H1120 M1068 250 V232 M1082 250 V232 M1096 250 V232 M1068 330 V348 M1082 330 V348 M1096 330 V348"
            className="chipPins"
          />
        </g>

        {/* Gear train — the mechanical half of the signature mark, meshed with the chip */}
        <g className="gearGroup gearBig">
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(0.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(30.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(60.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(90.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(120.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(150.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(180.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(210.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(240.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(270.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(300.0)"
          />
          <rect
            x="-7.0"
            y="-78.0"
            width="14.0"
            height="20.0"
            rx="1"
            transform="translate(1180 190) rotate(330.0)"
          />
          <circle cx="1180" cy="190" r="58" className="gearRing" />
          <circle cx="1180" cy="190" r="16" className="gearHub" />
        </g>
        <g className="gearGroup gearSmall">
          <rect
            x="-4.5"
            y="-40.0"
            width="9.0"
            height="12.0"
            rx="1"
            transform="translate(1080 290) rotate(0.0)"
          />
          <rect
            x="-4.5"
            y="-40.0"
            width="9.0"
            height="12.0"
            rx="1"
            transform="translate(1080 290) rotate(45.0)"
          />
          <rect
            x="-4.5"
            y="-40.0"
            width="9.0"
            height="12.0"
            rx="1"
            transform="translate(1080 290) rotate(90.0)"
          />
          <rect
            x="-4.5"
            y="-40.0"
            width="9.0"
            height="12.0"
            rx="1"
            transform="translate(1080 290) rotate(135.0)"
          />
          <rect
            x="-4.5"
            y="-40.0"
            width="9.0"
            height="12.0"
            rx="1"
            transform="translate(1080 290) rotate(180.0)"
          />
          <rect
            x="-4.5"
            y="-40.0"
            width="9.0"
            height="12.0"
            rx="1"
            transform="translate(1080 290) rotate(225.0)"
          />
          <rect
            x="-4.5"
            y="-40.0"
            width="9.0"
            height="12.0"
            rx="1"
            transform="translate(1080 290) rotate(270.0)"
          />
          <rect
            x="-4.5"
            y="-40.0"
            width="9.0"
            height="12.0"
            rx="1"
            transform="translate(1080 290) rotate(315.0)"
          />
          <circle cx="1080" cy="290" r="30" className="gearRing" />
        </g>

        {/* Scanning beam */}
        <rect x="0" y="0" width="1440" height="3" className="scanBeam" />
      </svg>

      <div className="glowOrb orb1" />
      <div className="glowOrb orb2" />
    </div>
  );
};
