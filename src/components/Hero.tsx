import { ChevronDown } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function Hero() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
    }> = [];

    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
      });
    }

    function animate() {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle, i) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = 'rgba(34, 211, 238, 0.3)';
        ctx.fill();

        particles.forEach((otherParticle, j) => {
          if (i !== j) {
            const dx = particle.x - otherParticle.x;
            const dy = particle.y - otherParticle.y;
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 100) {
              ctx.beginPath();
              ctx.moveTo(particle.x, particle.y);
              ctx.lineTo(otherParticle.x, otherParticle.y);
              ctx.strokeStyle = `rgba(34, 211, 238, ${0.1 - distance / 1000})`;
              ctx.stroke();
            }
          }
        });
      });

      requestAnimationFrame(animate);
    }

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const scrollToProjects = () => {
    const element = document.getElementById('projects');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="space-y-8 animate-fade-in">
          <div className="inline-block px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 backdrop-blur-sm">
            <span className="text-cyan-400 text-sm font-medium">
              Available for Opportunities
            </span>
          </div>

          <h1 className="text-5xl sm:text-7xl lg:text-8xl font-bold">
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent">
              Mayuresh More
            </span>
          </h1>

          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">
            <span className="bg-gradient-to-r from-cyan-400 via-green-400 to-cyan-400 bg-clip-text text-transparent">
              AI Engineer | Robotics | Computer Vision
            </span>
          </h2>

          <p className="text-gray-400 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed">
            Building intelligent systems that see, think, and act.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <button
              onClick={scrollToProjects}
              className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-green-500 rounded-lg font-semibold text-black overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <span className="relative z-10">View My Work</span>
              <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-cyan-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </button>

            <a
              href="#contact"
              className="px-8 py-4 border-2 border-cyan-500/50 rounded-lg font-semibold text-cyan-400 hover:bg-cyan-500/10 transition-all duration-300 hover:scale-105"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>

      <button
        onClick={scrollToProjects}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce text-cyan-400 hover:text-cyan-300 transition-colors"
      >
        <ChevronDown size={32} />
      </button>
    </section>
  );
}
