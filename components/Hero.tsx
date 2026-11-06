"use client";
import { useEffect, useRef } from "react";

type P = { x: number; y: number; hx: number; hy: number; vx: number; vy: number; r: number; p: number; warm: boolean };

export default function Hero() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current;
    const ctx = cv?.getContext("2d");
    if (!cv || !ctx) return;
    const dot = "#4B3FE0", warm = "#D9772B", rgb = "75,63,224";
    const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const dpr = Math.min(devicePixelRatio || 1, 2);
    const gauss = () => (Math.random() + Math.random() + Math.random() - 1.5) / 1.5;
    let W = 0, H = 0, pts: P[] = [], raf = 0, mx = -999, my = -999;

    const init = () => {
      W = cv.clientWidth; H = cv.clientHeight;
      cv.width = W * dpr; cv.height = H * dpr; ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      const wide = W > 800, n = Math.min(170, Math.floor((W * H) / 8000));
      const cx = wide ? W * 0.68 : W * 0.5, cy = H * (wide ? 0.5 : 0.78);
      pts = Array.from({ length: n }, () => {
        const hx = cx + gauss() * W * (wide ? 0.2 : 0.4), hy = cy + gauss() * H * 0.16 - Math.abs(gauss()) * H * 0.06;
        return { x: hx, y: hy, hx, hy, vx: 0, vy: 0, r: Math.random() * 2 + 1, p: Math.random() * 6.28, warm: Math.random() < 0.08 };
      });
    };
    const frame = (t: number) => {
      ctx.clearRect(0, 0, W, H);
      for (const p of pts) {
        const tx = p.hx + Math.sin(t / 2200 + p.p) * 14, ty = p.hy + Math.cos(t / 2600 + p.p) * 10;
        p.vx += (tx - p.x) * 0.02; p.vy += (ty - p.y) * 0.02;
        const dx = p.x - mx, dy = p.y - my, d = Math.hypot(dx, dy);
        if (d < 140 && d > 0) { const f = (140 - d) / 140; p.vx += (dx / d) * f * 2.2; p.vy += (dy / d) * f * 2.2; }
        p.vx *= 0.88; p.vy *= 0.88; p.x += p.vx; p.y += p.vy;
      }
      for (let i = 0; i < pts.length; i++) for (let j = i + 1; j < pts.length; j++) {
        const a = pts[i], b = pts[j], d = Math.hypot(a.x - b.x, a.y - b.y);
        if (d < 95) { ctx.strokeStyle = `rgba(${rgb},${(1 - d / 95) * 0.35})`; ctx.beginPath(); ctx.moveTo(a.x, a.y); ctx.lineTo(b.x, b.y); ctx.stroke(); }
      }
      for (const p of pts) { ctx.fillStyle = p.warm ? warm : dot; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.28); ctx.fill(); }
      if (!reduce) raf = requestAnimationFrame(frame);
    };
    const move = (e: PointerEvent) => { const r = cv.getBoundingClientRect(); mx = e.clientX - r.left; my = e.clientY - r.top; };
    const leave = () => { mx = -999; my = -999; };
    const resize = () => { init(); if (reduce) frame(0); };
    const host = cv.parentElement!;
    init(); raf = requestAnimationFrame(frame);
    addEventListener("resize", resize);
    host.addEventListener("pointermove", move);
    host.addEventListener("pointerleave", leave);
    return () => { cancelAnimationFrame(raf); removeEventListener("resize", resize); host.removeEventListener("pointermove", move); host.removeEventListener("pointerleave", leave); };
  }, []);

  return (
    <section className="relative flex min-h-[90svh] items-center overflow-hidden bg-[radial-gradient(ellipse_at_70%_50%,rgb(var(--bg2)),rgb(var(--bg))_70%)]">
      <canvas ref={ref} aria-hidden="true" className="absolute inset-0 h-full w-full" />
      <div className="relative z-10 w-full"><div className="pointer-events-none mx-auto max-w-[1200px] px-5 pb-16 pt-28 sm:px-8">
        <p className="fade-in mb-5 inline-flex animate-fade items-center gap-2 rounded-full border border-line/25 px-3.5 py-1.5 text-sm text-muted [animation-delay:.1s]">
          <i className="h-[7px] w-[7px] animate-ping2 rounded-full bg-dawn" />AI product company
        </p>
        <h1 className="font-display text-[clamp(2.2rem,5.6vw,4.2rem)] font-bold leading-[1.1] tracking-tight">
          <span className="line-mask"><span className="animate-rise">Harvesting the</span></span>
          <span className="line-mask"><span className="animate-rise [animation-delay:.12s]">power of AI.</span></span>
        </h1>
        <p className="fade-in mb-7 mt-5 max-w-[46ch] animate-fade text-[1.1rem] text-muted [animation-delay:.7s]">We build AI products that make work simpler, faster and more creative, for businesses of every size.</p>
        <div className="fade-in pointer-events-auto flex animate-fade flex-wrap gap-3 [animation-delay:.9s]">
          <a href="#tunk" className="btn">Meet Tunk</a>
          <a href="#contact" className="btn btn-ghost">Talk to our team</a>
        </div>
      </div></div>
      <p className="absolute bottom-4 right-6 z-10 hidden text-xs text-muted md:block">Move your cursor through the cloud</p>
    </section>
  );
}
