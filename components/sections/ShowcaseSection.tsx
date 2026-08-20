"use client";

import { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import { useTranslation } from "@/lib/i18n/useTranslation";

interface Scene {
  labelKey: string;
  titleKey: string;
  italicKey: string;
  descKey: string;
  screenIndex: number;
}

const scenes: Scene[] = [
  {
    labelKey: "show.label",
    titleKey: "show.1.title",
    italicKey: "show.1.italic",
    descKey: "show.1.desc",
    screenIndex: -1,
  },
  {
    labelKey: "show.2.label",
    titleKey: "show.2.title",
    italicKey: "show.2.italic",
    descKey: "show.2.desc",
    screenIndex: 0,
  },
  {
    labelKey: "show.3.label",
    titleKey: "show.3.title",
    italicKey: "show.3.italic",
    descKey: "show.3.desc",
    screenIndex: 1,
  },
  {
    labelKey: "show.4.label",
    titleKey: "show.4.title",
    italicKey: "show.4.italic",
    descKey: "show.4.desc",
    screenIndex: 2,
  },
  {
    labelKey: "show.5.label",
    titleKey: "show.5.title",
    italicKey: "show.5.italic",
    descKey: "show.5.desc",
    screenIndex: 3,
  },
];

export function ShowcaseSection() {
  const containerRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <section
      ref={containerRef}
      id="showcase"
      className="relative bg-bg-dark text-text-on-dark"
      style={{ height: `${scenes.length * 100}vh` }}
      aria-label="Our approach"
    >
      <div className="sticky top-0 flex h-screen flex-col items-center justify-center overflow-hidden">
        {/* Decorative grid */}
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255, 255, 255, 0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.07) 1px, transparent 1px)",
            backgroundSize: "70px 70px",
            maskImage:
              "radial-gradient(ellipse 80% 70% at center, black 30%, transparent 85%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 80% 70% at center, black 30%, transparent 85%)",
          }}
          aria-hidden="true"
        />

        {/* Glow Layer 1 — Big ambient glow center */}
        <div
          className="pointer-events-none absolute left-1/2 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full md:h-[900px] md:w-[900px]"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 142, 247, 0.18) 0%, rgba(79, 142, 247, 0.05) 40%, transparent 70%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        {/* Glow Layer 2 — Accent glow near laptop (right side, desktop only) */}
        <div
          className="pointer-events-none absolute right-[5%] top-1/2 hidden h-[600px] w-[600px] -translate-y-1/2 rounded-full lg:block"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 142, 247, 0.25) 0%, transparent 60%)",
            filter: "blur(80px)",
          }}
          aria-hidden="true"
        />

        {/* Glow Layer 3 — Subtle warm glow on left (desktop only) */}
        <div
          className="pointer-events-none absolute left-[5%] top-1/2 hidden h-[400px] w-[400px] -translate-y-1/2 rounded-full lg:block"
          style={{
            background:
              "radial-gradient(circle, rgba(79, 142, 247, 0.12) 0%, transparent 65%)",
            filter: "blur(60px)",
          }}
          aria-hidden="true"
        />

        {/* Stage */}
        <div className="relative h-full w-full">
          {scenes.map((scene, i) => (
            <SceneText
              key={i}
              scene={scene}
              index={i}
              total={scenes.length}
              progress={smoothProgress}
            />
          ))}

          {/* Desktop laptop (lg+) */}
          <LaptopMockup progress={smoothProgress} />

          {/* Mobile/Tablet laptop (below lg) */}
          <MobileLaptopMockup progress={smoothProgress} />

          <ProgressDots
            total={scenes.length}
            progress={smoothProgress}
          />
        </div>
      </div>
    </section>
  );
}

function SceneText({
  scene,
  index,
  total,
  progress,
}: {
  scene: Scene;
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const { t } = useTranslation();

  const sceneStart = index / total;
  const sceneEnd = (index + 1) / total;
  const fadeInDuration = 0.04;
  const fadeOutDuration = 0.04;

  const opacity = useTransform(
    progress,
    [
      sceneStart - 0.02,
      sceneStart + fadeInDuration,
      sceneEnd - fadeOutDuration,
      sceneEnd + 0.02,
    ],
    [0, 1, 1, 0]
  );

  const y = useTransform(
    progress,
    [
      sceneStart - 0.02,
      sceneStart + fadeInDuration,
      sceneEnd - fadeOutDuration,
      sceneEnd + 0.02,
    ],
    [30, 0, 0, -30]
  );

  return (
    <motion.div
      className="absolute inset-x-0 top-[18%] z-10 flex flex-col items-center px-5 text-center md:top-[20%] lg:inset-0 lg:top-0 lg:items-start lg:justify-center lg:pl-[8%] lg:pr-0 lg:text-left"
      style={{ opacity, y }}
      aria-hidden={index === 0 ? "false" : "true"}
    >
      <div className="w-full max-w-[440px]">
        <div className="mb-3 font-mono text-[0.65rem] uppercase tracking-[0.25em] text-accent-electric md:text-meta md:tracking-[0.3em]">
          {t(scene.labelKey as never)}
        </div>
        <h3 className="mb-3 font-sans text-[2rem] font-bold leading-[1.05] tracking-tight md:text-[2.5rem] lg:text-display-md">
          {t(scene.titleKey as never)}
          <br />
          <span className="italic-serif text-accent-electric">
            {t(scene.italicKey as never)}
          </span>
        </h3>
        <p className="mx-auto max-w-[440px] text-[0.95rem] leading-relaxed text-text-on-dark/70 md:text-body-lg lg:mx-0">
          {t(scene.descKey as never)}
        </p>
      </div>
    </motion.div>
  );
}

/**
 * Desktop laptop — visible only on lg+ screens
 */
function LaptopMockup({ progress }: { progress: MotionValue<number> }) {
  const scale = useTransform(progress, [0, 0.2, 1], [0.7, 1, 1]);
  const opacity = useTransform(progress, [0, 0.15, 1], [0.5, 1, 1]);

  const activeScreen = useTransform(progress, (latest: number) => {
    const sceneIndex = Math.min(
      Math.floor(latest * scenes.length),
      scenes.length - 1
    );
    return Math.max(0, scenes[sceneIndex]?.screenIndex ?? 0);
  });

  return (
    <motion.div
      className="absolute inset-0 z-[5] hidden items-center justify-end pr-[5%] lg:flex xl:pr-[8%]"
      style={{ opacity }}
    >
      <motion.div
        className="relative w-[440px] xl:w-[500px]"
        style={{ scale }}
      >
        {/* Halo glow */}
        <div
          className="pointer-events-none absolute -inset-20 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(79, 142, 247, 0.35) 0%, rgba(79, 142, 247, 0.1) 40%, transparent 70%)",
            filter: "blur(50px)",
          }}
          aria-hidden="true"
        />

        <div className="relative rounded-t-[12px] rounded-b-[4px] bg-gradient-to-b from-[#2a2f4a] to-[#1a1d35] px-3 pb-4 pt-3 shadow-[0_30px_60px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.2),0_0_60px_rgba(79,142,247,0.3)]">
          <div className="absolute left-1/2 top-1.5 h-1 w-1 -translate-x-1/2 rounded-full bg-[#555]" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-bg-primary">
            <ScreenContent activeScreen={activeScreen} />
          </div>
        </div>
        <div className="relative mx-[-20px] h-3 rounded-b-2xl bg-gradient-to-b from-[#2a2f4a] to-[#1a1d35]">
          <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 rounded-b-lg bg-[#0a0d1a]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

/**
 * Mobile/Tablet laptop — appears below text, smaller, only on screens below lg
 */
function MobileLaptopMockup({ progress }: { progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [0, 0.18, 0.22, 1], [0, 0, 1, 1]);
  const scale = useTransform(progress, [0, 0.18, 0.25, 1], [0.85, 0.85, 1, 1]);

  const activeScreen = useTransform(progress, (latest: number) => {
    const sceneIndex = Math.min(
      Math.floor(latest * scenes.length),
      scenes.length - 1
    );
    return Math.max(0, scenes[sceneIndex]?.screenIndex ?? 0);
  });

  return (
    <motion.div
      className="absolute inset-x-0 bottom-[14%] z-[5] flex justify-center px-5 md:bottom-[16%] lg:hidden"
      style={{ opacity }}
    >
      <motion.div
        className="relative w-[260px] sm:w-[320px] md:w-[400px]"
        style={{ scale }}
      >
        {/* Subtle halo */}
        <div
          className="pointer-events-none absolute -inset-10 rounded-full"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(79, 142, 247, 0.3) 0%, transparent 70%)",
            filter: "blur(40px)",
          }}
          aria-hidden="true"
        />

        <div className="relative rounded-t-[10px] rounded-b-[3px] bg-gradient-to-b from-[#2a2f4a] to-[#1a1d35] px-2.5 pb-3 pt-2.5 shadow-[0_20px_40px_rgba(0,0,0,0.5),0_0_0_1px_rgba(255,255,255,0.15),0_0_40px_rgba(79,142,247,0.25)]">
          <div className="absolute left-1/2 top-1 h-[3px] w-[3px] -translate-x-1/2 rounded-full bg-[#555]" />
          <div className="relative aspect-[16/10] overflow-hidden rounded-sm bg-bg-primary">
            <ScreenContent activeScreen={activeScreen} />
          </div>
        </div>
        <div className="relative mx-[-15px] h-2 rounded-b-xl bg-gradient-to-b from-[#2a2f4a] to-[#1a1d35]">
          <div className="absolute left-1/2 top-0 h-[3px] w-16 -translate-x-1/2 rounded-b-md bg-[#0a0d1a]" />
        </div>
      </motion.div>
    </motion.div>
  );
}

function ScreenContent({ activeScreen }: { activeScreen: MotionValue<number> }) {
  return (
    <>
      <ScreenWireframe activeScreen={activeScreen} />
      <ScreenDesign activeScreen={activeScreen} />
      <ScreenLive activeScreen={activeScreen} />
      <ScreenMetrics activeScreen={activeScreen} />
    </>
  );
}

function useScreenOpacity(activeScreen: MotionValue<number>, index: number) {
  return useTransform(activeScreen, (latest: number) =>
    Math.round(latest) === index ? 1 : 0
  );
}

function ScreenWireframe({ activeScreen }: { activeScreen: MotionValue<number> }) {
  const opacity = useScreenOpacity(activeScreen, 0);
  return (
    <motion.div
      className="absolute inset-0 flex flex-col gap-3 bg-gradient-to-br from-[#FAFAF7] to-[#F4F3EE] p-5"
      style={{ opacity }}
      transition={{ duration: 0.3 }}
    >
      <div className="h-2 w-2/5 rounded bg-text-primary/15" />
      <div className="h-2 w-3/5 rounded bg-text-primary/15" />
      <div className="h-2 w-full rounded bg-text-primary/15" />
      <div className="mt-2 flex-1 rounded-lg bg-text-primary/10" />
    </motion.div>
  );
}

function ScreenDesign({ activeScreen }: { activeScreen: MotionValue<number> }) {
  const opacity = useScreenOpacity(activeScreen, 1);
  return (
    <motion.div
      className="absolute inset-0 flex flex-col bg-gradient-to-br from-brand-navy to-brand-blue p-5 text-white"
      style={{ opacity }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-2 text-2xl font-bold">Lumera</div>
      <div className="mb-4 text-[0.7rem] opacity-70">Skincare Brand</div>
      <div className="grid flex-1 grid-cols-3 gap-2">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="rounded bg-white/10" />
        ))}
      </div>
    </motion.div>
  );
}

function ScreenLive({ activeScreen }: { activeScreen: MotionValue<number> }) {
  const opacity = useScreenOpacity(activeScreen, 2);
  return (
    <motion.div
      className="absolute inset-0 flex flex-col justify-center bg-[#0F0D0B] p-6 text-[#E8DCC4]"
      style={{ opacity }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-3 font-mono text-[0.6rem] tracking-[0.2em] text-[#D4A857]">
        ★ NEW LAUNCH
      </div>
      <div className="mb-2 font-serif text-[2.2rem] italic leading-none text-[#D4A857]">
        Slow Brew.
      </div>
      <div className="max-w-[200px] text-[0.75rem] opacity-70">
        Late-night sanctuary in Kemang
      </div>
    </motion.div>
  );
}

function ScreenMetrics({ activeScreen }: { activeScreen: MotionValue<number> }) {
  const opacity = useScreenOpacity(activeScreen, 3);
  return (
    <motion.div
      className="absolute inset-0 flex flex-col bg-bg-primary p-5"
      style={{ opacity }}
      transition={{ duration: 0.3 }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div className="text-[0.9rem] font-bold text-text-primary">
          Lighthouse
        </div>
        <div className="rounded bg-accent-success px-2 py-0.5 text-[0.55rem] font-semibold text-white">
          LIVE
        </div>
      </div>
      <div className="grid flex-1 grid-cols-2 gap-2">
        <div className="rounded-lg bg-bg-secondary p-3">
          <div className="mb-1 text-[0.55rem] uppercase tracking-[0.1em] text-text-muted">
            Performance
          </div>
          <div className="text-[1.2rem] font-bold text-brand-navy">98</div>
          <div className="text-[0.55rem] font-semibold text-accent-success">
            ↑ Excellent
          </div>
        </div>
        <div className="rounded-lg bg-bg-secondary p-3">
          <div className="mb-1 text-[0.55rem] uppercase tracking-[0.1em] text-text-muted">
            Loading
          </div>
          <div className="text-[1.2rem] font-bold text-brand-navy">1.2s</div>
          <div className="text-[0.55rem] font-semibold text-accent-success">
            ↑ Fast
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ProgressDots({
  total,
  progress,
}: {
  total: number;
  progress: MotionValue<number>;
}) {
  return (
    <div className="absolute bottom-6 left-1/2 z-10 flex -translate-x-1/2 gap-2 md:bottom-10 md:gap-3">
      {Array.from({ length: total }).map((_, i) => (
        <Dot key={i} index={i} total={total} progress={progress} />
      ))}
    </div>
  );
}

function Dot({
  index,
  total,
  progress,
}: {
  index: number;
  total: number;
  progress: MotionValue<number>;
}) {
  const isActive = useTransform(progress, (latest: number) => {
    const current = Math.min(Math.floor(latest * total), total - 1);
    return current === index;
  });

  const width = useTransform(isActive, (active: boolean) => (active ? 36 : 24));
  const bg = useTransform(isActive, (active: boolean) =>
    active ? "#4F8EF7" : "rgba(255, 255, 255, 0.25)"
  );
  const boxShadow = useTransform(isActive, (active: boolean) =>
    active ? "0 0 12px rgba(79, 142, 247, 0.8)" : "none"
  );

  return (
    <motion.div
      className="h-[3px] rounded-sm md:h-[3px]"
      style={{ width, backgroundColor: bg, boxShadow }}
      transition={{ duration: 0.3 }}
    />
  );
}