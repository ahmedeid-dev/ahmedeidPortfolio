import { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { Download, ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useI18n } from "@/i18n/I18nProvider";


export function Hero() {
  const { t } = useI18n();
  const typedEl = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!typedEl.current) return;
    const typed = new Typed(typedEl.current, {
      strings: [...t.hero.roles],
      typeSpeed: 55,
      backSpeed: 30,
      backDelay: 1600,
      loop: true,
      smartBackspace: true,
    });
    return () => typed.destroy();
  }, [t.hero.roles]);

  const badges = [
    t.availability.fullTime,
    t.availability.partTime,
    t.availability.freelance,
    t.availability.remote,
    t.availability.relocation,
  ];

  return (
    <section
      id="home"
      className="relative overflow-hidden pt-28 pb-20 md:pt-36 md:pb-28"
    >
      <div className="absolute inset-0 bg-grid opacity-50 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_75%)]" />
      <div className="absolute top-1/3 -left-32 h-96 w-96 rounded-full bg-primary/20 blur-3xl" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            <Sparkles className="h-3 w-3" />
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Available for new opportunities
          </div>

          <p className="mb-2 text-base font-medium text-muted-foreground">
            {t.hero.greeting}
          </p>
          <h1 className="text-4xl font-bold leading-[1.05] tracking-tight sm:text-5xl lg:text-6xl">
            <span className="text-gradient">{t.hero.name}</span>
          </h1>

          <div className="mt-4 flex h-10 items-center text-lg font-medium text-foreground sm:text-2xl">
            <span ref={typedEl} />
          </div>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
            {t.hero.tagline}
          </p>

          <div className="mt-7 flex flex-wrap gap-2">
            {badges.map((b) => (
              <span
                key={b}
                className="rounded-md border border-border bg-surface px-2.5 py-1 text-xs font-medium text-foreground/90"
              >
                {b}
              </span>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Button asChild size="lg" className="gap-2 shadow-glow">
              <a href="#experience">
                {t.hero.viewWork}
                <ArrowRight className="h-4 w-4 rtl:rotate-180" />
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="gap-2">
              <a href="/Ahmed-Eid-CV.pdf" download>
                <Download className="h-4 w-4" />
                {t.hero.downloadCv}
              </a>
            </Button>
          </div>

          <div className="mt-7 flex items-center gap-3">
            <a
              href="https://github.com/ahmedeid-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <FaGithub className="h-4 w-4" />
            </a>
            <a
              href="https://linkedin.com/in/ahmedeid-dev"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <FaLinkedin className="h-4 w-4" />
            </a>
            <a
              href="mailto:ahmedeid.dev@outlook.com"
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-md border border-border bg-surface text-foreground/80 transition-colors hover:border-primary hover:text-primary"
            >
              <HiMail className="h-4 w-4" />
            </a>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
