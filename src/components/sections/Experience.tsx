import { motion } from "framer-motion";
import { Briefcase, MapPin, Calendar } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";
import { SectionHeader } from "./About";

export function Experience() {
  const { t } = useI18n();

  return (
    <section id="experience" className="relative bg-surface/40 py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t.experience.kicker} title={t.experience.title} />

        <div className="relative">
          <div className="absolute top-0 bottom-0 left-4 w-px bg-gradient-to-b from-primary/60 via-border to-transparent md:left-1/2" />

          <div className="space-y-10">
            {t.experience.items.map((item, idx) => (
              <motion.div
                key={item.company}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                className={`relative grid gap-4 md:grid-cols-2 md:gap-12 ${
                  idx % 2 === 0 ? "" : "md:[direction:rtl]"
                }`}
              >
                <div
                  className={`pl-12 md:pl-0 ${
                    idx % 2 === 0
                      ? "md:pr-12 md:text-end"
                      : "md:pl-12 md:[direction:ltr]"
                  }`}
                >
                  <span className="absolute left-4 top-2 flex h-3 w-3 -translate-x-1/2 items-center justify-center md:left-1/2">
                    <span className="absolute h-3 w-3 animate-ping rounded-full bg-primary/60" />
                    <span className="relative h-3 w-3 rounded-full bg-primary ring-4 ring-background" />
                  </span>

                  <div className="rounded-xl border border-border bg-card p-5 shadow-card transition-all hover:border-primary/40 hover:shadow-glow">
                    <div className="mb-2 flex items-center gap-2 text-primary">
                      <Briefcase className="h-4 w-4" />
                      <h3 className="font-bold text-foreground">{item.company}</h3>
                    </div>
                    <p className="text-sm font-medium text-foreground/80">{item.role}</p>
                    <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Calendar className="h-3 w-3" /> {item.date}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3 w-3" /> {item.location}
                      </span>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm leading-relaxed text-foreground/85">
                      {item.bullets.map((b, i) => (
                        <li key={i} className="flex gap-2">
                          <span className="mt-2 inline-block h-1 w-1 flex-shrink-0 rounded-full bg-primary" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
