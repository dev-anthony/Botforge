import { useEffect, useRef } from 'react';

export default function SpaceLayout({ children }: { children: React.ReactNode }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext('2d')!;
    let animId: number;
    let stars: { x:number; y:number; r:number; speed:number; opacity:number; twinkle:number }[] = [];

    function resize() {
      canvas.width = window.innerWidth;
      canvas.height = document.body.scrollHeight;
      initStars();
    }

    function initStars() {
      stars = Array.from({ length: 600 }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        r: Math.random() * 1.4 + 0.2,
        speed: Math.random() * 0.5 + 0.1,
        opacity: Math.random() * 0.7 + 0.2,
        twinkle: Math.random() * Math.PI * 2,
      }));
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const t = Date.now() / 1000;
      for (const s of stars) {
        s.y += s.speed;
        if (s.y > canvas.height) { s.y = 0; s.x = Math.random() * canvas.width; }
        const flicker = 0.5 + 0.5 * Math.sin(t * 1.2 + s.twinkle);
        const op = s.opacity * (0.6 + 0.4 * flicker);
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255,255,255,${op})`;
        ctx.fill();
      }
      animId = requestAnimationFrame(draw);
    }

    resize();
    draw();
    window.addEventListener('resize', resize);
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize); };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-hidden" style={{ background: '#050E1A' }}>
      {/* Stars canvas — covers full scrollable height */}
      <canvas ref={canvasRef} className="fixed top-0 left-0 w-screen h-full pointer-events-none z-0" />

      {/* Cyan arc — top of page only */}
      <div className="fixed top-0 left-0 w-screen pointer-events-none z-[1] overflow-hidden">
        <svg viewBox="0 0 1200 300" className="w-full h-auto" preserveAspectRatio="xMidYMin meet" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="arcGlow" cx="50%" cy="0%" r="60%">
              <stop offset="0%" stopColor="#00F0FF" stopOpacity="0.3" />
              <stop offset="100%" stopColor="#00F0FF" stopOpacity="0" />
            </radialGradient>
          </defs>
          <ellipse cx="600" cy="-80" rx="650" ry="240" fill="none" stroke="#00F0FF" strokeWidth="1" opacity="0.45" />
          <ellipse cx="600" cy="-80" rx="650" ry="240" fill="url(#arcGlow)" />
          <ellipse cx="600" cy="-80" rx="550" ry="190" fill="none" stroke="#00F0FF" strokeWidth="0.4" opacity="0.2" />
        </svg>
      </div>

      {/* Glass overlay */}
      <div className="fixed top-0 left-0 w-screen h-full pointer-events-none z-[2] overflow-hidden"
        style={{ background: 'rgba(5,14,26,0.15)', backdropFilter: 'blur(0.6px)' }} />

      {/* Page content */}
      <div className="relative z-[3]">
        {children}
      </div>
    </div>
  );
}