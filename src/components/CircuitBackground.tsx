import React, { useEffect, useRef, useState } from "react";
import { BsTriangleHalf } from "react-icons/bs";
import "../styles/parallaxSection.scss";

export const CircuitBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, radius: 150 };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
    };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("resize", handleResize);

    const particlesCount = 45;
    const particles: Particle[] = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      color: string;

      constructor() {
        this.x = Math.random() * width;
        this.y = Math.random() * height;
        this.size = Math.random() * 2 + 1;
        this.speedX = (Math.random() - 0.5) * 1.5;
        this.speedY = (Math.random() - 0.5) * 1.5;
        const colors = ["#00f2fe", "#4facfe", "#7928ca", "#00d2ff"];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        this.x += this.speedX;
        this.y += this.speedY;

        if (this.x < 0 || this.x > width) this.speedX *= -1;
        if (this.y < 0 || this.y > height) this.speedY *= -1;

        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        if (distance < mouse.radius) {
          const angle = Math.atan2(dy, dx);
          this.x -= Math.cos(angle) * 2;
          this.y -= Math.sin(angle) * 2;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.shadowBlur = 10;
        ctx.shadowColor = this.color;
        ctx.fill();
        ctx.shadowBlur = 0;
      }
    }

    for (let i = 0; i < particlesCount; i++) {
      particles.push(new Particle());
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);

      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          const dx = particles[a].x - particles[b].x;
          const dy = particles[a].y - particles[b].y;
          const dist = Math.sqrt(dx * dx + dy * dy);

          if (dist < 130) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(0, 242, 254, ${1 - dist / 130})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }

      particles.forEach((particle) => {
        particle.update();
        particle.draw();
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="circuitBackground">
      <div className="cyberGrid" />
      <div className="laserScanLine" />
      <canvas ref={canvasRef} className="techCanvas" />
      <div className="glowOrb orb1" />
      <div className="glowOrb orb2" />
    </div>
  );
};

// 2. مكون السهم والخط بنفس التعديلات المطلوبة
interface IParallaxLineProps {
  speed?: number;
}

export const ParallaxLine: React.FC<IParallaxLineProps> = ({ speed = 10 }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [scaleX, setScaleX] = useState(0.05);
  const [direction, setDirection] = useState<"up" | "down">("up");
  const lastScrollY = useRef(
    typeof window !== "undefined" ? window.scrollY : 0,
  );

  useEffect(() => {
    let ticking = false;

    const update = () => {
      ticking = false;
      const el = ref.current;
      if (!el) return;

      const currentScrollY = window.scrollY;
      const currentDirection =
        currentScrollY > lastScrollY.current ? "down" : "up";
      lastScrollY.current = currentScrollY;

      const rect = el.getBoundingClientRect();
      const viewportH = window.innerHeight || 1;

      const centerOffset = rect.top + rect.height / 2 - viewportH / 2;
      const progress = Math.max(
        -1,
        Math.min(1, -centerOffset / (viewportH / 2)),
      );

      const angle = progress * speed * 0.2;
      const wiggle = Math.sin(angle) * 0.1;

      const magnitude = Math.max(
        0.05,
        Math.min(0.85, 0.2 + wiggle + Math.abs(progress) * 0.4),
      );

      setScaleX(magnitude);
      setDirection(currentDirection);
    };

    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [speed]);

  return (
    <div className="parallaxRowLine" ref={ref}>
      <div
        className="parallaxLine"
        style={{ transform: `scaleX(${scaleX})` }}
      />
      <div className="parallaxSpace">
        <BsTriangleHalf
          className="BsTriangleHalfIcon"
          style={{
            transform: direction === "down" ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.25s ease-out",
          }}
        />
      </div>
    </div>
  );
};

// 3. المكون الرئيسي للصفحة
const ParallaxPage: React.FC = () => {
  return (
    <div className="parallaxPageContainer">
      <CircuitBackground />

      <main className="heroContent">
        <div className="tag">&lt;ENGINEERING × CODE /&gt;</div>
        <h1 className="title">SAMMAN</h1>
        <p className="subtitle">HI, I'M Abdulrazak</p>
        <p className="role">fullstack/ MERN</p>

        <div className="navLinks">
          <a href="#projects">PROJECTS</a>
          <a href="#engineering">ENGINEERING</a>
          <a href="#skills">SKILLS</a>
          <a href="#contact">CONTACT</a>
        </div>
      </main>

      <footer className="parallaxFooter">
        <ParallaxLine speed={10} />
      </footer>
    </div>
  );
};

export default ParallaxPage;
