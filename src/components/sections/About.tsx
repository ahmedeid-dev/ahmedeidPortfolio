import { motion } from "framer-motion";
import { GraduationCap, Award, MapPin } from "lucide-react";
import { useI18n } from "@/i18n/I18nProvider";

export function SectionHeader({ kicker, title }: { kicker: string; title: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5 }}
      className="mb-12 max-w-2xl"
    >
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-primary">
        {kicker}
      </p>
      <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{title}</h2>
    </motion.div>
  );
}

export function About() {
  const { t } = useI18n();

  const badges = [
    t.availability.fullTime,
    t.availability.partTime,
    t.availability.freelance,
    t.availability.remote,
    t.availability.relocation,
  ];

  return (
    <section id="about" className="relative py-24 sm:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeader kicker={t.about.kicker} title={t.about.title} />

        <div className="grid gap-8 lg:grid-cols-3">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <p className="text-lg leading-relaxed text-foreground/90">
              {t.about.body}
            </p>

            <div className="mt-6 rounded-xl border border-primary/30 bg-primary/5 p-5">
              <p className="font-semibold text-foreground">
                {t.about.availabilityStatement}
              </p>
              <div className="mt-4 flex flex-wrap gap-2">
                {badges.map((b) => (
                  <span
                    key={b}
                    className="rounded-md bg-primary/15 px-2.5 py-1 text-xs font-semibold text-primary"
                  >
                    {b}
                  </span>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin className="h-4 w-4 text-primary" />
              Banha, Egypt · ahmedeid.dev@outlook.com · +20 106 476 6798
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="space-y-4"
          >
            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <GraduationCap className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.about.educationTitle}
                </h3>
              </div>
              <p className="text-foreground">{t.about.education}</p>
            </div>

            <div className="rounded-xl border border-border bg-card p-5">
              <div className="mb-2 flex items-center gap-2">
                <span className="flex h-8 w-8 items-center justify-center rounded-md bg-primary/15 text-primary">
                  <Award className="h-4 w-4" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">
                  {t.about.certTitle}
                </h3>
              </div>
              <p className="font-medium text-foreground">{t.about.cert}</p>
              <p className="mt-1 text-sm text-muted-foreground">
                {t.about.certDetail}
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
